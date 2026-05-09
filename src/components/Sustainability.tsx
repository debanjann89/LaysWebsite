import { motion } from 'framer-motion';

export function Sustainability() {
  const points = [
    {
      icon: 'water_drop',
      title: 'Water Stewardship',
      desc: 'Implementing advanced irrigation and water reclamation in our farming practices to restore watersheds.'
    },
    {
      icon: 'eco',
      title: 'Positive Agriculture',
      desc: 'Working with over 100,000 farmers globally to adopt regenerative agricultural practices.'
    },
    {
      icon: 'recycling',
      title: 'Circular Packaging',
      desc: 'Committed to designing 100% of our packaging to be recyclable, compostable, or biodegradable.'
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5" id="sustainability">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline-lg text-4xl md:text-5xl text-white font-black uppercase tracking-widest mb-4">
            Our <span className="text-emerald-500">Commitment</span>
          </h2>
          <p className="font-body-lg text-lg text-white/60 max-w-2xl mx-auto tracking-wide">
            Great taste shouldn't cost the earth. Discover how we're making every crunch more sustainable.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-md p-10 rounded-3xl border border-emerald-500/20 hover:-translate-y-2 hover:border-emerald-500/50 transition-all duration-500"
            >
              <span className="material-symbols-outlined text-4xl text-emerald-500 mb-6">{p.icon}</span>
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3">{p.title}</h3>
              <p className="text-white/60 font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
