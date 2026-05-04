import React from 'react';

const BannerStrip = () => {
  const message = (
    <span>
      FOCUS ON YOUR <span className="text-primary-container">WORKOUT</span> AND WE WILL HANDLE THE REST
    </span>
  );
  
  // Repeating the message for seamless marquee effect
  const content = Array(6).fill(
    <span className="shrink-0 px-8">
      {message}
    </span>
  );

  return (
    <section className="bg-black py-10 border-y border-white/10 overflow-hidden">
      <div className="flex animate-[marquee_7s_linear_infinite] whitespace-nowrap">
        <div className="flex text-white font-condensed uppercase tracking-[0.2em] text-3xl md:text-5xl items-center">
          {content}
        </div>
      </div>
    </section>
  );
};

export default BannerStrip;
