
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Selected <span className="text-purple-500">Works</span></h2>
          <p className="text-slate-400 max-w-xl">A collection of systems I've designed and deployed, ranging from AI platforms to high-performance web applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {project.tags.slice(2).map(tag => (
                      <span key={tag} className="text-[10px] text-slate-500 font-medium">#{tag}</span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    View Project 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="px-8 py-3 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                Explore All Projects on GitHub
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
