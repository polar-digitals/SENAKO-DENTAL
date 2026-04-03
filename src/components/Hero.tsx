import { motion } from "motion/react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col bg-brand-bg overflow-hidden pt-20 md:pt-24">
      <Navbar />
      
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full gap-8 lg:gap-12 pb-8">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start justify-center text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-text leading-tight mb-4 md:mb-6">
            A New Standard of <span className="text-brand-primary italic">Dental Care.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-lg mb-6 md:mb-8 leading-relaxed font-light">
            Experience world-class dentistry at Senako Specialty Dental Clinic. We combine advanced technology with a gentle touch to give you a healthy, beautiful smile.
          </p>
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center whitespace-nowrap bg-brand-text text-brand-bg px-4 py-2.5 md:px-6 md:py-3 text-[10px] sm:text-xs uppercase tracking-widest font-medium hover:bg-brand-primary transition-colors duration-300"
            >
              Book Your Appointment
            </motion.a>
            <motion.a 
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center whitespace-nowrap border border-brand-text text-brand-text px-4 py-2.5 md:px-6 md:py-3 text-[10px] sm:text-xs uppercase tracking-widest font-medium hover:bg-brand-text hover:text-brand-bg transition-colors duration-300"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full h-[35vh] md:h-[45vh] lg:h-[60vh] relative"
        >
          <img 
            src="/Interior (hero image).png" 
            alt="Senako Specialty Dental Clinic Interior" 
            className="w-full h-full object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary opacity-10 -z-10 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-accent opacity-10 -z-10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
