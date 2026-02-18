
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center">Career <span className="text-pink-500">Journey</span></h2>
        
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57c.73.41 1.2 1.1 1.2 1.93 0 .83-.47 1.52-1.2 1.93V18a2 2 0 01-2 2H4a2 2 0 01-2-2v-3.57c-.73-.41-1.2-1.1-1.2-1.93 0-.83.47-1.52 1.2-1.93V8a2 2 0 012-2h2zM10 4a1 1 0 011-1h2a1 1 0 011 1v2H10V4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-100">{exp.role}</div>
                  <time className="font-medium text-xs text-blue-500 uppercase">{exp.period}</time>
                </div>
                <div className="text-blue-400 text-sm font-semibold mb-3">{exp.company}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
