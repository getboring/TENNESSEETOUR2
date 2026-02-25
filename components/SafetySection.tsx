import React from 'react';
import { AlertTriangle, ShieldCheck, Ruler, ArrowRight, FileWarning, CheckCircle2 } from 'lucide-react';

const EngineeringExhibit = ({ type }: { type: 'before' | 'after' }) => {
    const isBefore = type === 'before';
    
    return (
        <div className="w-full h-full bg-[#FDFBF7] rounded-sm border border-frontier-slate/20 relative overflow-hidden group">
            {/* Engineering Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: 'linear-gradient(#2C3E50 0.5px, transparent 0.5px), linear-gradient(90deg, #2C3E50 0.5px, transparent 0.5px)', 
                backgroundSize: '20px 20px' 
            }}></div>

            {/* Stamp/Label */}
            <div className={`absolute top-4 right-4 px-3 py-1.5 border-2 ${isBefore ? 'border-frontier-red text-frontier-red' : 'border-green-700 text-green-700'} text-[10px] font-bold uppercase tracking-widest bg-white/80 backdrop-blur-sm z-20 transform -rotate-2`}>
                {isBefore ? 'Exhibit A: Deficient Geometry' : 'Exhibit B: Proposed Alignment'}
            </div>

            <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                <defs>
                    <marker id="arrow-traffic" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="#2C3E50" opacity="0.6" />
                    </marker>
                    <pattern id="road-texture" width="4" height="4" patternUnits="userSpaceOnUse">
                         <rect width="4" height="4" fill="#E2E8F0" />
                         <circle cx="2" cy="2" r="0.5" fill="#94A3B8" />
                    </pattern>
                </defs>

                {/* --- COMMON ELEMENTS --- */}
                
                {/* US-11E Highway (Bottom) */}
                <path d="M -20 250 L 420 250" stroke="url(#road-texture)" strokeWidth="60" />
                <path d="M -20 250 L 420 250" stroke="white" strokeWidth="2" strokeDasharray="10,10" />
                <text x="20" y="275" fontSize="8" fontFamily="sans-serif" fill="#64748b" fontWeight="bold">US-11E CORRIDOR (55 MPH)</text>

                {isBefore ? (
                    // --- BEFORE: SKEWED INTERSECTION ---
                    <>
                        {/* Hyder Hill (Skewed) */}
                        <path d="M 280 250 L 100 -20" stroke="url(#road-texture)" strokeWidth="40" />
                        <path d="M 280 250 L 100 -20" stroke="white" strokeWidth="1" strokeDasharray="10,10" opacity="0.5" />
                        
                        {/* Danger Zone Highlight */}
                        <circle cx="280" cy="250" r="40" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="1" strokeDasharray="4,2" />
                        
                        {/* Labels */}
                        <text x="260" y="200" fontSize="10" fill="#B91C1C" fontWeight="bold" transform="rotate(-33 260 200)">HYDER HILL RD</text>
                        <text x="320" y="240" fontSize="8" fill="#B91C1C" fontWeight="bold">ACUTE ANGLE (30°)</text>

                        {/* Conflict Vector */}
                        <line x1="180" y1="265" x2="260" y2="265" stroke="#B91C1C" strokeWidth="2" markerEnd="url(#arrow-traffic)" />
                        <line x1="200" y1="130" x2="260" y2="220" stroke="#B91C1C" strokeWidth="2" markerEnd="url(#arrow-traffic)" strokeDasharray="4,2" />
                    </>
                ) : (
                    // --- AFTER: T-INTERSECTION ---
                    <>
                        {/* New Entrance (90 Degree) */}
                        <path d="M 120 250 L 120 50" stroke="url(#road-texture)" strokeWidth="30" />
                        <rect x="105" y="220" width="30" height="4" fill="white" /> {/* Stop Bar */}
                        
                        {/* The Pedestrian Promenade (Ghost of Old Road) */}
                        <path d="M 280 250 L 100 -20" stroke="#C5A059" strokeWidth="20" strokeOpacity="0.15" />
                        <path d="M 280 250 L 100 -20" stroke="#C5A059" strokeWidth="1" strokeDasharray="4,4" />
                        
                        {/* Labels */}
                        <text x="140" y="150" fontSize="10" fill="#2C3E50" fontWeight="bold">NEW ENTRY</text>
                        <text x="90" y="240" fontSize="8" fill="#15803D" fontWeight="bold">90° SAFETY CHECK</text>
                        <text x="190" y="100" fontSize="8" fill="#C5A059" fontWeight="bold" transform="rotate(-33 190 100)">VACATED ROW (PEDESTRIAN)</text>

                         {/* Safety Vector */}
                        <circle cx="120" cy="235" r="3" fill="#15803D" />
                        <text x="130" y="238" fontSize="6" fill="#15803D">FULL STOP</text>
                    </>
                )}
            </svg>
        </div>
    );
};

