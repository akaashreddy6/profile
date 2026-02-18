
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-blue-400 mb-6 animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
          Crafting <span className="gradient-text">Intelligence</span> <br className="hidden md:block" />
          for the Modern Web.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 rounded-xl glass text-white font-bold hover:bg-white/10 transition-all border border-slate-800">
            Let's Collaborate
          </a>
        </div>
        
        <div className="mt-20 flex justify-center gap-12 text-slate-500">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-300">8+</span>
            <span className="text-xs uppercase tracking-widest">Years Exp</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-300">50+</span>
            <span className="text-xs uppercase tracking-widest">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-300">10k+</span>
            <span className="text-xs uppercase tracking-widest">Commits</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
