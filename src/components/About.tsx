import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white text-brand-text px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative"
        >
          <img 
            src="/About Us.png" 
            alt="About Senako Specialty Dental Clinic" 
            className="w-full h-auto shadow-lg"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-primary -z-10"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <span className="text-brand-primary uppercase tracking-widest text-sm font-semibold mb-4">About Us</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Your smile is your best feature.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
            Located in the heart of Addis Ababa at Meskel Flower, Senako Specialty Dental Clinic is designed to provide a relaxing and professional environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-light mb-10">
            Our team of expert dentists is dedicated to delivering personalized care tailored to your unique needs. We focus on both the health and beauty of your teeth, ensuring you leave our clinic with confidence.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-brand-accent"></div>
            <span className="text-brand-accent uppercase tracking-widest text-sm font-medium">Meskel Flower, Addis Ababa</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
