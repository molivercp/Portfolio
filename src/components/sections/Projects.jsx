import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../common/ProjectCard';

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
