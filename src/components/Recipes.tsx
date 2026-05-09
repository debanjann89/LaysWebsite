import { motion } from 'framer-motion';

export function Recipes() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5" id="recipes">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline-lg text-4xl md:text-5xl text-white font-black uppercase tracking-widest mb-4">
            Culinary <span className="text-lays-yellow">Creations</span>
          </h2>
          <p className="font-body-lg text-lg text-white/60 max-w-2xl mx-auto tracking-wide">
            Elevate your dishes. Crushed, sprinkled, or whole—Magic Masala is the ultimate secret ingredient.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2940&auto=format&fit=crop" alt="Magic Masala Chaat" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="inline-block px-3 py-1 bg-red-500 text-white font-bold text-xs uppercase tracking-widest rounded-full mb-3">Street Food</div>
              <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2 group-hover:text-lays-yellow transition-colors">Magic Masala Chaat</h3>
              <p className="text-white/70 font-light">Crushed chips mixed with chopped onions, tomatoes, green chilies, and a squeeze of lime.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2940&auto=format&fit=crop" alt="Crunchy Grilled Cheese" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="inline-block px-3 py-1 bg-orange-500 text-white font-bold text-xs uppercase tracking-widest rounded-full mb-3">Comfort Food</div>
              <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2 group-hover:text-lays-yellow transition-colors">The Crunchy Melt</h3>
              <p className="text-white/70 font-light">A classic grilled cheese sandwich stuffed with a thick layer of whole Magic Masala chips.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
