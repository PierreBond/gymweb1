import React from 'react';
import KineticTypography from './KineticTypography';

const Footer = ({ onJoinClick }) => {
  return (
    <footer className="relative bg-primary-container py-24 overflow-hidden">
      {/* Background Text Decor */}
      <div className="absolute inset-0 flex items-center overflow-hidden opacity-10 select-none pointer-events-none whitespace-nowrap">
        <div className="flex animate-[marquee_40s_linear_infinite]">
          <span className="font-condensed text-[30vw] text-white font-bold leading-none uppercase italic px-12">ELITE</span>
          <span className="font-condensed text-[30vw] text-white font-bold leading-none uppercase italic px-12">ELITE</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-16">
          {/* About Section */}
          <div className="text-center md:text-left">
            <KineticTypography
              text="Questions or Comments"
              className="font-body text-[10px] text-white/70 uppercase tracking-[0.3em] block mb-2"
              justifyClass="justify-center md:justify-start"
            />
            <KineticTypography
              text="About Rayane"
              className="font-condensed text-2xl text-white uppercase italic leading-none mb-6"
              justifyClass="justify-center md:justify-start"
            />
            <div className="flex flex-col gap-2 mb-4">
              <a href="https://maps.app.goo.gl/VwEnMvxhUmjn69DL9?g_st=ipc" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-white/80 uppercase tracking-wider hover:text-white transition-colors">
                BASED IN SETTAT
              </a>
              <a href="tel:+212667012566" className="font-body text-xs text-white/80 uppercase tracking-wider hover:text-white transition-colors">
                +212 6 67 01 25 66
              </a>
            </div>
            <button
              onClick={onJoinClick}
              className="border-2 border-white text-white font-condensed text-xs uppercase tracking-[0.3em] px-8 py-2 hover:bg-white hover:text-primary-container transition-all"
            >
              Get In Touch
            </button>
          </div>

          {/* Central Coming Soon Diamond */}
          <div className="flex justify-center order-first md:order-none">
            <div className="relative w-48 h-48 md:w-64 md:h-64 border-4 border-white flex flex-col items-center justify-center rotate-45 bg-primary-container shadow-2xl">
              <div className="rotate-[-45deg] text-center">
                <KineticTypography
                  text="Our Online Store"
                  className="font-body text-[6px] md:text-[10px] text-white/80 uppercase tracking-widest block mb-1"
                />
                <KineticTypography
                  text="COMING SOON"
                  className="font-condensed text-xl md:text-2xl text-white uppercase italic leading-none"
                />
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="text-center md:text-right">
            <KineticTypography
              text="Be a part of the force"
              className="font-body text-[10px] text-white/70 uppercase tracking-[0.3em] block mb-2"
              justifyClass="justify-center md:justify-end"
            />
            <KineticTypography
              text="FOLLOW US"
              className="font-condensed text-2xl text-white uppercase italic leading-none mb-8"
              justifyClass="justify-center md:justify-end"
            />
            <div className="flex justify-center md:justify-end gap-5 md:gap-7">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 border border-white flex items-center justify-center text-white hover:bg-white hover:text-primary-container transition-all rotate-45 group">
                <svg className="-rotate-45 w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/rayane_fitness_club" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white flex items-center justify-center text-white hover:bg-white hover:text-primary-container transition-all rotate-45 group">
                <svg className="-rotate-45 w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.014 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.689.069 4.849 0 3.259-.012 3.668-.072 4.948-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.072-4.85.072-3.259 0-3.668-.014-4.948-.072-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.949 0-3.259.013-3.667.072-4.947.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.073 4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-10 h-10 border border-white flex items-center justify-center text-white hover:bg-white hover:text-primary-container transition-all rotate-45 group">
                <svg className="-rotate-45 w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-condensed text-[10px] text-white/60 uppercase tracking-widest italic">
            <KineticTypography text="© 2024 FITNESS RAYANE. UNAPOLOGETIC PERFORMANCE." justifyClass="justify-center md:justify-start" />
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              <KineticTypography text="Privacy Policy" className="font-condensed text-[10px] text-white/60 uppercase tracking-widest" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <KineticTypography text="Terms & Conditions" className="font-condensed text-[10px] text-white/60 uppercase tracking-widest" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
