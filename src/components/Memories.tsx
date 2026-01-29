import React, { useState, useCallback, useMemo, memo } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { useModalState } from '../hooks/useModalState';
import { IMAGE_FALLBACK_URL, THUMBNAIL_STYLES } from '../utils/constants';

// Memoize project data transformation
const PROJECTS: Project[] = projectsData.projects.games.map((game: any) => ({
    id: game.id,
    title: game.title,
    description: game.description,
    longDescription: game.description,
    image: game.thumbnail,
    gallery: game.images,
    tags: [], 
    link: game.link,
}));

const Memories: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Manage modal overflow state
    useModalState(!!selectedProject);

    // Image fallback handler
    const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = IMAGE_FALLBACK_URL(Math.random());
    }, []);

    // Memoized gallery length
    const galleryLength = useMemo(() => selectedProject?.gallery?.length ?? 0, [selectedProject?.gallery]);

    // Optimized navigation handlers
    const handleNextImage = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (galleryLength <= 1) return;
        setCurrentImageIndex((prev) => (prev + 1) % galleryLength);
    }, [galleryLength]);

    const handlePrevImage = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (galleryLength <= 1) return;
        setCurrentImageIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
    }, [galleryLength]);

    const closePopup = useCallback(() => setSelectedProject(null), []);
    
    const handleSelectProject = useCallback((project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    }, []);

    return (
        <div className="py-24 px-6 bg-sekiro-fog/30 border-y border-stone-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader title="Projects" kanji="憶" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            onClick={handleSelectProject}
                            onImageError={handleImageError}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject}
                    currentImageIndex={currentImageIndex}
                    onClose={closePopup}
                    onNextImage={handleNextImage}
                    onPrevImage={handlePrevImage}
                    onThumbnailClick={setCurrentImageIndex}
                    onImageError={handleImageError}
                />
            )}
        </div>
    );
};

// Memoized modal component for better performance
const ProjectModal = memo<{
    project: Project;
    currentImageIndex: number;
    onClose: () => void;
    onNextImage: (e: React.MouseEvent) => void;
    onPrevImage: (e: React.MouseEvent) => void;
    onThumbnailClick: (idx: number) => void;
    onImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}>(({ project, currentImageIndex, onClose, onNextImage, onPrevImage, onThumbnailClick, onImageError }) => {
    const currentImage = project.gallery?.[currentImageIndex] ?? project.image;
    const hasMultipleImages = (project.gallery?.length ?? 0) > 1;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl bg-stone-900 sm:border-2 border-stone-600 shadow-2xl animate-scaleIn h-full sm:h-auto sm:max-h-[90vh] flex flex-col overflow-hidden rounded-none sm:rounded-sm">
                
                {/* Header Bar for Close Button */}
                <div className="flex justify-between items-center p-3 bg-stone-950 border-b border-stone-800 shrink-0 z-30">
                    <h3 className="text-stone-400 text-sm font-serif uppercase tracking-widest pl-2">Project Details</h3>
                    <button 
                        onClick={onClose}
                        className="p-2 text-stone-400 hover:text-sekiro-red hover:bg-stone-900 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Combined Header (Main Image + Thumbnails) */}
                <div className="relative shrink-0 flex flex-col bg-stone-950">
                    
                    {/* Blurred Background Layer */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img 
                            src={currentImage}
                            alt=""
                            onError={onImageError}
                            className="w-full h-full object-cover blur-2xl opacity-40 scale-110 transform transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Main Image Area */}
                    <div className="relative z-10 h-56 sm:h-96 w-full group/gallery flex items-center justify-center overflow-hidden bg-black/20">
                        <img 
                            src={currentImage} 
                            alt={project.title} 
                            onError={onImageError}
                            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                        />
                        
                        {hasMultipleImages && (
                            <>
                                <button 
                                    onClick={onPrevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/50 hover:bg-sekiro-gold text-white rounded-full transition-colors opacity-100 sm:opacity-0 group-hover/gallery:opacity-100 duration-300 z-20"
                                >
                                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                                </button>
                                <button 
                                    onClick={onNextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/50 hover:bg-sekiro-gold text-white rounded-full transition-colors opacity-100 sm:opacity-0 group-hover/gallery:opacity-100 duration-300 z-20"
                                >
                                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnail Strip */}
                    {hasMultipleImages && (
                        <div className="relative z-10 w-full border-b border-stone-800/50 p-2 sm:p-3 flex justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto custom-scrollbar bg-black/20 backdrop-blur-sm">
                            {project.gallery!.map((imgUrl, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); onThumbnailClick(idx); }}
                                    className={`${THUMBNAIL_STYLES.base} ${
                                        idx === currentImageIndex 
                                        ? THUMBNAIL_STYLES.active
                                        : THUMBNAIL_STYLES.inactive
                                    }`}
                                >
                                    <img 
                                        src={imgUrl} 
                                        alt={`Thumbnail ${idx + 1}`} 
                                        onError={onImageError}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 p-5 sm:p-8 overflow-y-auto custom-scrollbar bg-stone-900">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-sekiro-paper mb-4 border-b border-stone-700 pb-4">
                        {project.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {(project.tags || []).map(tag => (
                            <span key={tag} className="text-sm px-3 py-1 bg-stone-800 border border-stone-600 text-sekiro-gold rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="prose prose-invert prose-stone max-w-none mb-8 font-serif leading-relaxed text-stone-300 whitespace-pre-line text-sm sm:text-base">
                        {project.longDescription || project.description}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4 border-t border-stone-800">
                        {project.github && (
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center justify-center px-6 py-3 bg-stone-800 border border-stone-600 hover:border-sekiro-red hover:text-sekiro-red transition-colors uppercase tracking-widest text-sm font-bold"
                            >
                                <Github size={18} className="mr-2" /> Examine Code
                            </a>
                        )}
                        {project.link && (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center justify-center px-6 py-3 bg-sekiro-red/20 border border-sekiro-red text-sekiro-red hover:bg-sekiro-red hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
                            >
                                <ExternalLink size={18} className="mr-2" /> Play Memory
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

ProjectModal.displayName = 'ProjectModal';
export default Memories;