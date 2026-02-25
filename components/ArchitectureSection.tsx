import React, { useState } from 'react';
import { Scan, Ruler, ArrowUpRight, DollarSign, Maximize2, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Blueprint = () => {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const zones = [
    { id: 'event', label: 'EVENT HALL', sf: '1,600 SF', color: '#4ade80', x: 40, y: 20, w: 50, h: 60, detail: 'High-yield rental space for weddings and corporate events.' },
    { id: 'lobby', label: 'LOBBY', sf: '900 SF', color: '#ffffff', x: 90, y: 50, w: 30, h: 30, detail: 'The "Dogtrot" glass entry connecting the two wings.' },
    { id: 'retail', label: 'RETAIL', sf: '1,000 SF', color: '#4ade80', x: 120, y: 50, w: 40, h: 30, detail: 'Heritage market featuring local Tennessee goods.' },
    { id: 'deck', label: 'DECK', sf: '1,200 SF', color: '#fbbf24', x: 90, y: 20, w: 30, h: 30, detail: 'Outdoor overlook with views of the historic farm.' },
  ];

  return (
    <div className="relative w-full aspect-video bg-[#2d3748] rounded-sm overflow-hidden border-2 border-slate-600 shadow-2xl group">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
        }}></div>

        <svg viewBox="0 0 200 120" className="w-full h-full p-8 drop-shadow-lg">
             {/* Center Point Guide */}
             <line x1="100" y1="0" x2="100" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2,2" />
             <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2,2" />

             {/* Zones */}
             {zones.map((zone, i) => (
               <motion.g 
                 key={zone.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                 onMouseEnter={() => setHoveredZone(zone.id)}
                 onMouseLeave={() => setHoveredZone(null)}
                 className="cursor-help"
                 animate={{ 
                   opacity: hoveredZone ? (hoveredZone === zone.id ? 1 : 0.3) : 1,
                   scale: hoveredZone === zone.id ? 1.02 : 1
                 }}
               >
                 <rect 
                   x={zone.x} y={zone.y} width={zone.w} height={zone.h} 
                   fill={zone.id === 'deck' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(22, 163, 74, 0.1)'} 
                   stroke={zone.color} 
                   strokeWidth={hoveredZone === zone.id ? 2 : 1}
                   strokeDasharray={zone.id === 'deck' ? '2,2' : '0'}
                   className="transition-all duration-300"
                 />
                 <text x={zone.x + zone.w/2} y={zone.y + zone.h/2 - 2} fill={zone.color} fontSize="4" fontWeight="bold" textAnchor="middle">{zone.label}</text>
                 <text x={zone.x + zone.w/2} y={zone.y + zone.h/2 + 4} fill={zone.color} fontSize="2.5" textAnchor="middle" opacity="0.8">{zone.sf}</text>
               </motion.g>
             ))}

             {/* Dimensions */}
             <line x1="40" y1="85" x2="160" y2="85" stroke="white" strokeWidth="0.5" />
             <line x1="40" y1="83" x2="40" y2="87" stroke="white" strokeWidth="0.5" />
             <line x1="160" y1="83" x2="160" y2="87" stroke="white" strokeWidth="0.5" />
             <text x="100" y="92" fill="white" fontSize="4" textAnchor="middle">120' TOTAL WIDTH</text>

             {/* Marker Defs */}
             <defs>
                 <marker id="arrow-white" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                     <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="white" />
                 </marker>
             </defs>
        </svg>

        {/* Tooltip Overlay */}
        <AnimatePresence>
          {hoveredZone && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-4 right-4 bg-frontier-slate/90 backdrop-blur-md p-4 rounded-sm border border-white/20 max-w-[200px] shadow-2xl pointer-events-none"
            >
              <h5 className="text-frontier-gold font-bold text-xs uppercase tracking-widest mb-1">
                {zones.find(z => z.id === hoveredZone)?.label}
              </h5>
              <p className="text-white text-[10px] leading-relaxed opacity-80">
                {zones.find(z => z.id === hoveredZone)?.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-4 left-4 flex flex-col">
            <span className="text-[10px] text-white/40 font-mono uppercase">DWG NO. A-101</span>
            <span className="text-xs text-white font-bold font-mono">INTERACTIVE SCHEMATIC</span>
        </div>
    </div>
  );
};


const SpecRow = ({ label, value, icon: Icon, highlight = false }: { label: string, value: string, icon?: React.ElementType, highlight?: boolean }) => {
    return (
        <div className={`flex items-center justify-between py-3 border-b ${highlight ? 'border-green-500/30 bg-green-50/50 px-3 -mx-3 rounded-sm' : 'border-frontier-slate/10'}`}>
            <div className="flex items-center gap-3">
                {Icon ? <Icon className={`w-4 h-4 ${highlight ? 'text-green-600' : 'text-frontier-slate/40'}`} /> : null}
                <span className={`text-sm ${highlight ? 'font-bold text-green-800' : 'text-frontier-slate/70'}`}>{label}</span>
            </div>
            <span className={`font-mono font-bold ${highlight ? 'text-green-700' : 'text-frontier-slate'}`}>{value}</span>
        </div>
    );
};

const MaterialSwatch = ({ color, name, img }: { color: string, name: string, img: string }) => (
    <div className="group cursor-pointer">
        <div className="w-full aspect-square rounded-sm overflow-hidden mb-2 relative shadow-sm border border-frontier-slate/10">
            <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-frontier-slate block text-center">{name}</span>
    </div>
)

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-frontier-limestone">
        <div className="container mx-auto px-6">
           
           {/* Section Header */}
           <div className="max-w-3xl mb-12">
               <span className="text-frontier-red font-bold tracking-widest uppercase text-sm">The Built Environment</span>
               <h2 className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2 mb-6">A Modern Frontier</h2>
               <p className="text-lg text-frontier-slate/80 leading-relaxed">
                   The design philosophy is "Rooted & Relevant." We use the materials of the 1790s (Limestone, White Oak, Iron) applied to a 2026 form factor. This is not a log cabin replica; it is a civic institution.
               </p>
           </div>

           <div className="grid lg:grid-cols-12 gap-12 mb-16 items-start">
             
             {/* Left Column: Visuals */}
             <div className="lg:col-span-8 space-y-8">
                <Blueprint />
                
                {/* Material Palette Grid */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-frontier-slate/40 mb-4 flex items-center gap-2">
                        <Scan className="w-3 h-3" /> Materiality Palette
                    </h4>
                    <div className="grid grid-cols-4 gap-4">
                        <MaterialSwatch name="Local Limestone" color="#e5e5e5" img="https://images.unsplash.com/photo-1596238612803-5d5138122d14?auto=format&fit=crop&q=80&w=200" />
                        <MaterialSwatch name="Charred Timber" color="#4a4a4a" img="https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=200" />
                        <MaterialSwatch name="Zinc Standing Seam" color="#2c3e50" img="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=200" />
                        <MaterialSwatch name="Low-E Glass" color="#a3d5ff" img="https://images.unsplash.com/photo-1506509938830-67c87c4731df?auto=format&fit=crop&q=80&w=200" />
                    </div>
                </div>
             </div>

             {/* Right Column: The Specifications */}
             <div className="lg:col-span-4 bg-white p-8 rounded-sm shadow-xl border-t-4 border-frontier-slate">
                 <div className="flex items-center gap-3 mb-6 pb-6 border-b border-frontier-slate/10">
                     <div className="p-3 bg-frontier-slate text-white rounded-sm">
                         <Building2 className="w-6 h-6" />
                     </div>
                     <div>
                         <h3 className="font-serif text-xl font-bold text-frontier-slate">Building Program</h3>
                         <span className="text-xs font-mono text-frontier-slate/50">PROJECT ID: TFG-2026</span>
                     </div>
                 </div>

                 <div className="space-y-1 mb-8">
                     <SpecRow label="Gross Floor Area" value="6,000 SF" icon={Maximize2} />
                     <SpecRow label="Conditioned Space" value="4,800 SF" />
                     <SpecRow label="Covered Outdoor" value="1,200 SF" />
                     <SpecRow label="Building Height" value="24'-6&quot;" icon={Ruler} />
                 </div>

                 <div className="bg-green-50 border border-green-100 p-4 rounded-sm mb-6">
                     <h4 className="text-xs font-bold uppercase tracking-widest text-green-800 mb-3 flex items-center gap-2">
                         <DollarSign className="w-4 h-4" /> Revenue Zones
                     </h4>
                     <div className="space-y-1">
                         <SpecRow label="Event Hall" value="1,600 SF" highlight={true} />
                         <SpecRow label="Retail Market" value="1,000 SF" highlight={true} />
                         <SpecRow label="Catering Kitchen" value="400 SF" highlight={true} />
                     </div>
                     <p className="text-[10px] text-green-700 mt-3 text-center font-medium">
                         82% of floor area is revenue-generating.
                     </p>
                 </div>

                 <button className="w-full py-3 bg-frontier-slate text-white font-bold text-sm rounded-sm hover:bg-frontier-walnut transition-colors flex items-center justify-center gap-2 group">
                     Download Floor Plan
                     <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
             </div>

           </div>
        </div>
    </section>
  );
};