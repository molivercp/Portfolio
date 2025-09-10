import React from 'react';
import { skillCategories } from '../../data/skills.jsx';
import SkillBar from '../common/SkillBar';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Habilidades Técnicas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="glass-card p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
