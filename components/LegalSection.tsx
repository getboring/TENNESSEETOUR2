import React from 'react';
import { Scale, ShieldCheck, FileText, AlertTriangle, Building, HelpCircle } from 'lucide-react';

const TriPartyDiagram = () => (
    <div className="w-full bg-white p-6 rounded-sm border border-frontier-slate/10 shadow-lg relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 bg-frontier-slate text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            Fig 4.1: Structure
        </div>
        <svg viewBox="0 0 300 200" className="w-full h-48 md:h-64">
            <defs>
                <marker id="arrow-slate" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="#2C3E50" />
                </marker>
                <marker id="arrow-gold" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="#C5A059" />
                </marker>
            </defs>

            {/* Sullivan County (Top) */}
            <g transform="translate(150, 40)">
                <rect x="-60" y="-20" width="120" height="40" rx="2" fill="#2C3E50" stroke="#2C3E50" strokeWidth="2" />
                <text x="0" y="-5" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">SULLIVAN COUNTY</text>
                <text x="0" y="8" fill="#C5A059" fontSize="8" textAnchor="middle" fontWeight="bold">OWNER / FUNDER</text>
            </g>

            {/* RMHA (Bottom Left) */}
            <g transform="translate(60, 160)">
                <rect x="-50" y="-20" width="100" height="40" rx="2" fill="white" stroke="#5D4037" strokeWidth="2" />
                <text x="0" y="-5" fill="#5D4037" fontSize="10" fontWeight="bold" textAnchor="middle">RMHA</text>
                <text x="0" y="8" fill="#5D4037" fontSize="8" textAnchor="middle" opacity="0.7">OPERATOR</text>
            </g>

            {/* Johnson City (Bottom Right) */}
            <g transform="translate(240, 160)">
                <rect x="-50" y="-20" width="100" height="40" rx="2" fill="white" stroke="#7B241C" strokeWidth="2" />
                <text x="0" y="-5" fill="#7B241C" fontSize="10" fontWeight="bold" textAnchor="middle">JOHNSON CITY</text>
                <text x="0" y="8" fill="#7B241C" fontSize="8" textAnchor="middle" opacity="0.7">INFRASTRUCTURE</text>
            </g>

            {/* Connections */}
            
            {/* County -> RMHA (Lease) */}
            <path d="M 120 60 L 60 140" stroke="#2C3E50" strokeWidth="1" strokeDasharray="4,2" />
            <text x="75" y="100" fontSize="8" fill="#2C3E50" transform="rotate(-53 75 100)" textAnchor="middle">50-YR LEASE</text>

            {/* RMHA -> County (Ops) */}
            <path d="M 70 140 L 130 60" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow-gold)" />
             <circle cx="100" cy="100" r="10" fill="white" stroke="#C5A059" />
             <text x="100" y="103" fontSize="8" fill="#C5A059" textAnchor="middle" fontWeight="bold">$$</text>

            {/* County <-> City (MOU) */}
            <path d="M 180 60 L 240 140" stroke="#2C3E50" strokeWidth="1" />
            <text x="225" y="100" fontSize="8" fill="#2C3E50" transform="rotate(53 225 100)" textAnchor="middle">M.O.U.</text>

            {/* City -> Project (Road) */}
            <path d="M 240 140 L 150 100" stroke="#7B241C" strokeWidth="1" markerEnd="url(#arrow-slate)" opacity="0.5" />
            <text x="195" y="130" fontSize="8" fill="#7B241C" textAnchor="middle">ROAD VACATION</text>

        </svg>
    </div>
);

