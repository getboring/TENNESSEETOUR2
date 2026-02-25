import React from 'react';
import { PenTool, CheckSquare, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Signature = () => (
    <div className="relative w-48 h-16 mx-auto mt-4">
        <svg viewBox="0 0 200 60" className="w-full h-full">
            <motion.path
                d="M20,40 C40,35 60,45 80,38 C100,31 120,25 140,30 C160,35 180,45 190,42 M50,20 C60,25 70,35 80,45 M130,20 C140,25 150,35 160,45"
                fill="transparent"
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-px bg-frontier-slate/20"></div>
        <div className="text-[8px] uppercase tracking-widest text-frontier-slate/40 mt-1">Authorized Signature</div>
    </div>
);

export const AskSection: React.FC = () => {
  return (
    <section id="ask" className="py-24 bg-frontier-limestone border-t border-frontier-slate/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-frontier-red font-bold tracking-widest uppercase text-sm"
                >The Resolution</motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2"
                >Executive Action Required</motion.h2>
            </div>

            {/* Resolution Document styling */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 md:p-12 shadow-2xl border border-frontier-slate/10 rounded-sm relative overflow-hidden"
            >
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-frontier-slate via-frontier-red to-frontier-slate"></div>

                <h3 className="font-serif text-2xl font-bold text-center mb-8 uppercase tracking-widest text-frontier-slate">
                    Next Immediate Steps
                </h3>

                <div className="space-y-8">
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex gap-6 group hover:bg-frontier-limestone/30 p-4 rounded-sm transition-colors"
                    >
                        <div className="shrink-0 pt-1">
                             <div className="w-10 h-10 rounded-sm bg-frontier-slate text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-frontier-red transition-colors">
                                1
                             </div>
                        </div>
                        <div>
                             <h4 className="font-serif text-xl font-bold text-frontier-slate mb-1">Sullivan County Commission</h4>
                             <p className="text-frontier-slate/70 mb-2 font-medium text-sm uppercase tracking-wide text-frontier-red">Action: Approve Initial Capital Allocation</p>
                             <p className="text-sm text-frontier-slate/60 leading-relaxed">
                                Vote to allocate funding for Phase 1 (Entitlements, Engineering, & Site Prep). This triggers the matching grant applications for the TN250 fund.
                             </p>
                        </div>
                    </motion.div>

                    <div className="w-full h-px bg-frontier-slate/10"></div>

                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex gap-6 group hover:bg-frontier-limestone/30 p-4 rounded-sm transition-colors"
                    >
                        <div className="shrink-0 pt-1">
                             <div className="w-10 h-10 rounded-sm bg-white border-2 border-frontier-slate text-frontier-slate flex items-center justify-center font-bold text-lg group-hover:border-frontier-red group-hover:text-frontier-red transition-colors">
                                2
                             </div>
                        </div>
                        <div>
                             <h4 className="font-serif text-xl font-bold text-frontier-slate mb-1">City of Johnson City</h4>
                             <p className="text-frontier-slate/70 mb-2 font-medium text-sm uppercase tracking-wide text-frontier-slate/50">Action: File Road Vacation Ordinance</p>
                             <p className="text-sm text-frontier-slate/60 leading-relaxed">
                                Initiate the legal process to vacate the Hyder Hill Road right-of-way, transferring the land to the project for the "Time Bridge" construction.
                             </p>
                        </div>
                    </motion.div>

                     <div className="w-full h-px bg-frontier-slate/10"></div>

                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="flex gap-6 group hover:bg-frontier-limestone/30 p-4 rounded-sm transition-colors"
                    >
                        <div className="shrink-0 pt-1">
                             <div className="w-10 h-10 rounded-sm bg-white border-2 border-frontier-slate text-frontier-slate flex items-center justify-center font-bold text-lg group-hover:border-frontier-red group-hover:text-frontier-red transition-colors">
                                3
                             </div>
                        </div>
                        <div>
                             <h4 className="font-serif text-xl font-bold text-frontier-slate mb-1">RMHA Board of Directors</h4>
                             <p className="text-frontier-slate/70 mb-2 font-medium text-sm uppercase tracking-wide text-frontier-slate/50">Action: Execute Ground Lease</p>
                             <p className="text-sm text-frontier-slate/60 leading-relaxed">
                                Sign the 50-year Ground Lease and Management Agreement, formally granting Sullivan County the right to build and own improvements on the site.
                             </p>
                        </div>
                    </motion.div>

                </div>

                <div className="mt-12 pt-8 border-t-2 border-dashed border-frontier-slate/20 text-center">
                    <p className="text-frontier-slate/40 text-[10px] mb-4 uppercase tracking-[0.2em] font-bold">Document Ready for Review</p>
                    
                    <Signature />

                    <motion.button 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-8 px-10 py-4 bg-frontier-red text-white font-bold rounded-sm shadow-xl hover:bg-red-900 transition-all flex items-center gap-3 mx-auto group"
                    >
                        <PenTool className="w-5 h-5" />
                        Download Executive Brief (PDF)
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </motion.div>

            <div className="mt-20 flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                <motion.div 
                  initial={{ rotate: -10, scale: 0.8 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 rounded-full bg-frontier-red border-2 border-white flex items-center justify-center relative shadow-lg mb-6 ring-2 ring-frontier-slate/20"
                >
                    <div className="text-white text-2xl font-serif font-bold">TN</div>
                </motion.div>
                 <motion.h3 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="font-serif text-3xl md:text-4xl font-bold mb-4 text-frontier-slate text-center"
                 >
                    This is where Tennessee began.
                 </motion.h3>
                 <motion.p 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 }}
                   className="text-frontier-gold italic font-serif text-xl"
                 >Let's build the gateway it deserves.</motion.p>
                 <div className="mt-8 h-px w-24 bg-frontier-slate/20"></div>
                 <p className="text-frontier-slate/30 text-[10px] uppercase tracking-widest mt-4">Tennessee Frontier Gateway • Project 2026</p>
            </div>

        </div>
      </div>
    </section>
  );
};