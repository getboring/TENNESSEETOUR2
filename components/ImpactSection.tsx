import React, { useState } from 'react';
import { TrendingUp, Calculator, Car, Users, DollarSign, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip as RechartsTooltip } from 'recharts';

const FinancialCalculator = () => {
    // Default Assumptions
    const [dailyTraffic, setDailyTraffic] = useState(45000); 
    const [captureRate, setCaptureRate] = useState(0.15); 
    const [avgSpend, setAvgSpend] = useState(16); 
    const [events, setEvents] = useState(24); 
    const [eventRate, setEventRate] = useState(2500); 

    // Math Logic
    const annualTraffic = dailyTraffic * 365;
    const annualVisitors = Math.floor(annualTraffic * (captureRate / 100));
    const gateRevenue = annualVisitors * avgSpend;
    const rentalRevenue = events * eventRate;
    const totalRevenue = gateRevenue + rentalRevenue;
    
    // Operating Expense Baseline 
    const operatingOpEx = 320000; 
    const netOperatingIncome = totalRevenue - operatingOpEx;

    const chartData = [
      { name: 'Revenue', value: totalRevenue, color: '#C5A059' },
      { name: 'Expense', value: operatingOpEx, color: '#7B241C' },
    ];

    return (
        <div className="bg-white rounded-sm border border-frontier-slate/20 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-frontier-slate text-white p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Calculator className="w-6 h-6 text-frontier-gold" />
                    <div>
                        <h3 className="font-serif text-xl font-bold">Interactive Pro Forma</h3>
                        <p className="text-xs text-white/60 uppercase tracking-widest">Verify the Business Case</p>
                    </div>
                </div>
                <div className="text-right">
                     <span className="text-[10px] text-white/50 uppercase tracking-widest block">Est. Net Income</span>
                     <motion.span 
                        key={netOperatingIncome}
                        initial={{ scale: 1.1, color: '#fff' }}
                        animate={{ scale: 1, color: netOperatingIncome > 0 ? '#4ade80' : '#f87171' }}
                        className="font-mono text-2xl font-bold"
                     >
                        {netOperatingIncome > 0 ? '+' : ''}${netOperatingIncome.toLocaleString()}
                     </motion.span>
                </div>
            </div>

            <div className="grid lg:grid-cols-2">
                
                {/* LEFT: The Inputs */}
                <div className="p-8 bg-frontier-limestone border-r border-frontier-slate/10 space-y-8">
                    <h4 className="font-bold text-frontier-slate text-sm uppercase tracking-wider mb-6 border-b border-frontier-slate/10 pb-2">1. Operating Assumptions</h4>
                    
                    {/* Input Group 1: Traffic */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-frontier-slate flex items-center gap-2">
                                <Car className="w-4 h-4 text-frontier-slate/60" /> Daily Traffic (AADT)
                            </label>
                            <span className="font-mono text-sm font-bold text-frontier-red bg-white px-2 py-1 rounded-sm shadow-sm">{dailyTraffic.toLocaleString()}</span>
                        </div>
                        <input 
                            type="range" min="20000" max="60000" step="1000" 
                            value={dailyTraffic} onChange={(e) => setDailyTraffic(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-frontier-slate"
                        />
                        <p className="text-[10px] text-frontier-slate/50 mt-1">Source: TDOT Region 1 Count Station</p>
                    </div>

                    {/* Input Group 2: Capture */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-frontier-slate flex items-center gap-2">
                                <Users className="w-4 h-4 text-frontier-slate/60" /> Capture Rate (%)
                            </label>
                            <span className="font-mono text-sm font-bold text-frontier-red bg-white px-2 py-1 rounded-sm shadow-sm">{captureRate}%</span>
                        </div>
                        <input 
                            type="range" min="0.05" max="0.5" step="0.01" 
                            value={captureRate} onChange={(e) => setCaptureRate(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-frontier-slate"
                        />
                        <p className="text-[10px] text-frontier-slate/50 mt-1">Target: Stop 1.5 cars per 1,000 passing by.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-frontier-slate mb-1 block">Avg Spend ($)</label>
                            <input 
                                type="number" value={avgSpend} onChange={(e) => setAvgSpend(parseInt(e.target.value))}
                                className="w-full p-2 border border-frontier-slate/20 rounded-sm font-mono text-sm"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-frontier-slate mb-1 block">Annual Events</label>
                            <input 
                                type="number" value={events} onChange={(e) => setEvents(parseInt(e.target.value))}
                                className="w-full p-2 border border-frontier-slate/20 rounded-sm font-mono text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT: The Math Proof */}
                <div className="p-8 bg-white flex flex-col justify-between">
                    <div>
                        <h4 className="font-bold text-frontier-slate text-sm uppercase tracking-wider mb-6 border-b border-frontier-slate/10 pb-2">2. The Math (Proof)</h4>
                        
                        <div className="space-y-4 font-mono text-xs md:text-sm">
                            <div className="flex items-center gap-2 text-frontier-slate/60">
                                <span>{dailyTraffic.toLocaleString()} cars</span>
                                <span>×</span>
                                <span>365 days</span>
                                <span>=</span>
                                <span>{annualTraffic.toLocaleString()} annual pass-by</span>
                            </div>

                            <div className="flex items-center gap-2 font-bold text-frontier-slate">
                                <ArrowRight className="w-3 h-3" />
                                <span>{annualTraffic.toLocaleString()}</span>
                                <span>×</span>
                                <span>{captureRate}%</span>
                                <span>=</span>
                                <motion.span 
                                  key={annualVisitors}
                                  initial={{ backgroundColor: '#fef3c7' }}
                                  animate={{ backgroundColor: 'transparent' }}
                                  className="px-1"
                                >{annualVisitors.toLocaleString()} Visitors</motion.span>
                            </div>

                            <div className="pt-4 border-t border-dashed border-slate-200"></div>
                            
                            <div className="flex justify-between items-center">
                                <span className="text-frontier-slate/70">Gate Revenue</span>
                                <span className="font-bold">${gateRevenue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-frontier-slate/70">Event Revenue</span>
                                <span className="font-bold">${rentalRevenue.toLocaleString()}</span>
                            </div>

                            <div className="pt-2 border-t border-slate-900">
                                <div className="flex justify-between items-center text-base">
                                    <span className="font-bold text-frontier-slate">Total Gross Revenue</span>
                                    <motion.span 
                                      key={totalRevenue}
                                      initial={{ y: -5, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      className="font-bold text-frontier-slate"
                                    >${totalRevenue.toLocaleString()}</motion.span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 h-32 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} layout="vertical">
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" hide />
                                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                                <RechartsTooltip 
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ backgroundColor: '#2C3E50', border: 'none', borderRadius: '4px', color: '#fff' }}
                                    itemStyle={{ color: '#fff' }}
                                    formatter={(value: number) => `$${value.toLocaleString()}`}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
};


export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-frontier-limestone text-frontier-slate">
      <div className="container mx-auto px-6">
        
        <div className="mb-12 border-l-4 border-frontier-red pl-6 max-w-4xl">
            <span className="text-frontier-red font-bold tracking-widest uppercase text-xs">Module 2</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">
                The Financial Logic
            </h2>
            <p className="text-xl text-frontier-slate/60 mt-2 font-serif italic">
                "We don't need to create traffic. We just need to stop 0.15% of it."
            </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
                 <FinancialCalculator />
                 <p className="text-xs text-center mt-4 text-frontier-slate/40 italic">
                    *Calculator provided to allow Commission to stress-test revenue assumptions.
                 </p>
            </div>

            <div className="lg:col-span-4 space-y-6">
                <div className="bg-frontier-slate text-white p-6 rounded-sm shadow-lg h-full relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-frontier-gold/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                     <div className="relative z-10">
                         <div className="flex items-center gap-2 mb-4">
                             <TrendingUp className="w-5 h-5 text-frontier-gold" />
                             <h3 className="font-serif text-xl font-bold">The Multiplier</h3>
                         </div>
                         <p className="text-sm text-white/70 mb-8 leading-relaxed">
                             Local funding unlocks state matching grants. This is why the $3.5M allocation is critical—it is the "seed capital" for the larger stack.
                         </p>
                         
                         <div className="space-y-4">
                             <div>
                                 <span className="text-xs uppercase tracking-widest text-white/50">Local Investment</span>
                                 <div className="text-2xl font-mono font-bold text-white">$3,500,000</div>
                             </div>
                             <div className="flex justify-center">
                                 <ArrowRight className="w-5 h-5 text-white/30 rotate-90 my-1" />
                             </div>
                             <div>
                                 <span className="text-xs uppercase tracking-widest text-frontier-gold">Total Project Value</span>
                                 <div className="text-3xl font-mono font-bold text-frontier-gold">$12,000,000</div>
                                 <span className="text-[10px] text-white/50">Via TN250 & TDOT Grants</span>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};