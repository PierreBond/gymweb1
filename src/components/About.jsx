import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden" id="programs">
      {/* Decorative Diamond Shapes */}
      <div className="absolute top-20 left-[10%] w-16 h-16 border-4 border-primary-container rotate-45 opacity-20"></div>
      <div className="absolute bottom-20 right-[15%] w-24 h-24 border-4 border-black rotate-45 opacity-10"></div>
      <div className="absolute top-1/2 right-[5%] w-12 h-12 border-4 border-primary-container rotate-45 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="font-script text-black text-4xl mb-2 transform -rotate-2">
            For Session Booking
          </span>
          <h2 className="font-condensed text-6xl md:text-8xl lg:text-[100px] text-black leading-[0.9] uppercase italic tracking-tighter mb-4">
            BOOK A <span className="text-primary-container">CONSULT</span>
          </h2>
          <p className="font-body text-secondary text-base md:text-lg uppercase tracking-[0.2em] max-w-2xl mb-12">
            Connect with coaches online, book workouts and classes with ease. Your transformation starts with a conversation.
          </p>
          
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-[2px] bg-black/20"></div>
            <button className="bg-black text-white font-condensed text-xl px-12 py-3 hover:bg-primary-container transition-all duration-300">
              BOOK NOW
            </button>
            <div className="w-12 h-[2px] bg-black/20"></div>
          </div>
        </motion.div>
      </div>

      {/* Breakout Image Element */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-full hidden lg:block opacity-10"
      >
        <img src="/assets/images/about.jpg" alt="Athlete" className="w-full h-full object-cover grayscale" />
      </motion.div>
    </section>
  );
};

export default About;
