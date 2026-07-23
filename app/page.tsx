"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Shield, Terminal, Target, Award } from "lucide-react";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";

export default function Home() {
  const roles: string[] = [
    "Security Engineer",
    "Backend Software Engineer",
    "Penetration Tester",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const elementVariantsY: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const elementVariantsScale: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: Target, label: "TryHackMe", value: "Top 3%" },
    { icon: Terminal, label: "Rooms", value: "140+" },
    { icon: Award, label: "Streak", value: "215+ days" },
    { icon: Shield, label: "Uptime", value: "99.9%" },
  ];

  return (
    <main className="bg-[#050505]">
      <section className="min-h-screen relative overflow-hidden">
        {/* Cyber grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.015) 2px, rgba(16,185,129,0.015) 4px)",
          }}
        />

        {/* Animated glow — emerald/cyan cyber color */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[-20%] left-[-15%] w-[700px] h-[700px] bg-emerald-500/8 blur-[150px] rounded-full pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center p-8 pt-32 pb-16 max-w-7xl mx-auto relative z-10">
          {/* Profile image with cyber border */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={elementVariantsScale}
            className="relative flex flex-col items-center justify-center md:items-start md:justify-start"
          >
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full scale-125 md:scale-150" />

            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(16,185,129,0.15)",
                    "0 0 40px rgba(16,185,129,0.3)",
                    "0 0 20px rgba(16,185,129,0.15)",
                  ],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute -inset-1 bg-gradient-to-br from-emerald-500/30 via-transparent to-cyan-500/20 rounded-full"
              />
              <Image
                src="/profile.jpg"
                alt={`${profile.name} — ${profile.headline}`}
                width={320}
                height={320}
                priority
                className="rounded-full relative z-10 object-cover border-2 border-emerald-500/20 shadow-2xl scale-110 md:scale-100"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="z-10 text-center md:text-left flex flex-col items-center md:items-start"
          >
            {/* Terminal-style tag */}
            <motion.div
              variants={elementVariantsY}
              className="flex items-center gap-2 mb-4 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/15 rounded-full"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">
                Security-Focused Engineer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={elementVariantsY}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase mb-4 text-white leading-tight"
            >
              {profile.name}
            </motion.h1>

            {/* Headline with cycling roles */}
            <motion.div
              variants={elementVariantsY}
              className="flex items-center gap-2 mb-8 h-9 overflow-hidden"
            >
              <span className="text-emerald-400 font-mono text-lg shrink-0">
                $
              </span>
              <div className="relative h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-xl md:text-2xl font-mono text-emerald-400/90 whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2.5 h-6 bg-emerald-400 shrink-0"
              />
            </motion.div>

            {/* Summary — concise cyber style */}
            <motion.div
              variants={elementVariantsY}
              className="text-base md:text-lg text-neutral-400 font-light max-w-2xl mb-8 space-y-2"
            >
              {profile.summary.map((line) => (
                <p key={line} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>

            {/* Stats badges row */}
            <motion.div
              variants={elementVariantsY}
              className="flex flex-wrap gap-3 mb-10"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-emerald-500/20 transition-colors"
                >
                  <stat.icon className="w-4 h-4 text-emerald-400/70" />
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 font-mono uppercase">
                      {stat.label}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons with cyber style */}
            <motion.div
              variants={elementVariantsY}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href="#technologies"
                className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-colors inline-flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                View Tech Stack
              </Link>
              <a
                href="/Dmytro_S_Resume.pdf"
                download
                className="px-8 py-4 bg-transparent text-emerald-400 font-semibold rounded-full border border-emerald-500/25 hover:bg-emerald-500/10 transition-colors inline-block"
              >
                Download CV/Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Technologies />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
