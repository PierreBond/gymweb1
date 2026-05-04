import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KineticTypography from './KineticTypography';

const Header = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-[30px] w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50 cursor-pointer scale-90 md:scale-100">
          <div className="w-7 h-7 bg-white flex items-center justify-center rotate-45">
            <span className="material-symbols-outlined text-black -rotate-45 text-xs font-bold">fitness_center</span>
          </div>
          <div className="font-condensed text-lg md:text-xl text-white tracking-widest uppercase">FITNESS RAYANE</div>
        </div>

        {/* Centered Desktop Nav */}
        <nav className="hidden md:flex gap-12 items-center flex-1 justify-center">
          <a className="text-white font-condensed text-xs uppercase tracking-[0.3em] hover:text-primary-container transition-colors" href="#classes">The Disciplines</a>
          <a className="text-white font-condensed text-xs uppercase tracking-[0.3em] hover:text-primary-container transition-colors" href="#programs">Programs</a>
          <a className="text-white font-condensed text-xs uppercase tracking-[0.3em] hover:text-primary-container transition-colors" href="#trainers">Trainers</a>
          <a className="text-white font-condensed text-xs uppercase tracking-[0.3em] hover:text-primary-container transition-colors" href="#membership">Join Us</a>
        </nav>

        {/* Right Action */}
        <div className="hidden md:block">
          <button
            onClick={onJoinClick}
            className="border border-white/30 text-white font-condensed text-xs uppercase tracking-[0.3em] px-6 py-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:gap-12"
          >
            <a onClick={() => setIsMobileMenuOpen(false)} href="#classes">
              <KineticTypography text="The Disciplines" className="text-white font-condensed text-3xl uppercase tracking-widest hover:text-primary-container transition-colors" />
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#programs">
              <KineticTypography text="Programs" className="text-white font-condensed text-3xl uppercase tracking-widest hover:text-primary-container transition-colors" />
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#trainers">
              <KineticTypography text="Trainers" className="text-white font-condensed text-3xl uppercase tracking-widest hover:text-primary-container transition-colors" />
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#membership">
              <KineticTypography text="Join Us" className="text-white font-condensed text-3xl uppercase tracking-widest hover:text-primary-container transition-colors" />
            </a>
            <button
              onClick={() => { setIsMobileMenuOpen(false); onJoinClick(); }}
              className="mt-8 bg-primary-container text-white font-condensed text-2xl uppercase tracking-widest px-12 py-4"
            >
              GET STARTED
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
