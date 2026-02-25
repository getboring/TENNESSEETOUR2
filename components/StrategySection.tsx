import React from 'react';
import { MapPin, Swords, Route, Gem, TrendingUp, Check, X } from 'lucide-react';
import { motion } from 'motion/react';

const ComparativeMatrix = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-sm overflow-hidden mt-8 backdrop-blur-sm relative z-10"
    >
        <div className="grid grid-cols-4 bg-white/10 p-4 font-bold text-xs uppercase tracking-widest text-white border-b border-white/10">
            <div className="col-span-1">Asset Class</div>
            <div className="col-span-1 text-center text-frontier-gold">Frontier Gateway</div>
            <div className="col-span-1 text-center opacity-50">Local Parks</div>
            <div className="col-span-1 text-center opacity-50">Theme Parks</div>
        </div>
        {[
            { label: "Origin Story", us: true, park: false, theme: false },
            { label: "Authentic Site", us: true, park: true, theme: false },
            { label: "11E Access", us: true, park: false, theme: false },
            { label: "State Funding", us: true, park: true, theme: false },
        ].map((row, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="grid grid-cols-4 p-4 border-b border-white/5 items-center hover:bg-white/10 transition-colors group"
            >
                <div className="col-span-1 font-serif text-white/90 font-medium group-hover:text-white transition-colors">{row.label}</div>
                <div className="col-span-1 flex justify-center">
                    <Check className="w-5 h-5 text-frontier-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
                </div>
                <div className="col-span-1 flex justify-center">
                    {row.park ? <Check className="w-4 h-4 text-white/40" /> : <X className="w-4 h-4 text-white/10" />}
                </div>
                <div className="col-span-1 flex justify-center">
                    {row.theme ? <Check className="w-4 h-4 text-white/40" /> : <X className="w-4 h-4 text-white/10" />}
                </div>
            </motion.div>
        ))}
    </motion.div>
);

export const StrategySection: React.FC = () => {
  return (
    <section id="strategy" className="py-24 bg-frontier-slate text-white border-t border-white/10 relative overflow-hidden">
      {/* Topographic Background Texture */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 2 }}
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-frontier-gold font-bold tracking-widest uppercase text-sm"
            >Destination Strategy</motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6"
            >
                The Unassailable Moat
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
                Marketing creates slogans. History creates assets. We are not inventing a brand; we are capitalizing on a geographic fact.
            </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Left: The Context/Competition */}
            <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <h3 className="flex items-center gap-3 font-serif text-2xl font-bold mb-4 text-white">
                        <Swords className="w-6 h-6 text-frontier-red" />
                        Differentiation is Survival
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-4">
                        Sullivan County is home to incredible assets: Bristol Motor Speedway, the Birthplace of Country Music, and Bays Mountain Park. Yet, we lack a dedicated <strong>heritage tourism anchor</strong>.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                        Neighboring Washington County owns the "Oldest Town" brand with Jonesborough. Sevier County built a <strong>$3.9 billion</strong> tourism economy by aggressively investing in infrastructure. We cannot simply replicate them. We must own our specific lane.
                    </p>
                </motion.div>
                 
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/5 p-8 rounded-sm border-l-4 border-frontier-gold backdrop-blur-sm"
                >
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Route className="w-4 h-4 text-frontier-gold" />
                        The Corridor Opportunity
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                        The US-11E/19E corridor currently acts as a conveyor belt, moving visitors between Bristol and Johnson City. Without a "Stop" button—a destination worthy of a 2-hour visit—Sullivan County remains a pass-through. The Discovery Center is that stop.
                    </p>
                </motion.div>
            </div>

            {/* Right: The Unique Asset */}
            <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <h3 className="flex items-center gap-3 font-serif text-2xl font-bold mb-4 text-white">
                        <Gem className="w-6 h-6 text-frontier-gold" />
                        The Exclusive Asset
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                        No other county in Tennessee holds both the <strong>First Capital of the Southwest Territory (1790)</strong> and the state's <strong>oldest documented farm (1775)</strong> on contiguous property. This "Origin Story" brand is legally and geographically tied to this soil.
                    </p>
                </motion.div>

                {/* The Visual Matrix */}
                <ComparativeMatrix />

            </div>
        </div>

        {/* Closer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto border-t border-white/10 pt-12"
        >
             <h3 className="font-serif text-3xl font-bold text-white mb-4">
                No other county can build this. 
             </h3>
             <p className="text-xl text-frontier-gold font-medium">
                Only Sullivan County has the story, the site, and the opportunity.
             </p>
        </motion.div>
      </div>
    </section>
  );
};
