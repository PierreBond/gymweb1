import React from 'react';
import { motion } from 'framer-motion';
import KineticTypography from './KineticTypography';

const features = [
  {
    id: '01',
    title: 'Group Workout',
    description: 'Involves resistance exercises using weight resistance band to build muscle strength increase metabolism.',
    icon: 'groups'
  },
  {
    id: '02',
    title: 'Personal Train',
    description: 'Involves resistance exercises using weight resistance band to build muscle strength increase metabolism.',
    icon: 'fitness_center'
  },
  {
    id: '03',
    title: 'Muscle Building',
    description: 'Involves resistance exercises using weight resistance band to build muscle strength increase metabolism.',
    icon: 'exercise'
  }
];

const WhyJoinUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Why Choose Us Header */}
        <div className="text-center mb-16">
          <KineticTypography 
            text="Why Choose Us"
            className="font-condensed text-5xl md:text-6xl text-black uppercase italic mb-4"
          />
          <p className="font-body text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
            Body fitness encompasses various aspects of physical health and well-being, involving a combination of exercise, nutrition, and lifestyle choices.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
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
              <p className="font-body text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Us / Roadmap Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 border-[12px] border-black p-4"
            >
              <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-black">
                <img 
                  src="/assets/images/about-man.jpg" 
                  alt="Training" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                />
              </div>
            </motion.div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-4 md:-right-10 z-20 bg-white border-4 border-black p-6 md:p-8 flex items-center gap-4 shadow-2xl"
            >
              <div className="text-primary-container font-condensed text-4xl md:text-5xl leading-none font-bold">10+</div>
              <div className="font-body text-[10px] md:text-xs uppercase tracking-widest leading-tight text-black">
                Years Of<br />Experience
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-container flex items-center justify-center rotate-45 ml-2">
                <span className="material-symbols-outlined text-white -rotate-45 text-sm md:text-base">verified</span>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-primary-container rotate-45 -z-10 opacity-20"></div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-primary-container"></div>
              <span className="font-body text-[10px] md:text-xs text-primary-container uppercase tracking-[0.4em] font-bold">About Us</span>
            </div>
            
            <KineticTypography 
              text="A Roadmap To Total Body Fitness"
              className="font-condensed text-4xl md:text-6xl text-black uppercase italic mb-8 leading-[0.9]"
              justifyClass="justify-start"
            />

            <p className="font-body text-secondary text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Body fitness encompasses various aspects of physical health and well-being, involving a combination of exercise, nutrition, and lifestyle choices. Achieving and maintaining optimal body fitness contributes to overall health, vitality. Joining fitness classes, sports teams, or workout groups provides social support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center text-white font-condensed text-xl italic font-bold shrink-0">01</div>
                <span className="font-condensed text-lg text-black uppercase italic tracking-wider group-hover:text-primary-container transition-colors">Fitness Training</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center text-white font-condensed text-xl italic font-bold shrink-0">02</div>
                <span className="font-condensed text-lg text-black uppercase italic tracking-wider group-hover:text-primary-container transition-colors">Regular Routine</span>
              </div>
            </div>

            <p className="font-body text-secondary text-xs italic mb-10 max-w-lg border-l-4 border-primary-container pl-4">
              Gradually increasing the intensity, duration, or complexity of exercises ensures ongoing improvements in strength, endurance, and overall fitness.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container text-white font-condensed text-xl px-10 py-4 uppercase italic tracking-widest self-start shadow-[0_10px_20px_rgba(217,4,41,0.2)]"
            >
              More About Us
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
