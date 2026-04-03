import { motion } from "motion/react";

const services = [
  {
    title: "General Dentistry",
    description: "Routine check-ups, cleanings, and fillings to keep your teeth healthy and strong.",
    icon: "01",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers for a radiant, confident look.",
    icon: "02",
  },
  {
    title: "Orthodontics",
    description: "Braces and clear aligners to straighten your teeth perfectly over time.",
    icon: "03",
  },
  {
    title: "Oral Surgery",
    description: "Safe and painless extractions, including wisdom teeth removal, by our experts.",
    icon: "04",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-bg text-brand-text px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="text-brand-primary uppercase tracking-widest text-sm font-semibold mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-2xl">
              Comprehensive care for a lasting smile.
            </h2>
          </motion.div>
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block border border-brand-text text-brand-text px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-brand-text hover:text-brand-bg transition-colors duration-300"
          >
            View All Services
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <span className="text-brand-accent font-serif text-3xl mb-6 opacity-50">{service.icon}</span>
              <h3 className="text-xl font-serif font-medium mb-4">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed flex-1">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
