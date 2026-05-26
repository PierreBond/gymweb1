import React from 'react';

const AnnouncementBar = () => {
  const message = "Special discounts for students";
  
  // Repeating the message to ensure a seamless loop
  const content = Array.from({ length: 10 }).map((_, index) => (
    <div key={index} className="flex items-center gap-4 shrink-0 px-4">
      <span>{message}</span>
      <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
    </div>
  ));

  return (
    <div className="fixed top-0 left-0 w-full h-[30px] bg-black text-[#f4f4f0] z-[100] flex items-center overflow-hidden select-none border-b border-white/5">
      {/* Portal Fades */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div 
        className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer"
      >
        <div className="flex text-[10px] font-bold tracking-[0.2em] uppercase items-center">
          {content}
        </div>
        <div className="flex text-[10px] font-bold tracking-[0.2em] uppercase items-center">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
