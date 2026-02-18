
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  
  const getCategoryData = (cat: string) => SKILLS.filter(s => s.category === cat);

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-blue-500">Mastery</span></h2>
            <p className="text-slate-400">My expertise spans across the entire modern web stack, with a deep focus on scalable frontend architectures and generative AI integration.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Radar Visualization */}
          <div className="glass p-8 rounded-3xl h-[450px]">
            <h3 className="text-xl font-semibold mb-6 text-slate-300">Competency Map</h3>
            <ResponsiveContainer width="100%" height="90%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar
                  name="Proficiency"
                  dataKey="level"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Categorized Bar Charts */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((cat, idx) => (
                <div key={cat} className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">{cat}</h4>
                  <div className="space-y-4">
                    {getCategoryData(cat).map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span>{skill.name}</span>
                          <span className="text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                          <div 
                            className="bg-blue-600 h-full transition-all duration-1000" 
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
