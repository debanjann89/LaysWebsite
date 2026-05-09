export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 w-full py-16 border-t border-white/10 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          <div className="font-display-hero text-3xl font-black text-white tracking-widest mb-4">LAY'S</div>
          <p className="font-body-md text-white/50 max-w-xs leading-relaxed">
            Bringing the authentic taste of Indian spices to your snack time. Experience the magic today.
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <h4 className="font-headline-md text-lg font-bold text-white uppercase tracking-widest mb-2">Company</h4>
            <button onClick={() => scrollTo('anatomy')} className="text-white/50 hover:text-lays-yellow transition-colors duration-200 font-body-md text-left">About Us</button>
            <button onClick={() => scrollTo('sustainability')} className="text-white/50 hover:text-lays-yellow transition-colors duration-200 font-body-md text-left">Sustainability</button>
            <button onClick={() => scrollTo('contact-us')} className="text-white/50 hover:text-lays-yellow transition-colors duration-200 font-body-md text-left">Contact Us</button>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-headline-md text-lg font-bold text-white uppercase tracking-widest mb-2">Legal</h4>
            <button onClick={() => scrollTo('legal')} className="text-white/50 hover:text-lays-yellow transition-colors duration-200 font-body-md text-left">Privacy Policy</button>
            <button onClick={() => scrollTo('legal')} className="text-white/50 hover:text-lays-yellow transition-colors duration-200 font-body-md text-left">Terms of Service</button>
          </div>
        </div>
        
        <div className="col-span-1 flex flex-col items-start md:items-end justify-between">
          <div className="flex space-x-6 mb-8">
            <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-lays-yellow hover:text-black transition-colors border border-white/10">
              <span className="material-symbols-outlined">thumb_up</span>
            </a>
            <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-lays-yellow hover:text-black transition-colors border border-white/10">
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-lays-yellow hover:text-black transition-colors border border-white/10">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
          </div>
          <div className="font-body-md text-white/30 text-left md:text-right text-sm">
            © 2026 PepsiCo. All spices reserved.<br/>Indian Magic Masala is a registered trademark.
          </div>
        </div>
      </div>
    </footer>
  );
}
