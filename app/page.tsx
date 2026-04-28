"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";

export default function Home() {
  // --- Mandatory fixes for modern frontend development ---

  // 1. Prevent browser from automatically restoring scroll position
  // and force it to start at the absolute top on every refresh.
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // --- Animation configurations for Framer Motion ---

  // Generic container variants to stagger the appearance of children elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }, // Sequential animation
    },
  };

  // Variants for elements with y-axis movement
  const elementVariantsY: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for elements with scale animation
  const elementVariantsScale: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-[#050505]">
      {/* --- HERO SECTION ---
        Switched to a Split Screen layout for desktop (using CSS Grid)
        for a more professional, hierarchical design.
      */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center p-8 pt-32 pb-16 relative overflow-hidden max-w-7xl mx-auto">
        {/* Animated Background Glow - shifted slightly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-neutral-800/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none"
        />

        {/* --- LEFT SIDE: Larger Profile Image ---
          Centered on mobile, left-aligned on desktop.
        */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={elementVariantsScale}
          className="relative flex flex-col items-center justify-center md:items-start md:justify-start"
        >
          {/* Subtle background glow for the image itself */}
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-125 md:scale-150" />

          <Image
            src="/profile.jpg"
            alt={`${profile.name} — ${profile.headline}`}
            width={320}
            height={320}
            priority // Load immediately for better performance (LCP)
            className="rounded-full relative z-10 object-cover border-2 border-white/10 shadow-2xl scale-110 md:scale-100"
          />
        </motion.div>

        {/* --- RIGHT SIDE: Text Content & Call to Action ---
          Centered on mobile, Left-aligned on desktop.
        */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="z-10 text-center md:text-left flex flex-col items-center md:items-start"
        >
          {/* Main Heading (Name) */}
          <motion.h1
            variants={elementVariantsY}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase mb-6 text-white leading-tight"
          >
            {profile.name}
          </motion.h1>

          {/* Subheading (Role & Value Proposition) */}
          <motion.div
            variants={elementVariantsY}
            className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mb-12"
          >
            <p className="text-white">{profile.headline}</p>
            {profile.summary.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>

          {/* Call to Action Button */}
          {/* <motion.div variants={elementVariantsY}>
            <Link
              href="#projects"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors inline-block"
            >
              View Selected Impact
            </Link>
          </motion.div> */}
        </motion.div>
      </section>

      {/* --- Rest of the sections flow naturally below --- */}

      {/* PROJECTS SECTION */}
      {/* <Projects /> */}

      {/* EXPERIENCE SECTION */}
      <Experience />
      <Footer />
    </main>
  );
}
