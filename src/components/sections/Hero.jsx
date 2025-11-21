import React from 'react';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 px-6">
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          {personalInfo.name}
        </h1>
        
        <div className="text-xl md:text-2xl text-cyan-400 mb-6 font-medium">
          {personalInfo.title}
        </div>
        
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {personalInfo.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projetos"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Projetos
          </a>
          <a
            href={personalInfo.cv}
            download
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
          >
            Download CV
          </a>
          <a
            href="#contato"
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
