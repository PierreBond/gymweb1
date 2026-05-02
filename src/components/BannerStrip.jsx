import React from 'react';

const BannerStrip = () => {
  return (
    <section className="bg-black py-4 border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
          <span className="font-script text-white text-xl mb-1">For More</span>
          <h3 className="font-condensed text-3xl text-white uppercase tracking-widest italic">Enquiries</h3>
          <button className="mt-2 border border-white/30 text-white text-[10px] uppercase tracking-[0.2em] px-4 py-1 hover:bg-white hover:text-black transition-colors">Get More Details</button>
        </div>

        {/* Central Diamond Icon */}
        <div className="w-16 h-16 border-2 border-primary-container flex items-center justify-center rotate-45 shrink-0">
          <div className="w-8 h-8 bg-white rotate-[-45deg] flex items-center justify-center">
             <span className="material-symbols-outlined text-black text-xl font-bold">bolt</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-script text-white text-xl mb-1">Join</span>
          <h3 className="font-condensed text-3xl text-white uppercase tracking-widest italic">Armoured</h3>
          <button className="mt-2 bg-primary-container text-white text-[10px] uppercase tracking-[0.2em] px-4 py-1 hover:bg-white hover:text-black transition-colors">Join Us</button>
        </div>
      </div>
    </section>
  );
};

export default BannerStrip;
