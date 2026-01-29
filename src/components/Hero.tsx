import React from 'react';

const Hero: React.FC = () => {
    const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Layer - using a dark placeholder or gradient for now */}
            <div className="absolute inset-0 bg-stone-950 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 via-stone-950 to-black opacity-60"></div>
                {/* Simulated Embers/Particles */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse-slow"></div>
            </div>

            {/* Kanji Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-10 select-none">
                {/* 
                   Resized to min(25vw, 30vh). 
                   Since there are 2 characters (改善), width is approx 2em.
                   2 * 25vw = 50vw (fits comfortably in width).
                   30vh fits comfortably in height.
                */}
                <span className="text-[min(25vw,30vh)] font-black text-sekiro-red font-brush leading-none whitespace-nowrap">
                    改善
                </span>
            </div>

            {/* Main Content */}
            <div className="relative z-20 text-center px-4">
                <h2 className="text-sekiro-gold tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fadeIn">
                    Game Programmer
                </h2>
                <h1 className="text-5xl md:text-8xl font-serif text-sekiro-paper mb-6 font-bold tracking-tighter drop-shadow-2xl">
                    SESHAVARAAJ <span className="text-sekiro-red">Y</span>
                </h1>
                
                <p className="max-w-2xl mx-auto text-stone-300 font-serif text-base md:text-lg mb-8 leading-relaxed">
                    Enthusiastic game programmer specializing in C# and Unity. I build core gameplay systems and intuitive UI, solve tricky bugs, and prioritize clean, efficient code and performance. I enjoy crafting player-focused experiences and collaborating to ship polished games.
                </p>

                <p className="max-w-xl mx-auto text-stone-500 font-serif text-lg md:text-xl italic mb-12 leading-relaxed">
                    "Hesitation is Defeat"
                </p>

                <a 
                    href="#projects" 
                    onClick={scrollToProjects}
                    className="inline-block px-8 py-3 border border-stone-500 text-stone-300 hover:text-sekiro-gold hover:border-sekiro-gold transition-all duration-300 uppercase tracking-widest text-sm bg-stone-900/50 backdrop-blur-sm cursor-pointer"
                >
                    Begin Journey
                </a>
            </div>
            
            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(transparent_0%,_#000_100%)] z-10"></div>
        </div>
    );
};

export default Hero;
