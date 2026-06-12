import React from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';
import KineticTypography from './KineticTypography';
import { useModal } from '../context/ModalContext';

const Hero = () => {
  const { openModal } = useModal();
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
        aria-label="High performance athlete training"
      >
        <source src="/assets/videos/gym-hero1.webm" type="video/webm" />
        <source src="/assets/videos/gym-hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="flex flex-col items-center text-center">
          <span className="font-script text-primary-container text-4xl mb-[-10px] transform -rotate-6 z-30">
            Get Ready...
          </span>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <h1 className="font-heavy text-[15vw] md:text-[12vw] lg:text-[160px] text-white leading-[0.85] uppercase tracking-tighter italic">
              GET <br />
              <span className="text-primary-container">ARMOURED</span>
            </h1>
          </motion.div>

          <KineticTypography 
            text="Our elite training facility provides the tools to armor yourself both mind and body. Shatter your limits and become the best version of yourself."
            className="font-body text-secondary mt-8 max-w-xl text-xs md:text-sm uppercase tracking-[0.2em] px-4 md:px-0 leading-relaxed"
          />

          <motion.div 
            style={{ x, y }}
            className="mt-12"
          >
            <button 
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={openModal}
              className="bg-white text-black font-condensed text-xl md:text-2xl px-8 md:px-12 py-3 md:py-4 hover:bg-primary-container hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-bounce-subtle join-target"
            >
              LEARN MORE
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Diamond Accents */}
      <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-primary-container/40 rotate-45 animate-pulse hidden md:block"></div>
      <div className="absolute top-40 left-10 w-12 h-12 border-2 border-white/20 rotate-45 hidden md:block"></div>
    </section>
  );
};

export default Hero;
