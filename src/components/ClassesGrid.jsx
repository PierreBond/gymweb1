import React from 'react';
import { motion } from 'framer-motion';

const classItems = [
  {
    title: "MEN'S",
    subtitle: "Army",
    image: "/assets/images/class-powerlifting.jpg",
    color: "border-black",
    icon: "fitness_center"
  },
  {
    title: "WOMEN'S",
    subtitle: "Army",
    image: "/assets/images/class-yoga.jpg",
    color: "border-primary-container",
    icon: "self_improvement"
  },
  {
    title: "OLYMPICS",
    subtitle: "Elite",
    image: "/assets/images/class-combat.jpg",
    color: "border-black",
    icon: "sports_martial_arts"
  }
];

const ClassesGrid = () => {
  return (
    <section className="py-32 bg-white" id="classes">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {classItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Thick Border Container */}
              <div className={`relative z-10 border-[12px] ${item.color} bg-white p-8 h-[300px] flex flex-col justify-center overflow-hidden transition-transform duration-500 group-hover:-translate-y-2`}>
                <div className="relative z-20">
                  <h3 className="font-condensed text-6xl text-black leading-none uppercase italic italic tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="font-body text-secondary text-sm uppercase tracking-widest mt-2">{item.subtitle}</p>
                </div>
                
                {/* Breakout Image */}
                <div className="absolute -right-10 -bottom-10 w-[200px] h-[200px] opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale" />
                </div>
              </div>

              {/* Icon Overlay */}
              <div className="absolute -top-6 -left-6 z-30 w-16 h-16 bg-primary-container flex items-center justify-center text-white rotate-45 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined -rotate-45 text-2xl font-bold">{item.icon}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesGrid;
