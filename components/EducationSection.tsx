import React from 'react';
import { GraduationCap, Bus, BookOpen, Microscope, Calendar, Users, Sprout, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const BusLoopDiagram = () => (
    <div className="w-full bg-[#1e293b] border border-frontier-slate/20 rounded-sm p-6 relative overflow-hidden group shadow-xl">
        {/* Blueprint Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md text-white/80 text-[10px] font-bold px-2 py-1 rounded-sm border border-white/20">
            FIG 3.0: SITE LOGISTICS
        </div>
        
        <svg viewBox="0 0 200 100" className="w-full h-32 md:h-48 relative z-10">
            <defs>
                <marker id="arrow-yellow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="#fbbf24" />
                </marker>
            </defs>

            {/* Legend/Key */}
            <rect x="5" y="5" width="40" height="25" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <circle cx="10" cy="12" r="2" fill="#fbbf24" /> <text x="15" y="14" fill="white" fontSize="4">BUS FLOW</text>
            <rect x="8" y="20" width="4" height="4" fill="#3b82f6" opacity="0.5" /> <text x="15" y="24" fill="white" fontSize="4">STUDENT ZONE</text>

            {/* Parking Lot Area */}
            <rect x="10" y="35" width="180" height="60" rx="2" fill="#334155" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2,2" />
            <text x="100" y="90" fontSize="4" fill="#94a3b8" textAnchor="middle">EXISTING PARKING</text>
            
            {/* The Loop Path */}
            <path d="M 160 35 L 160 20 L 40 20 L 40 35" fill="none" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" opacity="0.2" />
            <motion.path 
                d="M 160 35 L 160 20 L 40 20 L 40 35" 
                fill="none" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="3,1" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Drop Off Zone */}
            <rect x="60" y="14" width="80" height="12" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="0.5" rx="1" />
            <text x="100" y="22" fontSize="5" textAnchor="middle" fill="#60a5fa" fontWeight="bold">DEDICATED DROP-OFF LANE</text>

            {/* The Building Entry */}
            <rect x="70" y="2" width="60" height="10" fill="#cbd5e1" rx="1" />
            <text x="100" y="9" fontSize="4" textAnchor="middle" fill="#1e293b" fontWeight="bold">DISCOVERY CENTER ENTRY</text>
            
            {/* Bus Icons */}
            <motion.g 
              initial={{ x: 150, y: 20 }}
              animate={{ x: [150, 40, 40, 150], y: [20, 20, 20, 20] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <rect x="-6" y="-3" width="12" height="6" fill="#fbbf24" rx="1" />
                <path d="M 6 0 L 8 0" stroke="#fbbf24" strokeWidth="0.5" />
            </motion.g>
        </svg>
    </div>
);

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white border-t border-frontier-slate/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-frontier-red font-bold tracking-widest uppercase text-sm"
            >Educational Impact</motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2 mb-6"
            >
                Building the Classroom of <br/>
                <span className="text-frontier-slate/60">Tennessee's Founding</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-frontier-slate/80 leading-relaxed max-w-3xl mx-auto"
            >
                This isn't just a tourist attraction. It is a permanent educational asset designed to serve Sullivan County students every school day, filling the critical "shoulder season" from September through May.
            </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
            
            {/* Column 1: Infrastructure (The Hardware) */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-frontier-slate/10 rounded-sm">
                        <Bus className="w-6 h-6 text-frontier-slate" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-frontier-slate">Bus-Ready Infrastructure</h3>
                </div>
                <p className="text-frontier-slate/70 leading-relaxed">
                    Historic sites often fail for schools because they lack basic logistics. We designed the Discovery Center specifically for the 70-passenger bus.
                </p>
                
                <BusLoopDiagram />
                
                <ul className="space-y-4 mt-6">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex gap-4 p-4 bg-frontier-limestone rounded-sm border-l-4 border-frontier-slate"
                    >
                        <div className="shrink-0 font-bold text-xl text-frontier-slate/30">01</div>
                        <div>
                            <h4 className="font-bold text-frontier-slate text-sm uppercase tracking-wider mb-1">Capacity</h4>
                            <p className="text-sm text-frontier-slate/70">Event Hall serves as a classroom seating 100+ students, allowing entire grade levels to visit simultaneously.</p>
                        </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-4 p-4 bg-frontier-limestone rounded-sm border-l-4 border-frontier-slate"
                    >
                        <div className="shrink-0 font-bold text-xl text-frontier-slate/30">02</div>
                        <div>
                            <h4 className="font-bold text-frontier-slate text-sm uppercase tracking-wider mb-1">Sanitation & Safety</h4>
                            <p className="text-sm text-frontier-slate/70">Bus-ready restrooms (6+ stalls per side) and ADA compliance ensure rapid turnaround. A warming kitchen allows for on-site lunch service.</p>
                        </div>
                    </motion.li>
                </ul>
            </div>

            {/* Column 2: Curriculum (The Software) */}
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-frontier-red/10 rounded-sm">
                        <BookOpen className="w-6 h-6 text-frontier-red" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-frontier-slate">State Standards Alignment</h3>
                </div>
                <p className="text-frontier-slate/70 leading-relaxed">
                    The content is built to directly support Tennessee Social Studies Standards, offering teachers a tangible lab for the concepts they teach in the classroom.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-white border border-frontier-slate/10 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h4 className="font-serif font-bold text-lg text-frontier-slate mb-3 border-b border-frontier-slate/10 pb-2">Social Studies</h4>
                        <ul className="text-sm text-frontier-slate/70 space-y-2">
                            <li className="flex items-start gap-2">• Territorial Governance & Statehood</li>
                            <li className="flex items-start gap-2">• The U.S. Constitution & Federalism</li>
                            <li className="flex items-start gap-2">• Westward Expansion</li>
                            <li className="flex items-start gap-2">• Cherokee & Native American History</li>
                        </ul>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="bg-white border border-frontier-slate/10 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                    >
                         <div className="flex items-center gap-2 mb-3 border-b border-frontier-slate/10 pb-2">
                            <Microscope className="w-4 h-4 text-frontier-red" />
                            <h4 className="font-serif font-bold text-lg text-frontier-slate">STEM Connections</h4>
                         </div>
                        <ul className="text-sm text-frontier-slate/70 space-y-2">
                            <li className="flex items-start gap-2">• <strong>Dendrochronology:</strong> Tree-ring dating used to verify the site's 1770s structures.</li>
                            <li className="flex items-start gap-2">• <strong>Material Science:</strong> Limestone & timber analysis.</li>
                            <li className="flex items-start gap-2">• <strong>GIS/Cartography:</strong> Mapping the 1790 frontier.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>

        {/* Business Case / Revenue Model */}
        <div className="bg-frontier-slate text-white rounded-sm p-8 md:p-12 mb-16 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

             <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-6 h-6 text-frontier-gold" />
                        <h3 className="font-serif text-2xl font-bold">The "September through May" Model</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed mb-6">
                        Tourism is often seasonal (Summer/Fall). Schools provide steady, reliable weekday revenue during the traditional "off-season." 
                        Our catchment area includes Sullivan County Schools plus Washington, Hawkins, Carter, and Johnson counties.
                    </p>
                    <div className="bg-white/10 p-4 rounded-sm inline-block">
                        <span className="block text-xs uppercase tracking-widest text-frontier-gold mb-1">Total Regional K-12 Enrollment</span>
                        <span className="font-mono text-xl font-bold">~45,000 Students</span>
                    </div>
                </div>

                <div className="bg-frontier-limestone text-frontier-slate p-6 rounded-sm shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-frontier-slate/50 mb-4 border-b border-frontier-slate/10 pb-2">Revenue Potential</h4>
                    <div className="space-y-4 font-mono text-sm">
                        <div>
                            <p className="text-xs text-frontier-slate/60 mb-1">Projected Annual Volume</p>
                            <p className="font-bold">8,000 Students / Year</p>
                        </div>
                        <div>
                            <p className="text-xs text-frontier-slate/60 mb-1">Revenue Calculation</p>
                            <p className="font-bold">8,000 × $12.00</p>
                        </div>
                        <div className="pt-2 border-t border-frontier-slate/20 mt-2">
                            <p className="text-xs text-frontier-red font-bold mb-1 uppercase">Total Education Revenue</p>
                            <p className="text-2xl font-bold text-frontier-red">$96,000 / yr</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};