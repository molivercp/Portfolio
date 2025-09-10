import React from 'react';
import SocialLinks from '../common/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-slate-400">
              &copy; 2025 Mateus Oliveira. Desenvolvido com React e Tailwind CSS.
            </p>
          </div>
          
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
