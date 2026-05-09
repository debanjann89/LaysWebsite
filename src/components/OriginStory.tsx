import { motion } from 'framer-motion';

export function OriginStory() {
  return (
    <section className="py-32 bg-black relative" id="origin">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lays-red/10 via-black to-black pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img alt="Indian Spices" className="w-full h-64 object-cover rounded-3xl border border-white/10 mt-12 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2940&auto=format&fit=crop" />
              <img alt="Spice Market" className="w-full h-64 object-cover rounded-3xl border border-white/10 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2940&auto=format&fit=crop" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2 lg:pl-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 font-label-sm text-xs uppercase tracking-widest mb-2">
              <span className="material-symbols-outlined text-[16px] mr-2 text-lays-red">public</span>
              The Origin Story
            </div>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-white font-black uppercase tracking-widest leading-tight">
              Crafting The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-lays-red to-orange-500">Magic Masala</span>
            </h2>
            <p className="font-body-lg text-lg text-white/60 leading-relaxed font-light tracking-wide">
              When Lay's arrived in India, we knew a standard potato chip wouldn't be enough for a country with such a rich, diverse culinary heritage. We needed a flavor that tasted like home—something vibrant, complex, and deeply rooted in Indian tradition.
            </p>
            <p className="font-body-lg text-lg text-white/60 leading-relaxed font-light tracking-wide">
              Our master chefs spent months exploring bustling spice markets, consulting with local grandmothers, and testing hundreds of spice combinations. The result was <strong>Indian Magic Masala</strong>: a proprietary blend of coriander, cumin, dry mango, and red chili that captured the authentic, mouth-watering essence of Indian street food in a single crunch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
