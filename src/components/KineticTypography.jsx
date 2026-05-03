import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const KineticTypography = ({ text, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02, // 20ms per character
      }
    }
  };

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: '150%'
    },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.8,
        ease: [0.2, 0, 0.2, 1] // Custom cubic-bezier
      }
    }
  };

  // Split text into words, then words into characters
  const words = text.split(' ');

  return (
    <div className={`relative ${className}`}>
      {/* Accessibility: Screen reader only text */}
      <span className="sr-only">{text}</span>

      {/* Animated Text: Hidden from screen readers */}
      <motion.div
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center"
      >
        {words.map((word, wordIndex) => (
          <span
            key={`word-${wordIndex}`}
            className="inline-block whitespace-nowrap overflow-hidden mr-[0.25em] px-[0.5em] -mx-[0.5em] py-[0.1em] -my-[0.1em]"
          >
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`char-${charIndex}`}
                variants={shouldReduceMotion ? {} : characterVariants}
                className="inline-block"
                style={{ 
                  display: 'inline-block',
                  paddingRight: '0.15em' // Generous padding for character slant
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default KineticTypography;
