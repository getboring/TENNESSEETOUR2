import React from 'react';
import { AlertTriangle, ShieldCheck, Milestone, ArrowDown } from 'lucide-react';

const TrafficFunnel = () => (
    <div className="relative w-full bg-white rounded-sm border border-frontier-slate/10 overflow-hidden shadow-2xl flex flex-col items-center">
        
        {/* HERO: The Traffic Stream */}
        <div className="relative w-full h-80 bg-slate-900 overflow-hidden group border-b-4 border-frontier-gold">
            
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Moving Lane Markers (Vertical Flow) */}
            <div className="absolute inset-0 flex justify-center gap-20 opacity-20">
                <div className="w-4 h-[200%] -mt-10 bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)] bg-[length:4px_60px] animate-highway-flow"></div>
                <div className="w-4 h-[200%] -mt-10 bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)] bg-[length:4px_60px] animate-highway-flow" style={{ animationDelay: '-0.25s' }}></div>
            </div>

            {/* Traffic Blurs (Horizontal Streaks for speed impression) */}
            <div className="absolute top-1/4 left-0 w-full h-32 opacity-30">
                 <div className="absolute top-2 -left-32 w-64 h-1 bg-white blur-sm animate-traffic-fast"></div>
                 <div className="absolute top-8 -left-32 w-96 h-1 bg-red-400 blur-sm animate-traffic-fast" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}></div>
                 <div className="absolute bottom-4 -left-32 w-48 h-1 bg-white blur-sm animate-traffic-fast" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }}></div>
            </div>

            {/* The Metric Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                 <span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 backdrop-blur border border-slate-600 text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-4 shadow-lg">
                    Existing Condition
                 </span>
                 
                 <div className="flex flex-col items-center">
                    <h4 className="font-serif text-2xl font-bold text-white/60 mb-1">US-11E Corridor</h4>
                    <span className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                        45,000
                    </span>
                    <span className="text-sm font-bold text-frontier-gold uppercase tracking-[0.3em] mt-2 bg-slate-900/50 px-4 py-1 rounded-sm border border-frontier-gold/20">
                        Vehicles Per Day
                    </span>
                 </div>
            </div>
        </div>

        {/* THE FUNNEL NECK: The Conversion */}
        <div className="relative z-20 -mt-6 w-full max-w-lg px-6">
            <div className="bg-frontier-slate text-white p-4 rounded-sm shadow-xl flex items-center justify-between border-t border-white/10 relative overflow-hidden">
                 <div className="absolute inset-0 bg-frontier-gold/10"></div>
                 <div className="relative z-10 flex items-center gap-3">
                     <div className="p-2 bg-white/10 rounded-full border border-white/20">
                         <ArrowDown className="w-5 h-5 text-frontier-gold animate-bounce" />
                     </div>
                     <div>
                         <h5 className="font-serif font-bold text-lg">The Gateway Filter</h5>
                         <p className="text-[10px] uppercase tracking-wider opacity-60">Converting Traffic to Revenue</p>
                     </div>
                 </div>
                 <div className="text-right relative z-10">
                     <div className="text-2xl font-bold text-frontier-gold">0.15%</div>
                     <div className="text-[10px] font-bold opacity-50 uppercase">Capture Target</div>
                 </div>
            </div>
        </div>

        {/* THE BASIN: The Result Stats */}
        <div className="w-full bg-white pt-12 pb-8 px-8 grid grid-cols-2 gap-8 divide-x divide-frontier-slate/10">
             <div className="text-center group">
                 <div className="text-[10px] font-bold text-frontier-slate/40 uppercase tracking-widest mb-2">Dwell Time</div>
                 <div className="text-3xl font-bold text-frontier-slate group-hover:text-frontier-red transition-colors">2-4 Hr</div>
                 <div className="text-xs text-frontier-slate/60 mt-1">vs. 0 min today</div>
             </div>
             
             <div className="text-center group">
                 <div className="text-[10px] font-bold text-frontier-slate/40 uppercase tracking-widest mb-2">Economic Impact</div>
                 <div className="text-3xl font-bold text-frontier-slate group-hover:text-frontier-gold transition-colors">$1,050</div>
                 <div className="text-xs text-frontier-slate/60 mt-1">Avg. Spend / Trip</div>
             </div>
        </div>
        
        <div className="w-full bg-frontier-limestone py-2 text-center border-t border-frontier-slate/5">
            <span className="text-[9px] text-frontier-slate/30 font-mono uppercase">FIG 1.2: TRAFFIC CAPTURE MODEL</span>
        </div>
    </div>
);

