"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-4xl mx-auto px-8 py-12 md:py-24 relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-white/20 rounded-full" />
      </motion.div>

      {/* Timeline Container */}
      <div className="relative border-l border-white/10 ml-3 md:ml-4">
        {profile.experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12 ml-8 md:ml-12 relative group"
          >
            {/* Glowing Dot on the timeline */}
            <span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-neutral-500 group-hover:border-white group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

            {/* Content */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">
                {item.position}
              </h3>
              <span className="text-sm font-medium text-neutral-500 mt-1 md:mt-0">
                {item.period}
              </span>
            </div>

            <h4 className="text-lg font-medium text-neutral-400 mb-4">
              {item.company}
            </h4>

            <ul className="text-neutral-400 font-light leading-relaxed space-y-2 list-disc pl-5">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
