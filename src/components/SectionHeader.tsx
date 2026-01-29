import React from 'react';

interface SectionHeaderProps {
  title: string;
  kanji: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, kanji }) => {
  return (
    <>
      {/* Background Kanji */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none z-0">
        <span className="text-[min(40vw,20rem)] font-brush text-sekiro-paper leading-none">
          {kanji}
        </span>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-sekiro-paper border-b-2 border-sekiro-red/50 pb-4 inline-block transform -rotate-1">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionHeader;
