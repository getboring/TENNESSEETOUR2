import React from 'react';
import { ArrowRight, ChevronDown, FileText } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useSpring(scrollY, { stiffness: 100, damping: 30 });
  
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-frontier-slate">
      {/* Background Image: East Tennessee Ridges */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: useSpring(scrollY, { stiffness: 100, damping: 30 }) }}
          className="w-full h-full"
        >
            <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear" }}
            src="https://images.unsplash.com/photo-1506974210711-663806198822?q=80&w=2670&auto=format&fit=crop" 
            alt="East Tennessee Blue Ridge Mountains at dusk" 
            className="w-full h-full object-cover opacity-70"
            />
        </motion.div>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-frontier-slate/95 via-frontier-slate/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-frontier-slate via-transparent to-transparent opacity-80"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 pt-16 grid lg:grid-cols-2">
        <div className="text-white text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-frontier-gold/30 rounded-full bg-frontier-slate/80 backdrop-blur-md shadow-xl"
            >
                <span className="w-2 h-2 bg-frontier-gold rounded-full animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-frontier-gold drop-shadow-md">
                    Sullivan County • Executive Briefing
                </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] drop-shadow-2xl text-white tracking-tight"
            >
            Tennessee <br />
            Frontier Gateway
            </motion.h1>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              className="h-1 bg-frontier-red mb-8 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            ></motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xl md:text-2xl text-white/90 mb-4 font-light leading-relaxed font-serif italic"
            >
                Transforming a divided liability into a unified legacy.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-white/70 max-w-lg mb-10 leading-relaxed text-sm md:text-base"
            >
                By correcting a dangerous highway intersection, we secure Tennessee’s oldest history behind a single, safe perimeter.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex items-start gap-4 mb-10 border-l-2 border-white/20 pl-6 py-2 bg-white/5 rounded-r-sm backdrop-blur-sm"
            >
                <div>
                     <span className="text-frontier-gold font-bold uppercase tracking-wider text-[10px] block mb-1">Project Location</span>
                     <span className="text-white font-bold">Piney Flats, TN (US-11E)</span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div>
                     <span className="text-frontier-gold font-bold uppercase tracking-wider text-[10px] block mb-1">Capital Request</span>
                     <span className="text-white font-bold">$3.5M Allocation</span>
                </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
            <button className="group relative px-8 py-4 bg-frontier-red text-white font-semibold rounded-sm overflow-hidden shadow-2xl transition-all hover:bg-red-900 hover:shadow-frontier-red/50 hover:-translate-y-0.5 border border-red-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center gap-2">
                Start the Briefing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
            
            <button className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-sm hover:bg-white/10 transition-all backdrop-blur-md shadow-lg flex items-center gap-2 group">
                <FileText className="w-4 h-4 opacity-70 group-hover:text-frontier-gold transition-colors" />
                View 3-Part Strategy
            </button>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 cursor-pointer hover:text-white transition-colors"
      >
        <div className="flex flex-col items-center gap-2 drop-shadow-md">
          <span className="text-[10px] uppercase tracking-widest font-bold">The Problem</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
};
