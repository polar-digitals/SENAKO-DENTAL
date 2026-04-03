import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-text text-brand-bg py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:col-span-2"
        >
          <div className="mb-6">
            <img src="/logo.svg" alt="Senako Logo" className="h-10 md:h-12 w-auto" />
          </div>
          <p className="text-gray-400 font-light leading-relaxed max-w-sm mb-8">
            A new standard of dental care in Addis Ababa. We combine advanced technology with a gentle touch.
          </p>
          <Link 
            to="/booking"
            className="inline-block bg-brand-primary text-white px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-brand-accent transition-colors duration-300"
          >
            Book Appointment
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <h4 className="text-lg font-serif mb-6 text-white">Location</h4>
          <p className="text-gray-400 font-light leading-relaxed">
            Meskel Flower,<br />
            Addis Ababa,<br />
            Ethiopia
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col"
        >
          <h4 className="text-lg font-serif mb-6 text-white">Contact</h4>
          <a href="tel:+251935207720" className="text-gray-400 font-light leading-relaxed hover:text-brand-primary transition-colors mb-2">
            +251 935 207 720
          </a>
          <a href="mailto:info@senakodental.com" className="text-gray-400 font-light leading-relaxed hover:text-brand-primary transition-colors">
            info@senakodental.com
          </a>
        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
        <p>&copy; {new Date().getFullYear()} Senako Specialty Dental Clinic. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 items-center">
          <Link to="/staff" className="hover:text-brand-primary transition-colors">Staff Portal</Link>
          <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
