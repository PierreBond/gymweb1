import React from 'react';
import { motion } from 'framer-motion';

import KineticTypography from './KineticTypography';
import OptimizedImage from './OptimizedImage';

const About = ({ onJoinClick }) => {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden" id="programs">
      {/* Decorative Diamond Shapes - Hidden on small mobile */}
      <div className="absolute top-10 left-[5%] w-8 h-8 md:w-16 md:h-16 border-2 md:border-4 border-primary-container rotate-45 opacity-20 hidden xs:block"></div>
      <div className="absolute bottom-10 right-[5%] w-12 h-12 md:w-24 md:h-24 border-2 md:border-4 border-black rotate-45 opacity-10 hidden xs:block"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <KineticTypography 
            text="For Session Booking"
            className="font-script text-black text-2xl md:text-4xl mb-2 transform -rotate-2"
          />
          <h2 className="font-condensed text-4xl sm:text-5xl md:text-8xl lg:text-[100px] text-black leading-[0.9] uppercase italic tracking-tighter mb-4">
            BOOK A <br className="md:hidden" /> <span className="text-primary-container">CONSULT</span>
          </h2>
          <KineticTypography 
            text="Connect with coaches online, book workouts and classes with ease. Your transformation starts with a conversation."
            className="font-body text-neutral-600 text-sm md:text-lg uppercase tracking-[0.2em] max-w-2xl mb-8 md:mb-12"
          />
          
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-[2px] bg-black/20"></div>
            <button 
              onClick={onJoinClick}
              className="bg-black text-white font-condensed text-xl px-12 py-3 hover:bg-primary-container transition-all duration-300 animate-bounce-subtle join-target"
            >
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
        <OptimizedImage 
          src="/assets/images/about.webp"
          fallback="/assets/images/about.jpg"
          alt="Athlete"
          className="w-full h-full object-cover grayscale" 
        />
      </motion.div>
    </section>
  );
};

export default About;
