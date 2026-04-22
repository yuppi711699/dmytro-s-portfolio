"use client";

import { motion, Variants } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { profile } from "@/content/profile";
import type { ProfileProject } from "@/content/profile";

export default function Projects() {
  // Animation for the container to stagger the appearance of children (cards)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card animation
      },
    },
  };

  // Animation for individual cards
  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-8 py-12 md:py-24"
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
          Selected Work
        </h2>
        <div className="w-20 h-1 bg-white/20 rounded-full" />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            // Glassmorphism styling with hover effects
            className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-neutral-300 bg-white/5 rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Section (Bottom of the card) */}
            {project.links?.length ? (
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const projectsData = profile.projects as ReadonlyArray<ProfileProject>;
