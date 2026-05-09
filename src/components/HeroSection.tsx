import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  images: HTMLImageElement[];
}

export function HeroSection({ images }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw initial frame
    const drawFrame = (index: number) => {
      const img = images[index];
      if (img && img.complete && img.naturalWidth) {
        const cropRatio = 0.85;
        const sWidth = img.naturalWidth * cropRatio;
        const sHeight = img.naturalHeight * cropRatio;
        
        canvas.width = sWidth;
        canvas.height = sHeight;
        
        const sx = (img.naturalWidth - sWidth) / 2;
        const sy = (img.naturalHeight - sHeight) / 2;
        
        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
      }
    };
    
    drawFrame(0);

    const frameInfo = { frame: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%', // 4 screens to scroll through 240 frames
        scrub: 0.5,
        pin: true,
      }
    });

    // 1. Scrub Canvas Frames from 0 to 239
    tl.to(frameInfo, {
      frame: images.length - 1,
      snap: 'frame',
      ease: 'none',
      duration: 1, // baseline duration for timeline
      onUpdate: () => drawFrame(Math.round(frameInfo.frame))
    }, 0);

    // KINETIC TYPOGRAPHY MAPPED TO THE 0-1 DURATION OF THE TIMELINE
    // The timeline duration is 1. We map the old scroll fractions to this 0-1 range.
    
    // Scene 1: "A Burst of Flavour" (0 to 0.20)
    tl.fromTo(text1Ref.current, 
      { opacity: 0, y: 0 },
      { opacity: 1, y: -50, duration: 0.05, ease: 'power1.out' }, 0)
      .to(text1Ref.current, { opacity: 0, y: -100, duration: 0.05, ease: 'power1.in' }, 0.15);

    // Scene 2: "MAGIC" (0.25 to 0.45)
    tl.fromTo(text2Ref.current, 
      { opacity: 0, scale: 1.5, filter: 'blur(20px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.05, ease: 'power2.out' }, 0.25)
      .to(text2Ref.current, { opacity: 0, duration: 0.05 }, 0.40);

    // Scene 3: "IN EVERY" (0.30 to 0.45)
    tl.fromTo(text3Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, 0.30)
      .to(text3Ref.current, { opacity: 0, duration: 0.05 }, 0.40);

    // Scene 4: "CRUNCH" (0.45 to 0.70)
    tl.fromTo(text4Ref.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.05, ease: 'back.out(1.5)' }, 0.45)
      .to(text4Ref.current, { opacity: 0, scale: 4, duration: 0.10, ease: 'power2.in' }, 0.60);

    // Scene 5: "Taste the Ultimate Crunch" CTA (0.80 to 1.0)
    tl.fromTo(ctaRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.10, ease: 'power2.out' }, 0.80)
      .to(ctaRef.current, { opacity: 0, duration: 0.05 }, 0.95);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black" id="hero">
      
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full object-cover" />
      
      {/* Vignette Lighting Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[5]" style={{ background: 'radial-gradient(ellipse at center, transparent 10%, rgba(0,0,0,0.95) 85%)', mixBlendMode: 'multiply' }}></div>

      {/* Kinetic Typography */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col items-center justify-center">
        
        <div ref={text1Ref} className="absolute w-full text-center text-white opacity-0">
          <h2 className="font-body-lg text-[20px] md:text-[30px] font-light tracking-[0.3em] uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]" style={{ textShadow: '0px 4px 10px rgba(0,0,0,0.8)' }}>
            A Burst of Flavour
          </h2>
        </div>

        <div ref={text2Ref} className="absolute w-full text-center opacity-0">
          <h1 className="font-display-hero text-[50px] md:text-[120px] font-black uppercase text-white tracking-tighter drop-shadow-[0_10px_40px_rgba(255,255,255,0.4)]" style={{ textShadow: '0px 10px 30px rgba(0,0,0,0.9), 0px 0px 20px rgba(255,255,255,0.3)' }}>
            MAGIC
          </h1>
        </div>

        <div ref={text3Ref} className="absolute w-full text-center opacity-0 mt-[100px] md:mt-[160px]">
          <p className="font-body-lg text-[18px] md:text-[28px] font-medium tracking-[0.4em] uppercase text-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)]" style={{ textShadow: '0px 4px 15px rgba(0,0,0,0.9)' }}>
            IN EVERY
          </p>
        </div>

        <div ref={text4Ref} className="absolute w-full text-center opacity-0">
          <h1 className="font-display-hero text-[60px] md:text-[180px] font-black uppercase tracking-tighter text-[#ffb347] drop-shadow-[0_0_60px_rgba(255,165,0,1)]" style={{ textShadow: '0px 10px 40px rgba(0,0,0,0.9), 0px 0px 30px rgba(255,165,0,0.6)' }}>
            CRUNCH
          </h1>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="absolute bottom-[10%] w-full flex flex-col items-center opacity-0">
          <p className="font-body-lg text-[18px] md:text-[24px] font-bold tracking-widest text-white uppercase mb-6 drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
            Taste the Ultimate Crunch
          </p>
          <button 
            onClick={() => scrollTo('flavors')}
            className="pointer-events-auto px-8 py-4 bg-black/40 backdrop-blur-md border border-white/20 text-white font-headline-md font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Explore Flavours
          </button>
        </div>

      </div>
    </div>
  );
}