export const SafetySection: React.FC = () => {
  return (
    <section id="safety" className="py-24 bg-frontier-limestone border-t border-frontier-slate/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 items-end">
            <div>
                <span className="text-frontier-red font-bold tracking-widest uppercase text-sm">Civil Engineering Strategy</span>
                <h2 className="font-serif text-4xl font-bold text-frontier-slate mt-2">
                    Geometric Correction
                </h2>
                <p className="text-lg text-frontier-slate/80 mt-4 leading-relaxed">
                    We aren't just building a museum; we are fixing a dangerous intersection. By working with Johnson City to vacate Hyder Hill Road, we solve a public safety liability and create a unified campus in one motion.
                </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-frontier-slate shadow-sm rounded-sm">
                <div className="flex items-start gap-3">
                    <FileWarning className="w-5 h-5 text-frontier-red shrink-0 mt-1" />
                    <div>
                        <p className="text-xs font-mono text-frontier-slate/60 mb-1 uppercase">PUBLIC SAFETY ADVISORY</p>
                        <p className="text-sm font-medium text-frontier-slate italic">
                            "The current 30° skew angle at US-11E creates a severe blind spot for school buses. This is a critical infrastructure failure that requires immediate geometric correction to 90 degrees."
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* The Exhibits */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 h-96">
            <EngineeringExhibit type="before" />
            <EngineeringExhibit type="after" />
        </div>

        {/* The 3-Point Argument - Updated to Public Benefits */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-frontier-slate/10 pt-12">
            <div className="flex flex-col gap-3 group">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-sm bg-frontier-slate flex items-center justify-center text-white shadow-md group-hover:bg-frontier-red transition-colors">
                        <span className="font-serif font-bold text-sm">1</span>
                    </div>
                    <h3 className="font-bold text-frontier-slate text-sm uppercase tracking-wide">Eliminate Conflict Points</h3>
                </div>
                <p className="text-sm text-frontier-slate/70 leading-relaxed border-l-2 border-frontier-slate/10 pl-3">
                    The road closure physically removes the possibility of "T-Bone" collisions at the Hyder Hill intersection. We are removing the variable of human error.
                </p>
            </div>

            <div className="flex flex-col gap-3 group">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-sm bg-frontier-slate flex items-center justify-center text-white shadow-md group-hover:bg-frontier-red transition-colors">
                        <span className="font-serif font-bold text-sm">2</span>
                    </div>
                    <h3 className="font-bold text-frontier-slate text-sm uppercase tracking-wide">The Single Secure Zone</h3>
                </div>
                <p className="text-sm text-frontier-slate/70 leading-relaxed border-l-2 border-frontier-slate/10 pl-3">
                    Schools cannot send field trips to a site bisected by a public road. A single perimeter fence creates a "safe zone" for thousands of students.
                </p>
            </div>

            <div className="flex flex-col gap-3 group">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-sm bg-frontier-slate flex items-center justify-center text-white shadow-md group-hover:bg-frontier-red transition-colors">
                        <span className="font-serif font-bold text-sm">3</span>
                    </div>
                    <h3 className="font-bold text-frontier-slate text-sm uppercase tracking-wide">Liability Reduction</h3>
                </div>
                <p className="text-sm text-frontier-slate/70 leading-relaxed border-l-2 border-frontier-slate/10 pl-3">
                    Johnson City sheds the long-term maintenance cost of the road, and the County reduces its liability exposure regarding student safety.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};