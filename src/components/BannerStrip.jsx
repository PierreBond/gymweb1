import React from 'react';

const BannerStrip = () => {
  const renderMessage = (index) => (
    <span key={index} className="shrink-0 px-12">
      FOCUS ON YOUR <span className="text-primary-container">WORKOUT</span> AND WE WILL HANDLE THE REST
    </span>
  );
  
  // Create content
  const content = Array.from({ length: 10 }).map((_, index) => renderMessage(index));

  return (
    <section className="bg-black py-10 border-y border-white/10 overflow-hidden">
      {/* Marquee Container */}
      <div className="flex w-max animate-marquee-fast hover:[animation-play-state:paused] cursor-pointer">
        <div className="flex w-max text-white font-condensed uppercase tracking-[0.2em] text-3xl md:text-5xl font-extrabold items-center">
          {content}
        </div>
        <div className="flex w-max text-white font-condensed uppercase tracking-[0.2em] text-3xl md:text-5xl font-extrabold items-center">
          {content}
        </div>
      </div>
    </section>
  );
};

export default BannerStrip;