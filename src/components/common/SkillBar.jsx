import React from 'react';

const SkillBar = ({ skill, index, categoryIndex }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {skill.icon}
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.level}%`,
            animationDelay: `${categoryIndex * 200 + index * 100}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
