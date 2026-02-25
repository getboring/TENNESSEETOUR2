import React from 'react';
import { Hammer, Ruler, PiggyBank, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const budgetData = [
  { name: 'Construction', value: 2450000, color: '#2C3E50' },
  { name: 'Professional Fees', value: 525000, color: '#7B241C' },
  { name: 'Exhibits & Tech', value: 350000, color: '#C5A059' },
  { name: 'Contingency', value: 175000, color: '#5D4037' },
];

const BudgetRow = ({ category, amount, percent, detail, width, index }: { category: string, amount: string, percent: string, detail: string, width: string, index: number }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row md:items-center justify-between border-b border-frontier-slate/10 py-6 hover:bg-frontier-limestone/50 transition-colors px-4 rounded-sm group"
    >
        <div className="md:w-1/3 mb-2 md:mb-0">
            <h4 className="font-serif font-bold text-lg text-frontier-slate group-hover:text-frontier-red transition-colors">{category}</h4>
            <p className="text-xs text-frontier-slate/50 uppercase tracking-widest">{detail}</p>
        </div>
        <div className="md:w-1/3 mb-2 md:mb-0 pr-8">
            <div className="h-3 w-full bg-frontier-slate/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: width }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="h-full bg-frontier-slate group-hover:bg-frontier-gold transition-colors duration-500 ease-out"
                ></motion.div>
            </div>
            <p className="text-xs text-right mt-1 text-frontier-slate/60 font-mono">{percent} Allocation</p>
        </div>
        <div className="md:w-1/3 text-right">
             <span className="font-mono text-xl font-bold text-frontier-slate">{amount}</span>
        </div>
    </motion.div>
);

export const BudgetSection: React.FC = () => {
  return (
    <section id="budget" className="py-24 bg-white border-t border-frontier-slate/5 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-frontier-gold font-bold tracking-widest uppercase text-sm"
            >Financial Transparency</motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2 mb-6"
            >
                Use of Funds
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-frontier-slate/80 leading-relaxed max-w-2xl mx-auto"
            >
                A disciplined allocation of the $3.5M capital request, prioritizing hard assets and long-term durability. We are building for a 50-year lifecycle.
            </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Col: The Breakdown */}
            <div className="lg:col-span-8">
                <div className="bg-white border border-frontier-slate/10 rounded-sm shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-frontier-slate/10 bg-frontier-limestone flex justify-between items-center">
                        <h3 className="font-serif text-xl font-bold text-frontier-slate">Capital Budget Breakdown</h3>
                        <span className="bg-frontier-slate text-white text-xs font-bold px-3 py-1 rounded-sm">Total: $3,500,000</span>
                    </div>
                    <div>
                        <BudgetRow 
                            index={0}
                            category="Construction (Hard Costs)" 
                            amount="$2,450,000" 
                            percent="70%" 
                            width="70%"
                            detail="Site Work, Core, Shell, Systems"
                        />
                        <BudgetRow 
                            index={1}
                            category="Professional Fees (Soft Costs)" 
                            amount="$525,000" 
                            percent="15%" 
                            width="15%"
                            detail="Architecture, Engineering, Legal, Permitting"
                        />
                        <BudgetRow 
                            index={2}
                            category="Exhibits & Technology" 
                            amount="$350,000" 
                            percent="10%" 
                            width="10%"
                            detail="Interactive Kiosks, Maps, Fabrication"
                        />
                        <BudgetRow 
                            index={3}
                            category="Contingency" 
                            amount="$175,000" 
                            percent="5%" 
                            width="5%"
                            detail="Risk Mitigation Reserve"
                        />
                    </div>
                </div>

                {/* Chart Integration */}
                <div className="mt-8 h-[300px] w-full bg-frontier-limestone/30 rounded-sm border border-frontier-slate/5 p-6 flex flex-col items-center justify-center">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-frontier-slate/40 mb-4">Visual Allocation Map</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={budgetData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {budgetData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#2C3E50', border: 'none', borderRadius: '4px', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                                formatter={(value: number) => `$${value.toLocaleString()}`}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Right Col: Funding Strategy */}
            <div className="lg:col-span-4 space-y-8">
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-frontier-slate text-white p-8 rounded-sm shadow-xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <PiggyBank className="w-6 h-6 text-frontier-gold" />
                        <h3 className="font-serif text-xl font-bold">Funding Tranches</h3>
                    </div>
                    <p className="text-white/70 text-sm mb-6">
                        Funds are released in phases based on milestone completion, protecting the County from front-loaded risk.
                    </p>
                    
                    <ul className="space-y-4">
                        <li className="relative pl-6 border-l border-white/20">
                            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-frontier-gold rounded-full"></div>
                            <span className="block text-xs uppercase tracking-widest text-frontier-gold mb-1">Tranche 1 (Months 1-6)</span>
                            <span className="block font-bold text-lg">$900,000</span>
                            <span className="text-xs text-white/50">Engineering, Site Prep, Road Vacation</span>
                        </li>
                        <li className="relative pl-6 border-l border-white/20">
                            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-white/30 rounded-full"></div>
                            <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Tranche 2 (Months 7-18)</span>
                            <span className="block font-bold text-lg text-white/80">$2,000,000</span>
                            <span className="text-xs text-white/50">Vertical Construction, Systems</span>
                        </li>
                         <li className="relative pl-6 border-l border-white/20">
                            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-white/30 rounded-full"></div>
                            <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Tranche 3 (Months 19-24)</span>
                            <span className="block font-bold text-lg text-white/80">$600,000</span>
                            <span className="text-xs text-white/50">Finishes, Tech, Closeout</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-frontier-limestone p-6 rounded-sm border-t-4 border-frontier-red shadow-sm"
                >
                    <h4 className="font-bold text-frontier-slate mb-2 text-sm uppercase tracking-wider">Value Engineering</h4>
                    <p className="text-frontier-slate/70 text-sm leading-relaxed">
                        We are utilizing a <strong>Pre-Engineered Metal Building (PEMB)</strong> structural frame clad in premium local materials (stone/timber). This hybrid approach saves ~20% vs. traditional steel framing without sacrificing aesthetics.
                    </p>
                </motion.div>

            </div>
        </div>
      </div>
    </section>
  );
};
