import { AnimatePresence, motion } from 'framer-motion';

interface ToastProps {
  isVisible: boolean;
  message: string;
  subtext: string;
}

export function Toast({ isVisible, message, subtext }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-8 right-8 bg-zinc-900 border border-lays-yellow/30 p-4 rounded-xl flex items-center shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[100] pointer-events-none"
        >
          <div className="w-12 h-12 bg-lays-yellow/10 rounded-full flex items-center justify-center text-lays-yellow mr-4">
            <span className="material-symbols-outlined">shopping_cart_checkout</span>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">{message}</h4>
            <p className="text-white/50 text-xs">{subtext}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
