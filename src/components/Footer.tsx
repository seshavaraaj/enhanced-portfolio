import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-950 py-12 border-t border-stone-800 text-center relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-stone-500 text-sm font-serif">
                    © {new Date().getFullYear()} Seshavaraaj Y.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
