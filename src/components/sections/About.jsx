import React from 'react';
import { aboutMe } from '../../data/personal';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Desenvolvedor Full Stack em Formação
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                {aboutMe.description}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {aboutMe.additionalInfo}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Formação</h4>
              <div className="space-y-3">
                {aboutMe.education.map((edu, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">{edu.degree} ({edu.year})</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Localização</h4>
              <p className="text-slate-300">📍 Fortaleza, Ceará - Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
