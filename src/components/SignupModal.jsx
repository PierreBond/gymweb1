import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const SignupModal = () => {
  const { isModalOpen, closeModal: onClose } = useModal();
  const isOpen = isModalOpen;
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
        onClose();
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white border-[12px] border-primary-container p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.2 }}
                  className="material-symbols-outlined text-primary-container text-6xl mb-4"
                >
                  check_circle
                </motion.span>
                <h3 className="font-condensed text-3xl text-black uppercase italic mb-2">WELCOME TO THE ELITE</h3>
                <p className="text-black/60 font-body text-sm">Your transformation begins now. A coach will contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-condensed text-3xl text-black uppercase italic -skew-x-6">JOIN THE FORCE</h3>
                  <button onClick={onClose} className="text-black hover:text-primary-container transition-colors">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <p className="text-black/50 font-body text-[10px] mb-6 uppercase tracking-widest font-bold">Enter your details to start your journey.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-black uppercase mb-1 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-black/5 border ${errors.name ? 'border-primary-container' : 'border-black/20'} focus:border-primary-container outline-none px-4 py-3 text-black transition-colors font-body text-sm`}
                    />
                    {errors.name && <p className="text-primary-container text-[10px] mt-1 font-bold uppercase">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-black uppercase mb-1 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-black/5 border ${errors.email ? 'border-primary-container' : 'border-black/20'} focus:border-primary-container outline-none px-4 py-3 text-black transition-colors font-body text-sm`}
                    />
                    {errors.email && <p className="text-primary-container text-[10px] mt-1 font-bold uppercase">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-black uppercase mb-1 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-black/5 border ${errors.phone ? 'border-primary-container' : 'border-black/20'} focus:border-primary-container outline-none px-4 py-3 text-black transition-colors font-body text-sm`}
                    />
                    {errors.phone && <p className="text-primary-container text-[10px] mt-1 font-bold uppercase">{errors.phone}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-6 bg-black text-white font-condensed text-xl uppercase py-4 hover:bg-primary-container transition-all duration-300 active:scale-95 shadow-lg"
                  >
                    SUBMIT REGISTRATION
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;
