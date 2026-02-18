
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <img 
                src="https://picsum.photos/seed/profile/600/600" 
                alt="Profile" 
                className="relative rounded-3xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 glass p-4 rounded-2xl animate-in zoom-in slide-in-from-right-10 duration-1000">
                <div className="text-2xl font-bold">8+ Years</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Crafting Code</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Philosophy of <span className="text-blue-500">Excellence.</span></h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  I believe that software is more than just code—it's an interface between human intuition and machine capability. My approach centers on building systems that are not only performant but also empathetic to the user's needs.
                </p>
                <p>
                  With the rise of Generative AI, I focus on integrating large language models into standard web workflows to create truly "living" applications that learn and adapt in real-time.
                </p>
                <p>
                  When I'm not architecting cloud systems or fine-tuning front-end interactions, I'm likely exploring open-source contributions or mentoring the next generation of engineers.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-medium">Clean Architecture</div>
                <div className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-medium">Performance Optimized</div>
                <div className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-medium">AI First</div>
                <div className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-medium">UX Centric</div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">AT</div>
            <span className="text-sm font-medium text-slate-500">© 2024 Alex Thorne. All rights reserved.</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:alex.thorne@example.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Persistent AI Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