export const LegalSection: React.FC = () => {
  return (
    <section id="legal" className="py-24 bg-white border-t border-frontier-slate/10 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-full bg-frontier-limestone/50 skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-frontier-slate/50 font-bold tracking-widest uppercase text-sm">Due Diligence</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-frontier-slate mt-2 mb-6">
                The Grand Bargain: <br/>
                <span className="text-frontier-red">How the Agreement Protects Sullivan County</span>
            </h2>
            <p className="text-lg text-frontier-slate/80 leading-relaxed max-w-3xl mx-auto">
                Sullivan County gets a permanent asset, ongoing revenue, and state-level partnership—without taking on daily operations, land ownership risk, or historical compliance burden. The agreement is designed to protect the public investment at every turn.
            </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 grid gap-8">
                {/* Q1: Ownership */}
                <div className="bg-frontier-limestone p-8 rounded-sm border-l-4 border-frontier-slate shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Building className="w-6 h-6 text-frontier-slate" />
                        <h3 className="font-serif text-xl font-bold text-frontier-slate">1. Who Owns What?</h3>
                    </div>
                    <ul className="space-y-3 text-frontier-slate/70 text-sm">
                        <li className="flex gap-3">
                            <span className="font-bold text-frontier-slate shrink-0">Land:</span>
                            <span><strong>RMHA</strong> (Historical Association) retains fee-simple ownership of the 15-acre parcel. It never transfers to the public sector, insulating the county from underlying land liability.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-frontier-slate shrink-0">Improvements:</span>
                            <span><strong>Sullivan County</strong> owns the building and all capital improvements. This is a permanent county asset on the balance sheet.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-frontier-slate shrink-0">Oversight:</span>
                            <span><strong>Tennessee Historical Commission (THC)</strong> holds regulatory oversight. Any material changes require a Certificate of Appropriateness.</span>
                        </li>
                    </ul>
                </div>

                {/* Q2: Benefits */}
                <div className="bg-frontier-limestone p-8 rounded-sm border-l-4 border-frontier-gold shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="w-6 h-6 text-frontier-gold" />
                        <h3 className="font-serif text-xl font-bold text-frontier-slate">2. What Does Sullivan County Get?</h3>
                    </div>
                    <ul className="space-y-2 text-frontier-slate/70 text-sm list-disc pl-4 marker:text-frontier-gold">
                        <li>A permanent, branded heritage tourism destination and signature landmark.</li>
                        <li>Revenue participation from events, retail, and admissions (operated by RMHA, reported annually).</li>
                        <li>Leverage for <strong>$12M</strong> in potential future state investment.</li>
                        <li>Full credit as the Developer of Record for the project.</li>
                    </ul>
                </div>

                {/* Q3: Responsibilities NOT taken */}
                <div className="bg-frontier-limestone p-8 rounded-sm border-l-4 border-frontier-slate shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-6 h-6 text-frontier-slate" />
                        <h3 className="font-serif text-xl font-bold text-frontier-slate">3. What Doesn't the County Take On?</h3>
                    </div>
                    <p className="text-frontier-slate/70 text-sm mb-4">The agreement explicitly assigns operational burdens to the non-profit partner:</p>
                    <ul className="space-y-2 text-frontier-slate/70 text-sm list-disc pl-4 marker:text-frontier-slate">
                        <li><strong>Day-to-Day Operations:</strong> Managed entirely by RMHA.</li>
                        <li><strong>Staffing & Programming:</strong> RMHA hires, fires, and manages all personnel.</li>
                        <li><strong>Historical Compliance:</strong> RMHA handles all THC paperwork and reporting.</li>
                        <li><strong>Land Risk:</strong> RMHA retains underlying environmental and title risk.</li>
                    </ul>
                </div>

                {/* Q4: Risk Mitigation */}
                <div className="bg-frontier-limestone p-8 rounded-sm border-l-4 border-frontier-red shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-frontier-red" />
                        <h3 className="font-serif text-xl font-bold text-frontier-slate">4. What If Something Goes Wrong?</h3>
                    </div>
                    <div className="space-y-4 text-frontier-slate/70 text-sm">
                        <div>
                            <strong className="block text-frontier-slate mb-1">The "24-Month Cessation Trigger"</strong>
                            <p>To prevent the building from becoming a stranded asset or being converted to non-heritage use, the lease dictates that if tourism operations cease for 24 consecutive months, ownership of the improvements automatically reverts to RMHA.</p>
                        </div>
                        <div>
                            <strong className="block text-frontier-slate mb-1">Insurance & Reporting</strong>
                            <p>RMHA must provide annual operational and financial reporting to the County Commission.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Visual/Context Column */}
            <div className="lg:col-span-4 space-y-8 sticky top-32">
                 
                 <TriPartyDiagram />

                 <div className="bg-white p-6 rounded-sm border border-frontier-slate/10 shadow-lg">
                    <div className="h-48 w-full bg-frontier-slate mb-6 overflow-hidden rounded-sm relative group">
                         <img src="https://images.unsplash.com/photo-1596238612803-5d5138122d14?auto=format&fit=crop&q=80&w=600" alt="Limestone Foundation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-frontier-slate/20"></div>
                         <div className="absolute bottom-3 left-3 text-white font-bold uppercase text-xs tracking-widest bg-frontier-slate/80 px-2 py-1">Foundation</div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <Scale className="w-6 h-6 text-frontier-slate" />
                        <h3 className="font-serif text-xl font-bold text-frontier-slate">5. The Long View</h3>
                    </div>
                    <p className="text-frontier-slate/70 text-sm mb-4">
                        The Ground Lease is structured for stability across generations (50-year initial term).
                    </p>
                </div>

                <div className="bg-frontier-slate text-white p-6 rounded-sm shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <HelpCircle className="w-6 h-6 text-frontier-gold" />
                        <h3 className="font-serif text-xl font-bold">6. Precedents</h3>
                    </div>
                    <p className="text-white/70 text-sm mb-4">
                        This model is standard for Tennessee heritage assets. It mirrors the state's approach: public capital for assets, private/non-profit labor for operations.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};