import React from 'react';
import { Clock, Flag, AlertCircle, TrendingUp, CalendarCheck } from 'lucide-react';

const FundingWaveChart = () => (
  <div className="relative h-72 w-full bg-slate-900 rounded-sm border border-white/10 p-4 shadow-2xl overflow-hidden group">
     {/* Grid Lines */}
     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

     {/* SVG Chart showing the spike */}
     <svg viewBox="0 0 400 200" className="w-full h-full relative z-10">
        <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#C5A059" stopOpacity="0"/>
            </linearGradient>
        </defs>

        {/* Axes */}
        <line x1="20" y1="180" x2="380" y2="180" stroke="white" strokeOpacity="0.2" />
        
        {/* Years */}
        <text x="30" y="195" fill="white" fillOpacity="0.5" fontSize="10" fontFamily="sans-serif">2020</text>
        <text x="120" y="195" fill="white" fillOpacity="0.8" fontSize="10" fontFamily="sans-serif" fontWeight="bold">2024 (NOW)</text>
        <text x="200" y="195" fill="#ef4444" fontWeight="bold" fontSize="12" fontFamily="sans-serif">2026 (PEAK)</text>
        <text x="290" y="195" fill="white" fillOpacity="0.5" fontSize="10" fontFamily="sans-serif">2028</text>
        <text x="360" y="195" fill="white" fillOpacity="0.3" fontSize="10" fontFamily="sans-serif">2030</text>

        {/* The Wave Path - Dramatically steeper */}
        <path d="M 20 170 L 80 165 L 120 120 L 160 80 L 200 10 L 240 60 L 280 140 L 380 175" 
              fill="url(#waveGradient)" stroke="#C5A059" strokeWidth="3" strokeLinejoin="round" />
        
        {/* "You Are Here" Marker */}
        <line x1="120" y1="120" x2="120" y2="180" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx="120" cy="120" r="3" fill="white" />
        <text x="125" y="115" fill="white" fontSize="8" fontFamily="sans-serif">WE ARE HERE</text>

        {/* Peak Marker */}
        <line x1="200" y1="10" x2="200" y2="180" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx="200" cy="10" r="4" fill="#ef4444" className="animate-pulse" />
        
        <foreignObject x="215" y="0" width="160" height="80">
             <div className="text-xs text-white font-bold bg-red-900/90 backdrop-blur-md p-3 rounded-sm border-l-2 border-red-500 shadow-xl">
                <div className="flex items-center gap-2 mb-1 text-red-200">
                    <TrendingUp className="w-3 h-3" />
                    PEAK FUNDING
                </div>
                <span className="text-white font-normal block mb-1">TN250 Grant Cycle</span>
                <span className="text-white/60 text-[10px]">$3.5M Available NOW</span>
             </div>
        </foreignObject>
     </svg>
  </div>
);

export const UrgencySection: React.FC = () => {
  return (
    <section id="urgency" className="py-24 bg-frontier-slate text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-frontier-red/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-frontier-gold/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
            <span className="text-frontier-gold font-bold tracking-widest uppercase text-sm">Market Timing Strategy</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
                The 250-Year Window
            </h2>
            <p className="text-lg text-white/80 leading-relaxed border-l-4 border-frontier-red pl-6">
                America’s Semiquincentennial (250th anniversary) spans 2026-2027. This is the single largest heritage tourism investment cycle in American history. We are either ready to capture this wave, or we watch it pass to other counties.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-center">
            
            {/* Left Col: The Chart */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-frontier-gold" />
                    <h3 className="font-serif text-2xl font-bold">The Funding Wave</h3>
                </div>
                <p className="text-white/70 mb-6 text-sm">
                    Public sector funding for heritage projects is cyclical. We are currently approaching a historic peak in grant availability. <strong>Once 2027 passes, this liquidity evaporates.</strong>
                </p>
                <FundingWaveChart />
            </div>

            {/* Right Col: The Cost of Waiting */}
            <div className="space-y-8">
                
                <div className="relative bg-white text-frontier-slate p-8 rounded-sm shadow-xl">
                    <div className="absolute -top-3 -right-3 bg-frontier-red text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-lg rounded-sm">
                        Reality Check
                    </div>
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-8 h-8 text-frontier-red shrink-0" />
                        <div>
                            <p className="font-serif text-xl font-bold mb-2">The Next Window is 2076.</p>
                            <p className="text-sm text-frontier-slate/70 leading-relaxed">
                                National heritage attention is cyclical. After the 250th celebrations conclude in 2027, federal and state grant priorities will shift. 
                                The next comparable nationwide focus on the founding era—America 300—won't happen until 2076.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/5 p-4 rounded-sm border border-white/10">
                        <CalendarCheck className="w-5 h-5 text-frontier-gold mb-2" />
                        <h4 className="font-bold text-white text-sm">Action</h4>
                        <p className="text-xs text-white/60">Approve Phase 1 Funding in Q1 2024.</p>
                     </div>
                     <div className="bg-white/5 p-4 rounded-sm border border-white/10">
                        <Flag className="w-5 h-5 text-frontier-red mb-2" />
                        <h4 className="font-bold text-white text-sm">Result</h4>
                        <p className="text-xs text-white/60">Ribbon cutting in time for July 4, 2026.</p>
                     </div>
                </div>
            </div>
        </div>

        {/* Closer */}
        <div className="border-t border-white/10 pt-12 text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                The question isn't whether this project makes sense. <br/>
                <span className="text-frontier-gold">The question is whether we build it while the nation is watching—or after everyone has moved on.</span>
            </h3>
        </div>

      </div>
    </section>
  );
};