"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react"; // Generic icons still work fine in Lucide
import { FaLinkedin } from "react-icons/fa"; // Brand icons from react-icons/fa (FontAwesome)
import { profile } from "@/content/profile";

export default function Header() {
  // Animation configuration for a smooth dropdown effect
  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      // Fixed position, transparent dark background with a blur effect (glassmorphism)
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
    >
      {/* Brand / Logo */}
      <Link href="/" className="text-xl font-bold tracking-tighter text-white">
        {profile.name}
      </Link>

      {/* Main Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
        {/* Added '/' before '#' to ensure cross-page navigation works correctly */}
        <Link href="/#projects" className="hover:text-white transition-colors">
          Projects
        </Link>
        <Link
          href="/#experience"
          className="hover:text-white transition-colors"
        >
          Experience
        </Link>
      </nav>

      {/* Social Links & Contact */}
      <div className="flex items-center gap-5 text-neutral-400">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.header>
  );
}
