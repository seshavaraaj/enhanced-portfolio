import React from 'react';
import SectionHeader from './SectionHeader';
import EducationItem from './EducationItem';

interface EducationData {
  degree: string;
  period: string;
  school: string;
}

const EDUCATION_DATA: EducationData[] = [
  {
    degree: 'B.Sc. Game Programming',
    period: '2023 - 2026',
    school: 'ICAT Design and Media College',
  },
  {
    degree: 'Grade 11 - 12 (Computer Science)',
    period: '2022 - 2023',
    school: 'The Hindu Senior Secondary School',
  },
  {
    degree: 'Grade 1 - 10',
    period: '2011 - 2021',
    school: 'The Hindu Senior Secondary School',
  },
];

const Education: React.FC = () => {
    return (
        <div className="py-24 px-6 bg-stone-950 border-t border-stone-800 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <SectionHeader title="Education" kanji="道" />

                <div className="max-w-2xl mx-auto">
                    <div className="space-y-8">
                        {EDUCATION_DATA.map((item) => (
                            <EducationItem key={item.degree} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
