import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="py-24 px-6 bg-stone-950 border-t border-stone-800 relative overflow-hidden">
             {/* Background Kanji - 'En' (Connection/Fate) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none z-0">
                <span className="text-[min(40vw,20rem)] font-brush text-sekiro-paper leading-none">
                    縁
                </span>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <div className="mb-16">
                    <h2 className="relative text-4xl md:text-5xl font-serif text-sekiro-paper pb-4 inline-block transform -rotate-1">
                        Commune
                        {/* Glowing Underline */}
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8),0_0_3px_rgba(6,182,212,0.5)] rounded-full" />
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    {/* Email Card */}
                    <a 
                        href="mailto:your.email@example.com"
                        className="group flex flex-col items-center justify-center p-8 bg-stone-900/60 border border-stone-800 hover:border-cyan-500 transition-all duration-500 rounded-sm backdrop-blur-sm relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 w-16 h-16 mb-4 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                            <Mail className="w-8 h-8 text-stone-300 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="relative z-10 text-xl font-serif text-sekiro-gold mb-2 group-hover:text-sekiro-paper transition-colors">Send a Mail</h3>
                        <p className="relative z-10 text-stone-500 text-sm group-hover:text-stone-400 transition-colors">
                            Get in touch via Email
                        </p>
                    </a>

                    {/* Socials Column */}
                    <div className="flex flex-col gap-4">
                        <a 
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-6 bg-stone-900/60 border border-stone-800 hover:border-sekiro-gold transition-all duration-300 rounded-sm backdrop-blur-sm flex-1 relative overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 w-1 h-full bg-stone-700 group-hover:bg-sekiro-gold transition-colors duration-300" />
                            
                            <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <Linkedin className="w-6 h-6 text-stone-300 group-hover:text-sekiro-gold transition-colors" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-serif text-stone-200 group-hover:text-sekiro-gold transition-colors">LinkedIn</h3>
                                <p className="text-stone-600 text-xs uppercase tracking-wider">Connect</p>
                            </div>
                        </a>

                        <a 
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-6 bg-stone-900/60 border border-stone-800 hover:border-sekiro-gold transition-all duration-300 rounded-sm backdrop-blur-sm flex-1 relative overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 w-1 h-full bg-stone-700 group-hover:bg-sekiro-gold transition-colors duration-300" />

                            <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <Github className="w-6 h-6 text-stone-300 group-hover:text-sekiro-gold transition-colors" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-serif text-stone-200 group-hover:text-sekiro-gold transition-colors">GitHub</h3>
                                <p className="text-stone-600 text-xs uppercase tracking-wider">Examine Code</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
