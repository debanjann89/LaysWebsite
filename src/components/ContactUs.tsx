import { motion } from 'framer-motion';

export function ContactUs() {
  return (
    <section className="py-24 bg-black relative" id="contact-us">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 p-12 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-3xl font-black text-white uppercase tracking-widest mb-2">
              Get in <span className="text-lays-yellow">Touch</span>
            </h2>
            <p className="text-white/50 font-light">
              Have a question or just want to tell us how much you love Magic Masala? Drop us a line.
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lays-yellow transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lays-yellow transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            <div>
              <label className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Message</label>
              <textarea 
                rows={4} 
                required
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lays-yellow transition-colors resize-none" 
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-lays-yellow text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-orange-500 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
