import React from 'react';
import KineticTypography from './KineticTypography';

const BannerStrip = () => {
  return (
    <section className="bg-black py-8 md:py-4 border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
          <KineticTypography 
            text="For More"
            className="font-script text-white text-lg md:text-xl mb-1"
            justifyClass="justify-center md:justify-end"
          />
          <KineticTypography 
            text="Enquiries"
            className="font-condensed text-2xl md:text-3xl text-white uppercase tracking-widest italic"
            justifyClass="justify-center md:justify-end"
          />
          <button className="mt-2 border border-white/30 text-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] px-4 py-1 hover:bg-white hover:text-black transition-colors">Get More Details</button>
        </div>

        {/* Central Diamond Icon */}
        <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-primary-container flex items-center justify-center rotate-45 shrink-0">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-white rotate-[-45deg] flex items-center justify-center">
             <span className="material-symbols-outlined text-black text-lg md:text-xl font-bold">bolt</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <KineticTypography 
            text="Join"
            className="font-script text-white text-lg md:text-xl mb-1"
            justifyClass="justify-center md:justify-start"
          />
          <KineticTypography 
            text="Armoured"
            className="font-condensed text-2xl md:text-3xl text-white uppercase tracking-widest italic"
            justifyClass="justify-center md:justify-start"
          />
          <button className="mt-2 bg-primary-container text-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] px-4 py-1 hover:bg-white hover:text-black transition-colors">Join Us</button>
        </div>
      </div>
    </section>
  );
};

export default BannerStrip;
