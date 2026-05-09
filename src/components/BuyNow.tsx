import { motion } from 'framer-motion';

interface BuyNowProps {
  onOrderClick: () => void;
}

export function BuyNow({ onOrderClick }: BuyNowProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display-hero text-5xl md:text-7xl text-white font-black uppercase tracking-tighter mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Experience The <br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ffe066] via-lays-yellow to-[#ff7b00]">Magic</span>
          </h2>
          <p className="font-body-lg text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light tracking-wide">
            Ready to elevate your snack game? Grab a pack of the ultimate sensory explosion today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOrderClick}
              className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-lays-yellow to-orange-600 text-black font-headline-md font-black uppercase tracking-widest text-lg rounded-full shadow-[0_0_30px_rgba(255,165,0,0.3)]"
            >
              Order Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('store-locator')}
              className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white/20 text-white font-headline-md font-bold uppercase tracking-widest text-lg rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Find in Store
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
