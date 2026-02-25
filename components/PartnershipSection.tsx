import React from 'react';
import { Landmark, Building2, HardHat, ShieldCheck, Scale, FileCheck } from 'lucide-react';

const RoleCard = ({ title, icon: Icon, colorClass, role, duties }: { title: string, icon: React.ElementType, colorClass: string, role: string, duties: string[] }) => {
    return (
        <div className={`bg-white p-6 rounded-sm border-t-4 ${colorClass} shadow-sm h-full`}>
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-full ${colorClass.replace('border-t-', 'bg-').replace('4', '10')} bg-opacity-10`}>
                    <Icon className="w-5 h-5 text-frontier-slate" />
                </div>
                <h4 className="font-serif text-xl font-bold text-frontier-slate">{title}</h4>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-frontier-slate/50 mb-4">{role}</p>
            <ul className="space-y-2">
                {duties.map((d: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-frontier-slate/70">
                        <span className="mt-1.5 w-1 h-1 bg-frontier-slate rounded-full shrink-0"></span>
                        {d}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const PartnershipSection: React.FC = () => {
  return (
    <section id="governance" className="py-24 bg-white border-t border-frontier-slate/10">
      <div className="container mx-auto px-6">
        
        {/* Module Header */}
        <div className="mb-16 border-l-4 border-frontier-red pl-6 max-w-4xl">
            <span className="text-frontier-slate/40 font-bold tracking-widest uppercase text-xs">Module 3</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2">
                The Grand Bargain
            </h2>
            <p className="text-xl text-frontier-slate/60 mt-2 font-serif italic">
                "Asset Ownership Without Operational Risk"
            </p>
        </div>

        <p className="text-lg text-frontier-slate/80 max-w-3xl mb-12 leading-relaxed">
            We have structured a Tri-Party Agreement that maximizes County assets while minimizing County risk. Sullivan County builds the engine; the Historical Association buys the gas and drives the car.
        </p>

        {/* The Triangle */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <RoleCard 
                title="Sullivan County" 
                role="The Owner"
                icon={Building2}
                colorClass="border-t-frontier-slate"
                duties={[
                    "Invests $3.5M in capital funding.",
                    "Owns the building and all improvements permanently.",
                    "AVOIDS daily operational costs (staffing, utilities)."
                ]}
            />
             <RoleCard 
                title="RMHA" 
                role="The Operator"
                icon={Landmark}
                colorClass="border-t-frontier-walnut"
                duties={[
                    "Manages 100% of day-to-day operations.",
                    "Provides the land via 50-year Ground Lease.",
                    "Handles all historical compliance and staffing."
                ]}
            />
             <RoleCard 
                title="Risk Mitigation" 
                role="The Safety Valve"
                icon={ShieldCheck}
                colorClass="border-t-frontier-red"
                duties={[
                    "24-Month Reversion Trigger: If operations cease, control reverts to protect the site.",
                    "Lease ensures public benefit remains primary.",
                    "Protects historic integrity of the land."
                ]}
            />
        </div>

        {/* Closing Argument for this Section */}
        <div className="bg-frontier-limestone p-8 rounded-sm border border-frontier-slate/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-4">
                <div className="shrink-0">
                    <Scale className="w-10 h-10 text-frontier-gold" />
                </div>
                <div>
                    <h4 className="font-serif text-xl font-bold text-frontier-slate mb-2">The Bottom Line</h4>
                    <p className="text-frontier-slate/70 text-sm max-w-xl">
                        The taxpayers reap the economic impact of the passengers without paying for the gas. It is a permanent asset on the County balance sheet with zero operational drag.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white border border-frontier-slate/10 rounded-sm shadow-sm">
                <FileCheck className="w-5 h-5 text-green-600" />
                <span className="text-sm font-bold text-frontier-slate">Project Ready</span>
            </div>
        </div>

      </div>
    </section>
  );
};