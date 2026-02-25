import React from 'react';
import { Calendar, CheckCircle2, FileCheck, Shovel, Hammer, Key } from 'lucide-react';
import { motion } from 'motion/react';

const PhaseItem = ({ icon: Icon, title, date, items, isLast = false, index }: { icon: React.ElementType, title: string, date: string, items: string[], isLast?: boolean, index: number }) => {
    return (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-12 md:pl-16 pb-12 md:pb-16"
        >
            {/* Connector Line */}
            {!isLast && (
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="absolute left-[19px] md:left-[27px] top-12 bottom-0 w-0.5 bg-frontier-slate/10"
                ></motion.div>
            )}
            
            {/* Icon Bubble */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-frontier-limestone border-2 border-frontier-slate flex items-center justify-center z-10 shadow-sm transition-colors hover:bg-frontier-slate hover:text-white"
            >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>

            {/* Content */}
            <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <h3 className="font-serif text-2xl font-bold text-frontier-slate">{title}</h3>
                    <span className="inline-block self-start md:self-auto px-3 py-1 bg-frontier-red/10 text-frontier-red text-xs font-bold uppercase tracking-wider rounded-full">
                        {date}
                    </span>
                </div>
                
                <div className="bg-frontier-limestone border border-frontier-slate/5 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                    <ul className="grid md:grid-cols-2 gap-y-3 gap-x-6">
                        {items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-frontier-slate/80">
                                <CheckCircle2 className="w-4 h-4 text-frontier-gold shrink-0 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16">
            {/* Header Column */}
            <div className="lg:col-span-4">
                <div className="sticky top-32">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-frontier-red font-bold tracking-widest uppercase text-sm"
                    >Execution Strategy</motion.span>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="font-serif text-4xl font-bold text-frontier-slate mt-2 mb-6"
                    >24 Months to Ribbon Cutting</motion.h2>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-frontier-slate/70 leading-relaxed mb-8"
                    >
                        This is a "shovel-ready" strategy. We have front-loaded the timeline with heavy entitlements and site prep (Months 1-8) to ensure that once vertical construction begins, it proceeds without interruption.
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="bg-frontier-slate text-white p-6 rounded-sm shadow-xl"
                    >
                        <h4 className="flex items-center gap-2 font-bold mb-3">
                            <Calendar className="w-5 h-5 text-frontier-gold" />
                            Key Milestones
                        </h4>
                        <div className="space-y-4 text-sm opacity-90">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Ground Lease Executed</span>
                                <span className="font-mono text-frontier-gold">Month 1</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Road Vacation Complete</span>
                                <span className="font-mono text-frontier-gold">Month 6</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Dried-In (Roof On)</span>
                                <span className="font-mono text-frontier-gold">Month 14</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Grand Opening</span>
                                <span className="font-mono text-frontier-gold">Month 24</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Timeline Column */}
            <div className="lg:col-span-8">
                <PhaseItem 
                    index={0}
                    icon={FileCheck}
                    title="Phase 1: Entitlements"
                    date="Months 1–8"
                    items={[
                        "MOU Execution (County/City/RMHA)",
                        "Hyder Hill Road Vacation Filed",
                        "THC Checkpoint 1: Site Plan Approval",
                        "Environmental Abatement",
                        "Initial Civil Engineering"
                    ]}
                />
                <PhaseItem 
                    index={1}
                    icon={Shovel}
                    title="Phase 2: Site & Shell"
                    date="Months 9–16"
                    items={[
                        "Roadway Demolition & Grading",
                        "Utilities Extension (Water/Sewer)",
                        "Foundation Pour",
                        "Steel Erection (PEMB)",
                        "Roofing & Exterior Stone"
                    ]}
                />
                <PhaseItem 
                    index={2}
                    icon={Hammer}
                    title="Phase 3: Interiors"
                    date="Months 17–22"
                    items={[
                        "Interior Framing & MEP Rough-In",
                        "Drywall & Finishes",
                        "Flooring Installation",
                        "Exhibit Fabrication (Off-site)",
                        "Exterior Landscaping"
                    ]}
                />
                <PhaseItem 
                    index={3}
                    icon={Key}
                    title="Phase 4: Launch"
                    date="Months 23–24"
                    items={[
                        "Exhibit Installation",
                        "Technology Integration",
                        "Staff Hiring & Training",
                        "Soft Launch (Donor Events)",
                        "Public Grand Opening"
                    ]}
                    isLast={true}
                />
            </div>
        </div>
      </div>
    </section>
  );
};
