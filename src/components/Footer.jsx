import React from 'react';

const Footer = ({ onJoinClick }) => {
  return (
    <footer className="relative bg-primary-container py-24 overflow-hidden">
      {/* Background Text Decor */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
        <span className="font-condensed text-[30vw] text-white font-bold leading-none uppercase italic">ELITE</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-16">
          {/* About Section */}
          <div className="text-center md:text-left">
            <span className="font-body text-[10px] text-white/70 uppercase tracking-[0.3em] block mb-2">Questions or Comments</span>
            <h2 className="font-condensed text-5xl text-white uppercase italic leading-none mb-6">About Rayane</h2>
            <button 
              onClick={onJoinClick}
              className="border-2 border-white text-white font-condensed text-xs uppercase tracking-[0.3em] px-8 py-2 hover:bg-white hover:text-primary-container transition-all"
            >
              Get In Touch
            </button>
          </div>

          {/* Central Coming Soon Diamond */}
          <div className="flex justify-center order-first md:order-none">
            <div className="relative w-64 h-64 border-4 border-white flex flex-col items-center justify-center rotate-45 bg-primary-container shadow-2xl">
              <div className="rotate-[-45deg] text-center">
                <span className="font-body text-[10px] text-white/80 uppercase tracking-widest block mb-1">Our Online Store</span>
                <h3 className="font-condensed text-4xl text-white uppercase italic leading-none">COMING <br />SOON...</h3>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="text-center md:text-right">
            <span className="font-body text-[10px] text-white/70 uppercase tracking-[0.3em] block mb-2">Be a part of the force</span>
            <h2 className="font-condensed text-5xl text-white uppercase italic leading-none mb-8">FOLLOW US</h2>
            <div className="flex justify-center md:justify-end gap-6">
              <a href="#" className="w-10 h-10 border border-white flex items-center justify-center text-white hover:bg-white hover:text-primary-container transition-all">
                <span className="material-symbols-outlined text-sm">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 border border-white flex items-center justify-center text-white hover:bg-white hover:text-primary-container transition-all">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </a>
              <a href="#" className="w-10 h-10 border border-white flex items-center justify-center text-white hover:bg-white hover:text-primary-container transition-all">
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-condensed text-[10px] text-white/60 uppercase tracking-widest italic">
            © 2024 FITNESS RAYANE. UNAPOLOGETIC PERFORMANCE.
          </div>
          <div className="flex gap-6">
            <a href="#" className="font-condensed text-[10px] text-white/60 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-condensed text-[10px] text-white/60 uppercase tracking-widest hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