export const OpportunitySection: React.FC = () => {
  return (
    <section id="opportunity" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Module Header */}
        <div className="mb-16 border-l-4 border-frontier-red pl-6">
            <span className="text-frontier-slate/40 font-bold tracking-widest uppercase text-xs">Module 1</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2">
              The Vision & The Fix
            </h2>
            <p className="text-xl text-frontier-slate/60 mt-2 font-serif italic">
                "Turning a Liability into a Landmark"
            </p>
        </div>

        {/* The Executive Summary Text */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
            <div className="space-y-6">
                 <p className="text-lg text-frontier-slate/80 leading-relaxed font-medium">
                    Commissioners, we are not just asking to build a museum. We are asking to fix a geometric failure in our county’s infrastructure and secure a 50-acre asset that is currently fragmented.
                 </p>
                 <p className="text-frontier-slate/70 leading-relaxed">
                    Right now, <strong>Hyder Hill Road</strong> slices through the historic core of Piney Flats. It meets US-11E at a skewed, dangerous acute angle. It separates our two greatest historical assets: the 1790 Rocky Mount site and the 1775 Massengill-Bachman Farm.
                 </p>
                 
                 <div className="bg-frontier-limestone p-6 rounded-sm border border-frontier-slate/10">
                    <h4 className="font-bold text-frontier-slate text-sm uppercase tracking-wider mb-4">The Proposed Resolution</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 bg-frontier-slate text-white flex items-center justify-center rounded-sm font-bold text-sm">1</div>
                            <div>
                                <strong className="block text-frontier-slate text-sm">Geometric Correction</strong>
                                <span className="text-xs text-frontier-slate/70">Vacate Hyder Hill Road to remove the 30-degree intersection hazard and eliminate cut-through traffic.</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 bg-frontier-slate text-white flex items-center justify-center rounded-sm font-bold text-sm">2</div>
                            <div>
                                <strong className="block text-frontier-slate text-sm">The Campus Unification</strong>
                                <span className="text-xs text-frontier-slate/70">Closing the road secures a single, defensible perimeter around the entire 50-acre property.</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 bg-frontier-slate text-white flex items-center justify-center rounded-sm font-bold text-sm">3</div>
                            <div>
                                <strong className="block text-frontier-slate text-sm">The Time Bridge</strong>
                                <span className="text-xs text-frontier-slate/70">The old asphalt becomes a pedestrian promenade connecting the farm (1775) to the capital (1790).</span>
                            </div>
                        </li>
                    </ul>
                 </div>
            </div>

            {/* The Visual Argument */}
            <div>
                 <TrafficFunnel />
                 <div className="mt-8 grid grid-cols-2 gap-4">
                     <div className="p-4 border border-red-100 bg-red-50/50 rounded-sm">
                         <div className="flex items-center gap-2 mb-2">
                             <AlertTriangle className="w-4 h-4 text-red-600" />
                             <h4 className="font-bold text-red-900 text-sm">Current State</h4>
                         </div>
                         <p className="text-xs text-red-800/70">
                             High-speed cut-through traffic. Fragmented parcels. Acute angle blind spot.
                         </p>
                     </div>
                     <div className="p-4 border border-green-100 bg-green-50/50 rounded-sm">
                         <div className="flex items-center gap-2 mb-2">
                             <ShieldCheck className="w-4 h-4 text-green-600" />
                             <h4 className="font-bold text-green-900 text-sm">Future State</h4>
                         </div>
                         <p className="text-xs text-green-800/70">
                             Single secure perimeter. 90-degree controlled access. Unified destination.
                         </p>
                     </div>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};