import React, { memo } from 'react';

interface EducationData {
  degree: string;
  period: string;
  school: string;
}

interface EducationItemProps {
  item: EducationData;
}

const EducationItem: React.FC<EducationItemProps> = memo(({ item }) => {
  return (
    <div className="group relative pl-8 border-l-2 border-stone-800 hover:border-sekiro-red transition-colors duration-300">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-900 border-2 border-stone-600 group-hover:border-sekiro-red transition-colors duration-300" />
      
      <div className="mb-1 flex flex-wrap justify-between items-baseline">
        <h4 className="text-xl font-bold text-sekiro-paper group-hover:text-sekiro-gold transition-colors">
          {item.degree}
        </h4>
        <span className="text-sm font-mono text-sekiro-red/80">{item.period}</span>
      </div>
      <p className="text-stone-400 font-serif italic mb-2">{item.school}</p>
    </div>
  );
});

EducationItem.displayName = 'EducationItem';

export default EducationItem;
