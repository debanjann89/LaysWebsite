import { motion } from 'framer-motion';

export function VideoShowcase() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5" id="video-showcase">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text & Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 font-label-sm text-xs uppercase tracking-widest mb-2">
              <span className="material-symbols-outlined text-[16px] mr-2 text-lays-yellow">play_circle</span>
              Behind The Crunch
            </div>
            
            <h2 className="font-headline-lg text-4xl md:text-5xl text-white font-black uppercase tracking-widest leading-tight">
              The Magic In <span className="text-transparent bg-clip-text bg-gradient-to-r from-lays-yellow to-orange-500">Motion</span>
            </h2>
            
            <p className="font-body-lg text-lg text-white/60 leading-relaxed font-light tracking-wide">
              We don't just make chips; we engineer a multi-sensory experience. From the carefully selected farm-fresh potatoes to our proprietary blend of fiery Indian spices, every step of the process is designed to deliver the ultimate crunch.
            </p>
            
            <p className="font-body-lg text-lg text-white/60 leading-relaxed font-light tracking-wide">
              Witness the irresistible fusion of heat, tang, and savory perfection. It's more than a snack—it's an explosion of flavor in every bite.
            </p>

            <div className="pt-4">
              <button 
                onClick={() => scrollTo('flavors')}
                className="group relative px-8 py-4 bg-lays-yellow text-black font-headline-md font-bold uppercase tracking-widest text-sm rounded-full hover:bg-orange-500 transition-all duration-300 shadow-[0_0_20px_rgba(244,196,48,0.2)] hover:shadow-[0_0_30px_rgba(244,196,48,0.5)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Decode The Flavor
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Video Player */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Glowing backdrop effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lays-yellow/30 to-orange-500/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] aspect-video bg-black flex items-center justify-center">
              <video 
                src="/video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
