import { motion } from 'framer-motion';

export function DecodingFlavor() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="flavors">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img alt="Dark spice pattern" className="w-full h-full object-cover mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEZhPmPXQ0q3mFexrkmkuKsXzchJWycKTAuKfPYxxl2UlaqpWjrxJkideybr0w2-ssaqFiJkUBSiviBxCMNpU8OXEcW5L7SNZCsEWushmV4XSbVkUzulAPNYKl9MG-zz9IRdYdPSDuDEdrI8yWCsvcCELHqy6rhwbVfrlqWVhnc2kbsWohjs_1sd4Bhe-0PEqBJISjWaoM3aRDWNe7x3V791NC1U9JRFdAkv5opWbiOiehngo14VFq4bp94yAZB_LunJ7nUWrbIL9"/>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline-lg text-4xl md:text-5xl text-white font-black uppercase tracking-widest mb-4">
            Decoding the <span className="text-lays-yellow">Flavor</span>
          </h2>
          <p className="font-body-lg text-lg text-white/60 max-w-2xl mx-auto tracking-wide">
            The secret behind the addictive taste lies in our complex blend of traditional Indian spices.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Spices Graphic */}
          <div className="relative grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-zinc-900 p-4 rounded-3xl border border-white/5 relative group overflow-hidden hover:border-red-500/50 transition-colors duration-500"
              >
                <img alt="Red Chili" className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAEBoD3guYitZoam5ixWyZp_RCOKYfu1pJA0mzGpa4JlXgnMPm3149FX4dl1NKIG1UKeC9VrfOSfeYCzOfwUwu2i3DGZPBvGAsrEzb-xjN27RBrZC3pNCZ5x3pQEQo7Mv4zlDw6Hq-Gh5LXL3mRKjH3gKCop-0vkHGp1S2PdcnkvTVk1DL4loIvf070OtFYrtIAuRoK3uCTHOmMywC3267LWtNQ_LjIZzjSj7N797sPd9olmVWCt9e7K_DwXwkQ3r4kAjDMHOTAvHx"/>
                <h4 className="font-headline-md text-xl font-bold text-white mb-1 uppercase tracking-widest">Red Chili</h4>
                <p className="font-body-md text-sm text-white/50">The primary heat source.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-zinc-900 p-4 rounded-3xl border border-white/5 relative group overflow-hidden hover:border-emerald-500/50 transition-colors duration-500"
              >
                <img alt="Coriander" className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuhymGBmyttlI6GcFlj87yeCIDa6fP6mZFGhbeXPfx4oG0fzBjHREVKmEAEYIO9oz_DaRwxX12d4oyKp6ylluF-bQNZhQUXlf1ue5A1bmOhRAfwll2ZtFzJF8CinsGnqwOIJ50-6hnGe-EKc8PKQXQ4wtbxb12dn7s-_d-d_xvVg0z775pjVThgZMjEalzVUXUoGB4eR15dDQICYR-Qv4Drc7He0FAGDvk237ksQIT-H4F1nfc3OomHiUqHdGQqOryaG_b9q4ggxqz"/>
                <h4 className="font-headline-md text-xl font-bold text-white mb-1 uppercase tracking-widest">Coriander</h4>
                <p className="font-body-md text-sm text-white/50">Adds a citrusy, earthy note.</p>
              </motion.div>
            </div>
            <div className="space-y-6 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-zinc-900 p-4 rounded-3xl border border-white/5 relative group overflow-hidden hover:border-orange-500/50 transition-colors duration-500"
              >
                <img alt="Cumin" className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChSrbTBWdIqpnCQnk6d1MLBpjUti2S8DMPV3B_d0IxD3bYfxue-NU0mhhZ5D0s2nuA24zsO27KB5eUM-swNdei4sJpW0B9_EmqXUXFeUnUngy18PlRnnA6RRGAOjLtVpWJuakmhdy5K57dLIEVa_FlgizxK9augWGOLllB-J6lTInkhLmkXTbR1B_U6nsKMvRJDoEdrZM-m-eakxXT7HgpSX9gTrdlCr1tbFnF49SOozLP1Myzt_cZCut3UsKZ7BmzD9T0sO34kpBB"/>
                <h4 className="font-headline-md text-xl font-bold text-white mb-1 uppercase tracking-widest">Cumin</h4>
                <p className="font-body-md text-sm text-white/50">Warm, savory depth.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-zinc-900 p-4 rounded-3xl border border-white/5 relative group overflow-hidden hover:border-yellow-500/50 transition-colors duration-500"
              >
                <img alt="Amchur" className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ylOu93uwCobV3q_djhx2FTtWrPCinTzzGuz8GapFLcx2jqPpajrmXesq-e_ryKaSErB2Sf6SjAmT0lST-3pZGoAAmD-mMUNyjGW_exMNRQNx_QHkDkS-iC9L_DW9BkzDdo8QZ2lY6CPg5_6rwi1wdRJDnZC54Sytmt6UQIcoV1K3w9goXhSvKXsFw-CT6R7y1YgYXTc6pVC4mOcjBMbIBrna6GFfwJFnX8bV66kmxUA2dleqjK8oK3LqTkenqDz5wlYginQwW76k"/>
                <h4 className="font-headline-md text-xl font-bold text-white mb-1 uppercase tracking-widest">Amchur</h4>
                <p className="font-body-md text-sm text-white/50">The tangy, fruity base.</p>
              </motion.div>
            </div>
          </div>
          {/* Flavor Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 pl-0 lg:pl-10"
          >
            <div>
              <h3 className="font-headline-lg text-4xl font-black mb-6 text-white uppercase tracking-wider">A Symphony of <span className="text-lays-yellow">Spices</span></h3>
              <p className="font-body-lg text-white/70 leading-relaxed text-lg font-light tracking-wide">
                Our Magic Masala is not just a flavor; it's a carefully orchestrated symphony. The immediate hit of tangy amchur wakes up your tastebuds, quickly followed by the robust, savory depth of roasted cumin and coriander. As you crunch, the signature heat of Indian red chili builds gently, leaving a warm, lingering spice that makes it impossible to stop at just one chip.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <span className="material-symbols-outlined text-lays-yellow text-3xl mr-3">thermostat</span>
                <span className="font-headline-md text-xl font-bold text-white uppercase tracking-widest">Spice Meter</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex">
                <div className="h-full bg-yellow-500 w-1/3"></div>
                <div className="h-full bg-orange-500 w-1/3"></div>
                <div className="h-full bg-red-600 w-1/6"></div>
              </div>
              <div className="flex justify-between mt-4 font-label-sm text-xs text-white/50 uppercase font-bold tracking-widest">
                <span>Mild</span>
                <span>Medium</span>
                <span className="text-red-500">Hot</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
