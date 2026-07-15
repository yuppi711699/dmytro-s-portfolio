"use client";

import { motion, Variants } from "framer-motion";
import { profile } from "@/content/profile";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiGraphql,
  SiGnubash,
  SiAmazonwebservices,
  SiAmazonec2,
  SiAmazons3,
  SiAmazoniam,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiLinux,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiGrafana,
  SiPrometheus,
  SiKalilinux,
  SiBurpsuite,
  SiOwasp,
  SiWireshark,
  SiMetasploit,
  SiSplunk,
  SiTryhackme,
  SiSnyk,
  SiSonarqube,
  SiHackerone,
  SiJsonwebtokens,
  SiLetsencrypt,
  SiHashicorp,
  SiOpenvpn,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiMysql,
  SiElasticsearch,
  SiPostman,
  SiSwagger,
  SiInsomnia,
  SiSentry,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiGraphql,
  SiGnubash,
  SiAmazonwebservices,
  SiAmazonec2,
  SiAmazons3,
  SiAmazoniam,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiLinux,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiGrafana,
  SiPrometheus,
  SiKalilinux,
  SiBurpsuite,
  SiOwasp,
  SiWireshark,
  SiMetasploit,
  SiSplunk,
  SiTryhackme,
  SiSnyk,
  SiSonarqube,
  SiHackerone,
  SiJsonwebtokens,
  SiLetsencrypt,
  SiHashicorp,
  SiOpenvpn,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiMysql,
  SiElasticsearch,
  SiPostman,
  SiSwagger,
  SiInsomnia,
  SiSentry,
};

export default function Technologies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="technologies"
      className="w-full max-w-5xl mx-auto px-8 py-12 md:py-24 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Technologies
        </h2>
        <div className="w-20 h-1 bg-white/20 rounded-full" />
      </motion.div>

      <div className="space-y-16">
        {profile.technologies.map((category) => (
          <div key={category.label}>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-neutral-400 mb-6 uppercase tracking-wider"
            >
              {category.label}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            >
              {category.items.map((tech) => {
                const Icon = iconMap[tech.icon];
                return (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/7 hover:border-white/15 transition-all duration-300 cursor-default"
                  >
                    {Icon ? (
                      <Icon className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                    ) : (
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-neutral-400">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300 text-center leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
