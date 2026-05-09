import { motion } from 'framer-motion';

export function Anatomy() {
  const features = [
    {
      icon: 'local_fire_department',
      title: 'Signature Heat',
      desc: 'A carefully calibrated blend of Indian red chilies that delivers a warm, building heat without overpowering the palate.',
      color: 'text-red-500',
      bg: 'bg-red-500/20'
    },
    {
      icon: 'agriculture',
      title: 'Farm Fresh',
      desc: 'We start with only the highest quality, farm-fresh potatoes, sliced to the perfect thickness for maximum crunch.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/20'
    },
    {
      icon: 'star',
      title: 'The Magic Blend',
      desc: 'Our proprietary mix of cumin, coriander, and dry mango powder that creates the unforgettable Magic Masala taste.',
      color: 'text-[#ffb347]',
      bg: 'bg-[#ffb347]/20'
    }
  ];

  return (
    <section className="py-24 bg-black relative" id="anatomy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lays-yellow/10 via-black to-black opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline-lg text-4xl md:text-5xl text-white font-black uppercase tracking-widest mb-4">
            The Anatomy of <span className="text-lays-yellow">Magic</span>
          </h2>
          <p className="font-body-lg text-lg text-white/60 max-w-2xl mx-auto tracking-wide">
            What makes our chips so irresistible? It's a combination of perfect ingredients and a masterfully crafted spice blend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-lays-yellow/30 transition-colors cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-full ${f.bg} ${f.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-4 uppercase tracking-widest">{f.title}</h3>
              <p className="font-body-md text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
