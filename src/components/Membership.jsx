import React from 'react';
import { motion } from 'framer-motion';
import KineticTypography from './KineticTypography';
import MagneticButton from './MagneticButton';
import OptimizedImage from './OptimizedImage';
import { useModal } from '../context/ModalContext';
import { membershipPlans } from '../data/membershipPlans';

const Membership = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-black text-white overflow-hidden" id="membership">
      <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
        <div className="flex justify-between items-center border-b border-white/20 pb-8 mb-12">
          <KineticTypography 
            text="CHOOSE YOUR MEMBERSHIP"
            className="font-condensed text-4xl md:text-5xl text-white uppercase italic tracking-tighter"
            justifyClass="justify-start"
          />
          <MagneticButton onClick={openModal} className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform join-target">
            <span className="material-symbols-outlined text-white rotate-[-45deg] pointer-events-none">arrow_forward</span>
          </MagneticButton>
        </div>

        {/* Pricing List */}
        <div className="flex flex-col gap-2 mb-20">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 transition-colors cursor-pointer join-target ${plan.isPopular ? 'bg-white/5 border-y border-white/10' : 'hover:bg-white/5'}`}
            >
              <div className="relative">
                <span className="font-condensed text-7xl md:text-8xl text-primary-container italic font-bold leading-none">
                  {plan.price}
                </span>
                {plan.isPopular && (
                  <div className="absolute -top-4 -right-4 w-12 h-12 border border-primary-container rounded-full flex items-center justify-center">
                    <span className="text-[8px] text-primary-container font-body font-bold uppercase text-center leading-tight">Most<br/>Popular</span>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-condensed text-xl md:text-2xl text-white uppercase italic mb-2 tracking-widest">{plan.title}</h3>
                <p className="font-body text-white/50 text-xs md:text-sm uppercase tracking-wider leading-relaxed">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-12 md:p-20 relative mb-24 border border-white/10"
        >
          <span className="material-symbols-outlined text-primary-container text-6xl absolute top-8 left-8 opacity-30">format_quote</span>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="font-condensed text-2xl md:text-4xl text-white uppercase italic leading-tight mb-8 tracking-tight">
              "YOU'LL NEVER CHANGE YOUR LIFE UNTIL YOU CHANGE SOMETHING YOU DO DAILY. THE SECRET OF YOUR SUCCESS IS FOUND IN YOUR DAILY ROUTINE"
            </p>
            <div className="w-12 h-[2px] bg-primary-container mx-auto mb-4"></div>
            <span className="font-body text-xs md:text-sm text-white/60 uppercase tracking-[0.4em]">John C. Maxwell</span>
          </div>
          <span className="material-symbols-outlined text-primary-container text-6xl absolute bottom-8 right-8 opacity-30 rotate-180">format_quote</span>
        </motion.div>

        {/* Bottom CTA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CTA 1 */}
          <motion.div
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.8, 0, 0.2, 1] }}
            className="relative h-[350px] overflow-hidden group cursor-pointer border-4 border-primary-container join-target"
            onClick={openModal}
          >
            <OptimizedImage 
              src="/assets/images/class-powerlifting.webp"
              fallback="/assets/images/class-powerlifting.jpg"
              alt="Membership"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-primary-container/20 group-hover:bg-primary-container/40 transition-colors"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <span className="font-body text-[10px] text-white/80 uppercase tracking-widest mb-2 block">Membership</span>
              <h4 className="font-condensed text-3xl md:text-4xl text-white uppercase italic leading-none mb-4">Join Membership Now<br/>And Get 40% Off!</h4>
              <p className="font-body text-white/60 text-[10px] uppercase tracking-wider mb-6">UNLOCK EXCLUSIVE ACCESS TO PREMIUM COACHING AND NUTRITION GUIDES.</p>
              <div className="w-10 h-10 bg-white flex items-center justify-center rotate-45 self-start group-hover:bg-primary-container group-hover:scale-110 transition-all pointer-events-none">
                <span className="material-symbols-outlined text-black -rotate-45 text-sm group-hover:text-white">arrow_forward</span>
              </div>
            </div>
          </motion.div>

          {/* CTA 2 */}
          <motion.div
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.8, 0, 0.2, 1], delay: 0.2 }}
            className="relative h-[350px] overflow-hidden group cursor-pointer border-4 border-white view-target"
          >
            <OptimizedImage 
              src="/assets/images/class-combat.webp"
              fallback="/assets/images/class-combat.jpg"
              alt="Opening Hours"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <span className="font-body text-[10px] text-white/80 uppercase tracking-widest mb-2 block">Opening Hours</span>
              <h4 className="font-condensed text-3xl md:text-4xl text-white uppercase italic leading-none mb-4">Check Our Classes'<br/>Opening Hours!</h4>
              <p className="font-body text-white/60 text-[10px] uppercase tracking-wider mb-6">MON - SAT: 7:00 - 22:00 | SUN: 10:00 - 14:00</p>
              <div className="w-10 h-10 bg-white flex items-center justify-center rotate-45 self-start group-hover:bg-primary-container group-hover:scale-110 transition-all pointer-events-none">
                <span className="material-symbols-outlined text-black -rotate-45 text-sm group-hover:text-white">schedule</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
