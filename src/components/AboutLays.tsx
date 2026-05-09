import { motion } from 'framer-motion';

export function AboutLays() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5" id="about-lays">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 font-label-sm text-xs uppercase tracking-widest mb-2">
              <span className="material-symbols-outlined text-[16px] mr-2 text-lays-yellow">history</span>
              Our Legacy
            </div>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-white font-black uppercase tracking-widest leading-tight">
              More Than Just A <span className="text-lays-yellow">Snack</span>
            </h2>
            <p className="font-body-lg text-lg text-white/60 leading-relaxed font-light tracking-wide">
              Since 1932, Lay's has been on a mission to bring joy to every occasion. What started as a simple idea to sell fresh, delicious potato chips from the back of a car has exploded into a global phenomenon. We believe that every chip holds the power to spark a smile, start a conversation, and turn an ordinary moment into something magical.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="font-display-hero text-4xl font-black text-white mb-2">1932</div>
                <div className="font-body-md text-sm text-lays-yellow uppercase tracking-widest">Year Founded</div>
              </div>
              <div>
                <div className="font-display-hero text-4xl font-black text-white mb-2">200+</div>
                <div className="font-body-md text-sm text-lays-yellow uppercase tracking-widest">Flavors Worldwide</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-lays-yellow/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <img alt="Lay's Legacy Potatoes" className="w-full h-[500px] object-cover rounded-3xl border border-white/10 relative z-10" src="https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=2940&auto=format&fit=crop" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
