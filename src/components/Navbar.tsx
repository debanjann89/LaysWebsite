import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-6'}`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        <div 
          className="text-white font-display-hero text-3xl md:text-4xl font-black tracking-widest uppercase cursor-pointer drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]" 
          onClick={() => window.scrollTo(0,0)}
        >
          LAY'S
        </div>
        <div className="hidden md:flex space-x-8 text-white/90 font-headline-md font-bold text-sm tracking-widest uppercase items-center">
          <button onClick={() => scrollTo('flavors')} className="hover:text-lays-yellow transition-colors drop-shadow-md">Flavors</button>
          <button onClick={() => scrollTo('recipes')} className="hover:text-lays-yellow transition-colors drop-shadow-md">Recipes</button>
        </div>
      </div>
    </motion.nav>
  );
}
