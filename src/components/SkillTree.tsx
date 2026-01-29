import React, { memo, useMemo } from 'react';
import { Skill } from '../types';
import { Code2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SKILLS: Skill[] = [
    { id: 'cpp', name: 'C++', iconClass: 'devicon-cplusplus-plain' },
    { id: 'csharp', name: 'C#', iconClass: 'devicon-csharp-plain' },
    { id: 'unity', name: 'Unity', iconClass: 'devicon-unity-plain' },
    { id: 'vs', name: 'Visual Studio', iconClass: 'devicon-visualstudio-plain' },
    { id: 'vscode', name: 'VS Code', iconClass: 'devicon-vscode-plain' },
    { id: 'git', name: 'Git / GitHub', iconClass: 'devicon-git-plain' },
];

interface SkillItemProps {
  skill: Skill;
}

// Memoized skill item component
const SkillItem = memo<SkillItemProps>(({ skill }) => {
  const renderIcon = () => {
    if (skill.iconClass) {
      return <i className={`${skill.iconClass} text-5xl mb-4 text-stone-500 group-hover:text-sekiro-gold transition-colors duration-300`}></i>;
    }
    return <Code2 className="w-12 h-12 mb-4 text-stone-500 group-hover:text-sekiro-gold transition-colors duration-300" />;
  };

  return (
    <div
      key={skill.id}
      className="group relative w-full h-full p-6 border border-stone-800 bg-stone-900/40 hover:bg-stone-900 hover:border-sekiro-red/50 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm"
    >
      {renderIcon()}
      
      <h4 className="font-serif text-lg text-stone-300 group-hover:text-sekiro-paper transition-colors">
        {skill.name}
      </h4>
      
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-600 group-hover:border-sekiro-red transition-colors opacity-0 group-hover:opacity-100" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-stone-600 group-hover:border-sekiro-red transition-colors opacity-0 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stone-600 group-hover:border-sekiro-red transition-colors opacity-0 group-hover:opacity-100" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-600 group-hover:border-sekiro-red transition-colors opacity-0 group-hover:opacity-100" />
    </div>
  );
});

SkillItem.displayName = 'SkillItem';

const SkillTree: React.FC = () => {
    // Memoize skills rendering to avoid unnecessary re-renders
    const skillsMarkup = useMemo(() => 
        SKILLS.map((skill) => <SkillItem key={skill.id} skill={skill} />),
        []
    );

    return (
        <div className="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden">
            <SectionHeader title="Skills" kanji="技" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 relative z-10 justify-center">
                {skillsMarkup}
            </div>
        </div>
    );
};

export default SkillTree;
