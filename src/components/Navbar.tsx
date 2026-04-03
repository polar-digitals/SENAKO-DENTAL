import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center">
      {/* Logo */}
      <a href="/" className="flex items-center z-50">
        <img src="/logo.svg" alt="Senako Logo" className="h-8 md:h-10 w-auto" />
      </a>

      {/* Desktop Nav */}
      <div className="hidden lg:flex space-x-8 text-sm uppercase tracking-widest font-medium items-center">
        <a href="/#about" className="hover:text-brand-primary transition-colors">About</a>
        <a href="/#services" className="hover:text-brand-primary transition-colors">Services</a>
        <a href="/#transformations" className="hover:text-brand-primary transition-colors">Transformations</a>
        <a href="/#contact" className="hover:text-brand-primary transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4 z-50">
        {/* CTA Right Side */}
        <Link 
          to="/booking"
          className="bg-brand-primary text-white px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-sm uppercase tracking-widest font-medium hover:bg-brand-accent transition-colors duration-300"
        >
          Book Appointment
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-bg shadow-lg py-6 px-6 flex flex-col space-y-6 text-center md:hidden border-t border-gray-200"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest hover:text-brand-primary">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest hover:text-brand-primary">Services</a>
          <a href="#transformations" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest hover:text-brand-primary">Transformations</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest hover:text-brand-primary">Contact</a>
        </motion.div>
      )}
    </nav>
  );
}
