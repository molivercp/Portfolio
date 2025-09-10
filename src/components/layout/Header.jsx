import React from 'react';
import { useScrollEffect } from '../../hooks/useScrollEffect';
import { personalInfo } from '../../data/personal';

const Header = () => {
  const scrolled = useScrollEffect(50);

  const navItems = ['Sobre', 'Projetos', 'Skills', 'Contato'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold gradient-text">
            {personalInfo.name}
          </a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
