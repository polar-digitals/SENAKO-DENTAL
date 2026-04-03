import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface Phase {
  label: string;
  labelColor: string;
  image: string;
  alt: string;
  grayscale?: boolean;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  phases: Phase[];
}

const cases: CaseStudy[] = [
  {
    title: "Full Mouth Rehabilitation",
    subtitle: "Dental Crowns & Veneers — Senako Specialty Dental Clinic",
    phases: [
      {
        label: "Before",
        labelColor: "bg-brand-text",
        image: "/before2.png",
        alt: "Before treatment – crowded and discoloured teeth",
        grayscale: true,
      },
      {
        label: "After",
        labelColor: "bg-brand-primary",
        image: "/after2.png",
        alt: "After treatment – perfect white smile",
        grayscale: false,
      },
    ],
  },
  {
    title: "Complete Smile Makeover",
    subtitle: "Custom Veneers — Senako Specialty Dental Clinic",
    phases: [
      {
        label: "Before",
        labelColor: "bg-brand-text",
        image: "/before.png",
        alt: "Before veneer treatment",
        grayscale: true,
      },
      {
        label: "After",
        labelColor: "bg-brand-primary",
        image: "/after.png",
        alt: "After veneer treatment – radiant new smile",
        grayscale: false,
      },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="transformations"
      className="bg-white text-brand-text py-20 md:py-28 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-primary uppercase tracking-widest text-sm font-semibold mb-3 block">
              Transformations
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Life-Changing<br />
              <span className="italic text-brand-accent">Transformations</span>
            </h2>
            <p className="text-gray-500 font-light mt-5 max-w-lg leading-relaxed text-base md:text-lg">
              See how our specialty dental treatments have helped real patients
              regain their confidence and improve their oral health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              to="/booking"
              className="text-sm text-brand-accent font-medium underline underline-offset-4 hover:text-brand-primary transition-colors whitespace-nowrap"
            >
              View All Cases →
            </Link>
          </motion.div>
        </div>

        {/* Case cards */}
        <div className="flex flex-col gap-8">
          {cases.map((c, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: ci * 0.12 }}
              className="bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100 shadow-sm p-4 md:p-6"
            >
              {/* Photos grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {c.phases.map((phase, pi) => (
                  <div
                    key={pi}
                    className="relative rounded-xl overflow-hidden bg-gray-200"
                    style={{ aspectRatio: "16/10" }}
                  >
                    <img
                      src={phase.image}
                      alt={phase.alt}
                      className={`w-full h-full object-cover object-center ${
                        phase.grayscale ? "grayscale" : ""
                      }`}
                    />
                    <span
                      className={`absolute top-3 left-3 ${phase.labelColor} text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md`}
                    >
                      {phase.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card label */}
              <div className="px-1">
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-brand-text mb-1">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm font-light">{c.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            to="/booking"
            className="inline-block bg-brand-primary text-white px-10 py-4 text-sm uppercase tracking-widest font-medium hover:bg-brand-accent transition-colors duration-300"
          >
            Book Your Transformation
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
