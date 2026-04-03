import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

const workingHours = [
  { day: "Monday",    hours: "8:30AM–6:00PM" },
  { day: "Tuesday",   hours: "8:30AM–6:00PM" },
  { day: "Wednesday", hours: "8:30AM–6:00PM" },
  { day: "Thursday",  hours: "8:30AM–6:00PM" },
  { day: "Friday",    hours: "8:30AM–6:00PM" },
  { day: "Saturday",  hours: "8:30AM–6:00PM" },
  { day: "Sunday",    hours: "8:30AM–6:00PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-bg text-brand-text">
      {/* ── Header ── */}
      <div className="py-16 md:py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-brand-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-5">
            Contact{" "}
            <span className="text-brand-accent italic">Our Team</span>
          </h2>
          <p className="text-gray-600 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Please feel free to contact us for any questions or concerns.
            Our team is always here to help.
          </p>
        </motion.div>
      </div>

      {/* ── Map + Hours panel ── */}
      <div className="relative w-full" style={{ minHeight: 560 }}>
        {/* Google Map — full width */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full h-[560px] md:h-[600px]"
        >
          <iframe
            title="Senako Specialty Dental Clinic"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.529!2d38.7629!3d9.0107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sMeskel%20Flower%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1680000000000!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Working Hours Card — overlays top-right on md+ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            w-full md:absolute md:top-0 md:right-0 md:bottom-0
            md:w-[380px] lg:w-[420px]
            bg-brand-accent text-white
            flex flex-col justify-between
            px-8 py-10
            shadow-2xl
          "
        >
          {/* Hours header */}
          <div>
            <h3 className="font-serif text-3xl font-semibold mb-1">
              Working Hours
            </h3>
            <p className="text-white/70 text-sm font-light mb-8">
              Check out our office hours to plan your visit.
            </p>

            {/* Day rows */}
            <div className="flex flex-col gap-3">
              {workingHours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="font-medium text-sm w-24 shrink-0">
                    {row.day}
                  </span>
                  <span className="text-white/80 text-sm tabular-nums">
                    {row.hours}
                  </span>
                  <Link
                    to="/booking"
                    className="
                      flex items-center gap-1.5
                      border border-white/40 text-white
                      px-3 py-1 text-[10px] uppercase tracking-widest font-bold
                      hover:bg-white hover:text-brand-accent
                      transition-colors duration-200 shrink-0
                    "
                  >
                    <Clock className="w-3 h-3" />
                    Book
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Flexible time CTA */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <h4 className="font-serif text-2xl font-semibold mb-4">
              Need Flexible Time?
            </h4>
            <Link
              to="/booking"
              className="
                inline-flex items-center gap-2
                border border-white/50 text-white
                px-6 py-3 text-xs uppercase tracking-widest font-bold
                hover:bg-white hover:text-brand-accent
                transition-colors duration-300 w-full justify-center
              "
            >
              Book an Appointment
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Info Cards ── */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-brand-primary" />
            </div>
            <h4 className="font-serif text-xl font-semibold">Address</h4>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              Meskel Flower,<br />
              Addis Ababa, Ethiopia
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-brand-primary" />
            </div>
            <h4 className="font-serif text-xl font-semibold">Book By Phone</h4>
            <a
              href="tel:+251935207720"
              className="text-gray-500 font-light text-sm hover:text-brand-primary transition-colors"
            >
              +251 935 207 720
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-brand-primary" />
            </div>
            <h4 className="font-serif text-xl font-semibold">Email Us</h4>
            <a
              href="mailto:info@senakodental.com"
              className="text-gray-500 font-light text-sm hover:text-brand-primary transition-colors"
            >
              info@senakodental.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
