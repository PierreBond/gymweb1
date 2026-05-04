import React from 'react';

const BannerStrip = () => {
  const message = (
    <div className="flex items-center gap-8 shrink-0 px-8">
      <span>FOCUS ON YOUR <span className="text-primary-container">WORKOUT</span> AND WE WILL HANDLE THE REST</span>
    </div>
  );
  
  // Repeating the message to ensure a seamless loop
  const content = Array(20).fill(message);

  return (
    <section className="bg-black py-10 border-y border-white/10 overflow-hidden">
      {/* Marquee Container */}
      <div 
        className="flex whitespace-nowrap animate-marquee-fast hover:[animation-play-state:paused] cursor-pointer"
      >
        <div className="flex text-white font-condensed uppercase tracking-[0.2em] text-3xl md:text-5xl font-extrabold items-center">
          {content}
        </div>
        <div className="flex text-white font-condensed uppercase tracking-[0.2em] text-3xl md:text-5xl font-extrabold items-center">
          {content}
        </div>
      </div>
    </section>
  );
};

export default BannerStrip;
