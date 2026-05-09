import { motion, AnimatePresence } from 'framer-motion';

export function Loader({ progress, isVisible }: { progress: number, isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          exit={{ opacity: 0, visibility: 'hidden' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_100%)]"
        >
          <div className="flex flex-col items-center justify-center w-[300px] text-center">
            <div className="font-headline-lg text-[2.5rem] font-black tracking-[18px] text-white uppercase opacity-70 mb-4 translate-x-[9px]">
              LAY'S
            </div>
            
            <div className="flex items-baseline justify-center mb-6 text-lays-yellow w-full">
              <span className="font-headline-md font-bold text-3xl leading-none text-white">{progress}</span>
              <span className="text-lg font-bold ml-1 opacity-50 text-white">%</span>
            </div>
            
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-lays-yellow shadow-[0_0_10px_rgba(244,196,48,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
