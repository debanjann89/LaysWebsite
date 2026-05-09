import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LegalAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordions = [
    {
      title: 'Privacy Policy',
      content: `At Lay's (PepsiCo), we respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard the information you provide when using our website or interacting with our brand.
      
      We may collect basic analytics data, newsletter subscriptions, or contact form information. We do not sell your personal data to third parties. For any privacy-related inquiries, please use the Contact Us form above.
      
      Last updated: October 2024`
    },
    {
      title: 'Terms of Service',
      content: `Welcome to the Lay's promotional website. By accessing or using this site, you agree to be bound by these Terms of Service. All content, trademarks, and branding are the intellectual property of PepsiCo.
      
      This website is intended for promotional and informational purposes only. The "Add to Cart" and checkout functionalities are simulations and do not process real transactions. Please refer to authorized retailers for actual purchases.
      
      Last updated: October 2024`
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5" id="legal">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-headline-lg text-3xl font-black text-white uppercase tracking-widest mb-8 text-center">
          Legal <span className="text-white/50">Information</span>
        </h2>
        
        <div className="space-y-4">
          {accordions.map((item, i) => (
            <div key={i} className="bg-black border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 focus:outline-none"
              >
                <span className="text-white font-bold uppercase tracking-widest">{item.title}</span>
                <motion.span 
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="material-symbols-outlined text-lays-yellow"
                >
                  expand_more
                </motion.span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="p-6 pt-0 text-white/60 font-light text-sm leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
