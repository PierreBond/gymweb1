import React from 'react';
import { motion } from 'framer-motion';
import KineticTypography from './KineticTypography';

const features = [
  {
    id: '01',
    title: 'Weightlifting & Cardio',
    description: 'Elite athletic conditioning combining heavy compound progressive resistance with metabolic conditioning for absolute strength gains.',
    icon: 'fitness_center'
  },
  {
    id: '02',
    title: 'Group Classes & Dance',
    description: 'High-intensity, community-driven sweat sessions designed to boost explosive endurance, core stability, and agility.',
    icon: 'groups'
  },
  {
    id: '03',
    title: 'Personal Coaching',
    description: 'Customized periodization programs, biomechanical assessments, and custom-tailored guidance from certified trainers.',
    icon: 'exercise'
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Why Choose Us Header */}
        <div className="text-center mb-16">
          <KineticTypography 
            text="Why Choose Us"
            className="font-condensed text-5xl md:text-6xl text-black uppercase italic mb-4"
          />
          <p className="font-body text-neutral-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
            Body fitness encompasses various aspects of physical health and well-being, involving a combination of exercise, nutrition, and lifestyle choices.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#F8F8F8] p-10 border-b-4 border-transparent hover:border-primary-container transition-all group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-white flex items-center justify-center rotate-45 shadow-sm group-hover:bg-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-black group-hover:text-white -rotate-45 text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <span className="font-condensed text-6xl text-black/5 uppercase italic font-bold">
                  {feature.id}
                </span>
              </div>
              <h3 className="font-condensed text-2xl text-black uppercase italic mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="font-body text-neutral-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
