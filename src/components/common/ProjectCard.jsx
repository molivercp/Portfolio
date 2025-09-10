import React, { useState, useEffect } from 'react';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`group relative glass-card overflow-hidden hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 ${
          project.featured ? 'md:col-span-2' : ''
        }`}
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute top-4 left-4">
            {project.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                Destaque
              </span>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {/* Botão Demo - Abre Modal */}
            <button
              onClick={openModal}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Ver Prints</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>

            {/* Botão Site para projeto destaque, GitHub para outros */}
            {project.featured ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-2 border-2 border-slate-600 text-slate-300 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <span>Site</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </a>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-2 border-2 border-slate-600 text-slate-300 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <span>GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal com Carrossel */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 max-w-6xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
              <div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm mt-1">Galeria de Imagens</p>
              </div>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Carrossel */}
            <div className="relative">
              {project.images && project.images.length > 0 ? (
                <div className="relative">
                  {/* Container da imagem principal */}
                  <div className="flex items-center justify-center p-6 min-h-[400px] max-h-[70vh]">
                    <img
                      src={project.images[currentImageIndex]?.src}
                      alt={project.images[currentImageIndex]?.alt || `${project.title} - Print ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                  </div>

                  {/* Botões de navegação */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 z-10 backdrop-blur-sm"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 z-10 backdrop-blur-sm"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Contador */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center p-12">
                  <p className="text-slate-400">Nenhuma imagem disponível</p>
                </div>
              )}
            </div>

            {/* Footer com indicadores */}
            {project.images && project.images.length > 1 && (
              <div className="flex items-center justify-center p-6 border-t border-slate-700/50">
                <div className="flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-cyan-400 w-8 h-2' 
                          : 'bg-slate-600 hover:bg-slate-500 w-2 h-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
