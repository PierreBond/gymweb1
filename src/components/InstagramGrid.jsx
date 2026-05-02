import React from 'react';

const InstagramGrid = () => {
  const images = [
    "/assets/images/class-powerlifting.jpg",
    "/assets/images/class-hiit.jpg",
    null, // Central Logo
    "/assets/images/class-yoga.jpg",
    "/assets/images/class-combat.jpg",
  ];

  return (
    <section className="bg-black py-0">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
        {images.map((img, index) => (
          <div key={index} className={`aspect-square relative group overflow-hidden border-r border-white/5 last:border-0 ${index === 2 ? 'hidden md:flex' : 'flex'}`}>
            {img ? (
              <>
                <img src={img} alt="Insta" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </>
            ) : (
              <div className="w-full h-full bg-white flex flex-col items-center justify-center p-4">
                <span className="font-body text-[10px] text-secondary uppercase tracking-[0.2em] mb-2">Visit Our Instagram</span>
                <div className="w-12 h-12 bg-black rotate-45 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white -rotate-45 font-bold">fitness_center</span>
                </div>
                <span className="font-condensed text-sm text-black mt-4 tracking-widest">@fitnessrayane</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramGrid;
