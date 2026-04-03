import { motion } from "motion/react";

const testimonials = [
  {
    quote: "The best dental experience I've ever had. The staff is incredibly kind and professional.",
    author: "Sarah M."
  },
  {
    quote: "I finally have the smile I always wanted. Thank you, Senako Dental!",
    author: "David T."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white text-brand-text px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary uppercase tracking-widest text-sm font-semibold mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            What Our Patients Say.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-brand-bg p-12 border border-gray-100 flex flex-col items-center text-center relative"
            >
              <span className="text-brand-primary text-6xl font-serif absolute top-4 left-8 opacity-20">"</span>
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 italic text-gray-800 relative z-10">
                {item.quote}
              </p>
              <div className="w-12 h-[1px] bg-brand-accent mb-6"></div>
              <span className="text-sm uppercase tracking-widest font-medium text-brand-accent">{item.author}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
