import React, { memo } from 'react';
import { Project } from '../types';
import { Maximize2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  onImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, onClick, onImageError }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group relative bg-stone-900 border border-stone-800 hover:border-sekiro-red transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden bg-stone-800">
        <img 
          src={project.image} 
          alt={project.title} 
          onError={onImageError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black/50 backdrop-blur-sm p-3 rounded-full border border-sekiro-gold text-sekiro-gold">
            <Maximize2 size={24} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-sekiro-paper mb-2 group-hover:text-sekiro-red transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {(project.tags || []).slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-2 py-1 border border-stone-700 text-stone-400 rounded-sm">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-stone-400 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Kanji Overlay Effect */}
      <div className="absolute top-2 right-2 opacity-10 pointer-events-none select-none text-4xl font-brush">
        記憶
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
