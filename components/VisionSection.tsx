import React from 'react';
import { Compass, Footprints, History, Mountain, ArrowDown, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const JourneyStop = ({ 
    icon: Icon, 
    title, 
    subtitle, 
    description, 
    isLast = false,
    step
}: { 
    icon: React.ElementType, 
    title: string, 
    subtitle: string, 
    description: string, 
    isLast?: boolean,
    step: string
}) => {
    return (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative pl-12 md:pl-24 py-8 group"
        >
            {/* Timeline Line */}
            {!isLast && (
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute left-[24px] md:left-[48px] top-16 bottom-0 w-px bg-frontier-slate/20 group-hover:bg-frontier-gold/50 transition-colors duration-500"
                ></motion.div>
            )}
            
            {/* Marker */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="absolute left-[12px] md:left-[36px] top-8 w-6 h-6 -ml-3 rounded-full bg-frontier-limestone border-2 border-frontier-slate z-10 flex items-center justify-center group-hover:border-frontier-gold group-hover:scale-110 transition-all"
            >
                <div className="w-2 h-2 bg-frontier-slate rounded-full group-hover:bg-frontier-gold transition-colors"></div>
            </motion.div>

            {/* Step Number Background */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.05, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute -left-4 top-4 text-[120px] font-serif font-bold text-frontier-slate/5 select-none pointer-events-none z-0 hidden md:block"
            >
                {step}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-frontier-red mb-1 block">{subtitle}</span>
                    <h3 className="font-serif text-3xl font-bold text-frontier-slate group-hover:text-frontier-walnut transition-colors">{title}</h3>
                </div>
                <div className="md:col-span-8">
                     <p className="text-frontier-slate/70 text-lg leading-relaxed border-l-2 border-frontier-slate/10 pl-6">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2C3E50 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
             <span className="text-frontier-red font-bold tracking-widest uppercase text-sm">The Visitor Experience</span>
             <h2 className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2 mb-6">250 Years in One Walk</h2>
             <p className="text-frontier-slate/60 text-lg leading-relaxed">
                 This district is designed as a walkable timeline, not a collection of separate stops. By vacating Hyder Hill Road and converting the former roadbed into <span className="text-frontier-slate font-semibold italic">The Time Bridge</span>, visitors move through the story without interruption.
             </p>
        </div>

        <div className="max-w-5xl mx-auto">
            <JourneyStop 
                step="01"
                icon={Compass}
                subtitle="The Arrival"
                title="The Gateway"
                description="Visitors turn off US-11E into a single, unified district. The Discovery Center provides orientation, restrooms, and context. For families, it feels easy and welcoming. For school groups, it feels organized and bus-ready."
            />
            
            <JourneyStop 
                step="02"
                icon={History}
                subtitle="1775 • The Settlement"
                title="Century Farm"
                description="The path begins at the Massengill-Bachman Red Barn—Tennessee’s oldest documented farm. Visitors stand on the soil that fed the earliest settlers. The first exhibit is the land itself."
            />

            <JourneyStop 
                step="03"
                icon={Footprints}
                subtitle="The Transition"
                title="The Time Bridge"
                description="Visitors cross the former Hyder Hill roadbed, now a landscaped pedestrian promenade. The bridge doesn't just link two places—it links two chapters. The walk shifts from 'how people lived' to 'how the region was governed.'"
            />

            <JourneyStop 
                step="04"
                icon={Mountain}
                subtitle="1790 • The Government"
                title="Rocky Mount"
                description="The bridge delivers visitors to the Cobb House, the first capital of the Southwest Territory. The arc is complete: from the farm that sustained early life to the capital that guided early government."
                isLast={true}
            />
        </div>
        
        <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-3 opacity-40">
                <span className="text-[10px] uppercase tracking-widest font-bold">Total Distance: 0.2 Miles</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
        </div>

      </div>
    </section>
  );
};