import React from 'react';
import { User, Users, Building, Briefcase, Hammer, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const TeamCard = ({ name, role, org, type = "secondary", index }: { name: string, role: string, org: string, type?: "primary" | "secondary", index: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-8 rounded-sm border transition-all duration-500 group ${
        type === 'primary' 
        ? 'bg-frontier-slate text-white border-frontier-slate shadow-2xl lg:scale-105 z-10' 
        : 'bg-white border-frontier-slate/10 hover:border-frontier-slate/30 hover:shadow-xl'
    }`}>
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
            type === 'primary' 
            ? 'bg-white/10 text-white border border-white/20' 
            : 'bg-frontier-limestone text-frontier-slate'
        }`}>
            <User className="w-6 h-6" />
        </div>
        <h4 className={`font-serif text-xl font-bold mb-1 ${type === 'primary' ? 'text-white' : 'text-frontier-slate'}`}>{name}</h4>
        <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${type === 'primary' ? 'text-frontier-gold' : 'text-frontier-red'}`}>{role}</p>
        <p className={`text-sm leading-relaxed mb-6 ${type === 'primary' ? 'text-white/60' : 'text-frontier-slate/60'}`}>{org}</p>
        
        <div className="flex gap-3 pt-4 border-t border-current opacity-20 group-hover:opacity-100 transition-opacity">
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-frontier-gold" />
            <Mail className="w-4 h-4 cursor-pointer hover:text-frontier-gold" />
        </div>
    </motion.div>
);

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-frontier-limestone overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-frontier-red font-bold tracking-widest uppercase text-sm"
                >Leadership</motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2"
                >The Project Team</motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-frontier-slate/70 text-lg mt-4 max-w-xl"
                >
                    A coalition of public and private sector leaders committed to executing this vision on time and on budget.
                </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-frontier-slate/10 shadow-sm text-sm font-medium text-frontier-slate"
            >
                <Users className="w-4 h-4 text-frontier-gold" />
                <span>Steering Committee Active</span>
            </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <TeamCard 
                index={0}
                name="Cody Boring" 
                role="Executive Director" 
                org="Tennessee Frontier Gateway" 
                type="primary"
            />
            <TeamCard 
                index={1}
                name="RMHA Board" 
                role="Operating Partner" 
                org="Rocky Mount Historical Assoc." 
            />
            <TeamCard 
                index={2}
                name="Sullivan County" 
                role="Developer / Owner" 
                org="County Commission" 
            />
            <TeamCard 
                index={3}
                name="Johnson City" 
                role="Infrastructure Partner" 
                org="City Management" 
            />
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-frontier-slate/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
                <h4 className="font-serif text-xl font-bold text-frontier-slate mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-frontier-slate/40" />
                    Architect of Record
                </h4>
                <p className="text-sm text-frontier-slate/70 leading-relaxed">
                    [ARCHITECT NAME/FIRM]<br/>
                    <span className="text-xs text-frontier-slate/50 uppercase tracking-wider">Specializing in Heritage/Civic Projects</span>
                </p>
            </motion.div>
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
                <h4 className="font-serif text-xl font-bold text-frontier-slate mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-frontier-slate/40" />
                    Civil Engineer
                </h4>
                <p className="text-sm text-frontier-slate/70 leading-relaxed">
                    [ENGINEERING FIRM]<br/>
                    <span className="text-xs text-frontier-slate/50 uppercase tracking-wider">Site Design & Roadway Vacation</span>
                </p>
            </motion.div>
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
                <h4 className="font-serif text-xl font-bold text-frontier-slate mb-3 flex items-center gap-2">
                    <Hammer className="w-5 h-5 text-frontier-slate/40" />
                    General Contractor
                </h4>
                <p className="text-sm text-frontier-slate/70 leading-relaxed">
                    [TBD via RFP Process]<br/>
                    <span className="text-xs text-frontier-slate/50 uppercase tracking-wider">Public Bidding Required</span>
                </p>
            </motion.div>
        </div>

      </div>
    </section>
  );
};
