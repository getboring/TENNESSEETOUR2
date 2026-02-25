import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'The Problem', href: '#opportunity' },
  { label: 'The Fix', href: '#campus' },
  { label: 'Strategy', href: '#strategy' },
  { label: 'Experience', href: '#vision' },
  { label: 'Partnership', href: '#governance' },
  { label: 'Budget', href: '#budget' },
  { label: 'Impact', href: '#impact' },
  { label: 'Timeline', href: '#timeline' },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-frontier-slate bg-frontier-limestone selection:bg-frontier-red selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-frontier-red z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          (isScrolled || isMobileMenuOpen)
            ? 'bg-frontier-limestone/95 backdrop-blur-md shadow-sm border-frontier-slate/10 py-3'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className={cn(
              "w-8 h-8 rounded-sm flex items-center justify-center border transition-colors",
              isScrolled ? 'bg-frontier-slate border-frontier-slate text-white' : 'bg-white/10 border-white/30 text-white'
            )}>
              <span className="font-serif font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-serif font-bold text-sm tracking-wide leading-none transition-colors",
                (isScrolled || isMobileMenuOpen) ? 'text-frontier-slate' : 'text-white'
              )}>
                TENNESSEE FRONTIER
              </span>
              <span className={cn(
                "text-[9px] uppercase tracking-widest leading-none transition-colors",
                (isScrolled || isMobileMenuOpen) ? 'text-frontier-red' : 'text-frontier-gold'
              )}>
                GATEWAY
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative py-1",
                    activeSection === item.href.substring(1) 
                      ? 'text-frontier-red' 
                      : (isScrolled ? 'text-frontier-slate/70 hover:text-frontier-slate' : 'text-white/80 hover:text-white')
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-frontier-red transform transition-transform duration-300",
                    activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0'
                  )}></span>
                </a>
              ))}
            </div>
            
            <div className={cn("h-4 w-px", isScrolled ? 'bg-frontier-slate/20' : 'bg-white/20')}></div>
            
            <button className={cn(
              "px-4 py-2 rounded-sm font-bold text-[10px] uppercase tracking-wider transition-all border flex items-center gap-2 group",
              isScrolled 
                ? 'bg-frontier-slate text-white border-frontier-slate hover:bg-frontier-walnut' 
                : 'bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md'
            )}>
              <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
              Briefing PDF
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-frontier-slate" />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? 'text-frontier-slate' : 'text-white')} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-frontier-limestone shadow-xl border-b border-frontier-slate/10 xl:hidden overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-serif font-medium text-frontier-slate hover:text-frontier-red flex items-center justify-between border-b border-frontier-slate/5 pb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
                <button className="w-full py-4 bg-frontier-red text-white font-bold uppercase tracking-widest text-xs rounded-sm mt-2">
                  Download Pitch Deck
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-frontier-slate text-white py-12 md:py-20 border-t-8 border-frontier-walnut relative overflow-hidden">
        {/* Footer Texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center border border-white/20">
                  <span className="font-serif font-bold text-2xl text-white">T</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold leading-none">Tennessee Frontier</h3>
                  <span className="text-[10px] uppercase tracking-widest text-frontier-gold">Gateway Project</span>
                </div>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed mb-8 text-sm">
              A strategic infrastructure initiative linking Rocky Mount State Historic Site and the Massengill-Bachman Century Farm to create Tennessee's premier heritage tourism destination.
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-white/30 border border-white/10 px-2 py-1 rounded-sm">Confidential</span>
              <span className="text-xs text-white/30 border border-white/10 px-2 py-1 rounded-sm">Draft v2.4</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-frontier-gold">Strategic Partners</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 bg-frontier-red rounded-full group-hover:scale-125 transition-transform"></div> 
                Sullivan County (Owner)
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full group-hover:scale-125 transition-transform"></div> 
                RMHA (Operator)
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full group-hover:scale-125 transition-transform"></div> 
                Johnson City (Infrastructure)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-frontier-gold">Contact Leadership</h4>
            <address className="not-italic text-white/70 text-sm space-y-4">
              <div>
                  <p className="font-bold text-white">Cody Boring</p>
                  <p className="text-white/50 text-xs">Executive Director</p>
              </div>
              <div className="flex items-start gap-3">
                  <p className="leading-relaxed opacity-80">
                    200 Hyder Hill Rd.<br/>
                    Piney Flats, TN 37686
                  </p>
              </div>
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
};
