import { motion } from 'framer-motion';
import KineticTypography from './KineticTypography';

const Hero = ({ onJoinClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with V-Split Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/hero.jpg')] bg-cover bg-center opacity-60 grayscale" role="img" aria-label="High performance athlete training"></div>
      
     

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="flex flex-col items-center text-center">
          <KineticTypography 
            text="Get Ready..."
            className="font-script text-primary-container text-4xl mb-[-10px] transform -rotate-6 z-30"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <h1 className="font-condensed text-[15vw] md:text-[12vw] lg:text-[160px] text-white leading-[0.85] uppercase tracking-tighter italic">
              GET <br />
              <span className="text-primary-container">ARMOURED</span>
            </h1>
          </motion.div>

          <KineticTypography 
            text="Our elite training facility provides the tools to armor yourself both mind and body. Shatter your limits and become the best version of yourself."
            className="font-body text-secondary mt-8 max-w-xl text-[11px] md:text-sm uppercase tracking-[0.2em] px-4 md:px-0 leading-relaxed"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <button 
              onClick={onJoinClick}
              className="bg-white text-black font-condensed text-xl md:text-2xl px-8 md:px-12 py-3 md:py-4 hover:bg-primary-container hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
