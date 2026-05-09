import { motion } from 'framer-motion';

export function StoreLocator() {
  return (
    <section className="py-24 bg-black relative" id="store-locator">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row">
          <div className="p-12 md:w-1/2 flex flex-col justify-center">
            <h2 className="font-headline-lg text-3xl font-black text-white uppercase tracking-widest mb-4">
              Find Your Nearest <span className="text-lays-yellow">Store</span>
            </h2>
            <p className="text-white/60 mb-8 font-light">
              Craving the crunch? Enter your zip code to find Lay's Indian Magic Masala at a retailer near you.
            </p>
            <div className="relative w-full max-w-sm flex">
              <input 
                type="text" 
                placeholder="Enter Zip Code" 
                className="w-full bg-black border border-white/20 rounded-l-full py-4 pl-6 text-white outline-none focus:border-lays-yellow transition-colors font-body-md" 
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lays-yellow text-black px-6 rounded-r-full font-bold uppercase tracking-widest hover:bg-orange-500 transition-colors"
              >
                Search
              </motion.button>
            </div>
            <div className="mt-8 flex space-x-6 opacity-50">
              <span className="font-black text-xl tracking-widest uppercase">Walmart</span>
              <span className="font-black text-xl tracking-widest uppercase">Target</span>
              <span className="font-black text-xl tracking-widest uppercase">Amazon</span>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto bg-zinc-800 relative">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" 
              alt="Map" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="material-symbols-outlined text-6xl text-lays-yellow drop-shadow-[0_0_15px_rgba(244,196,48,0.5)]"
              >
                location_on
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
