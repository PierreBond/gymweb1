import React from 'react';
import { motion } from 'framer-motion';
import KineticTypography from './KineticTypography';

const features = [
  {
    title: 'DISCOVER THE POWER',
    description: 'Unlock your true potential with state-of-the-art equipment designed for maximum muscle hypertrophy and endurance.',
    icon: 'assignment'
  },
  {
    title: 'DIET IS EVERYTHING',
    description: 'Customized nutrition plans crafted by elite dietitians to fuel your body, shred fat, and accelerate recovery.',
    icon: 'nutrition'
  },
  {
    title: 'TRAIN WITH ELITE',
    description: 'Learn directly from champion powerlifters and combat athletes who have proven themselves in the arena.',
    icon: 'fitness_center'
  },
  {
    title: 'YOUR HEALTH-YOUR WAY',
    description: 'Comprehensive tracking and personalized programming strictly tailored to your unique physiological baseline.',
    icon: 'monitor_heart'
  },
  {
    title: 'MASTER THE UPPER CUT',
    description: 'Professional striking coaches to sharpen your technique, speed, and devastating knockout power.',
    icon: 'sports_mma'
  },
  {
    title: 'FIRST CLASS MACHINES',
    description: 'Train on custom-built, competition-grade apparatus meticulously engineered for flawless biomechanics.',
    icon: 'settings_accessibility'
  }
];

const BecomeStronger = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="become-stronger">
      {/* Background Grit Texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-primary-container text-4xl mb-[-15px] block transform -rotate-2"
          >
            How you can
          </motion.span>
          <KineticTypography 
            text="#BECOMESTRONGER"
            className="font-condensed text-5xl md:text-8xl text-black uppercase italic tracking-tighter"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-6 group"
            >
              {/* Torn Edge Icon Box */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 bg-primary-container flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300" 
                     style={{ clipPath: 'polygon(100% 0, 100% 100%, 15% 100%, 0 85%, 0 15%, 15% 0)' }}>
                  <span className="material-symbols-outlined text-3xl font-light">
                    {feature.icon}
                  </span>
                </div>
                {/* Secondary Layer for Brutalist Depth */}
                <div className="absolute -bottom-1 -right-1 w-14 h-14 border border-black/10 -z-10"
                     style={{ clipPath: 'polygon(100% 0, 100% 100%, 15% 100%, 0 85%, 0 15%, 15% 0)' }}></div>
              </div>

              <div>
                <h3 className="font-condensed text-xl text-black uppercase italic mb-2 tracking-tight group-hover:text-primary-container transition-colors">
                  {feature.title}
                </h3>
                <p className="font-body text-secondary text-sm leading-relaxed max-w-[250px]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BecomeStronger;
