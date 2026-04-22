export type ProfileLink = {
  label: string;
  href: string;
};

export type ProfileProject = {
  title: string;
  description: string;
  techStack: string[];
  links?: ProfileLink[];
};

export type ProfileExperience = {
  company: string;
  position: string;
  period: string;
  highlights: string[];
};

export const profile = {
  name: "Dmytro Slootskyi",
  headline: "Security Engineer / Full-Stack Developer",
  location: "Vancouver, BC (Remote-friendly)",
  phone: "1-778-522-6547",
  email: "dmytroslootskyi@gmail.com",
  linkedin: "https://linkedin.com/in/dmytro-slootskyi",

  summary: [
    "Performance-driven engineer with 5+ years of experience architecting secure, scalable backend systems (TypeScript, JavaScript, Python, AWS).",
    "Expert at balancing high-velocity feature delivery with robust application security—especially under production pressure.",
    "Proven track record in incident response and data recovery, backed by a Master’s degree in Automation and advanced security + AI certifications.",
  ],

  skills: {
    backend: [
      "Python",
      "TypeScript (Node.js, NestJS, Next.js)",
      "JavaScript",
      "REST APIs",
      "GraphQL",
      "SQL",
      "Microservices",
      "gRPC",
      "n8n",
      "openClaw",
    ],
    cloudSecurity: [
      "AWS IAM",
      "AWS Secrets Manager",
      "VPC Security Groups",
      "EC2",
      "S3",
      "Docker",
      "Kubernetes",
    ],
    securityTools: [
      "Snyk",
      "SonarQube",
      "OWASP ZAP",
      "Incident Response",
      "Vulnerability Assessment",
    ],
    aiData: ["LLM API Integration (OpenAI)", "AI Fundamentals", "Data Analytics"],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "AWS IoT Core",
    ],
  },

  projects: [
    {
      title: "B2B SaaS Platform (Greenfield)",
      description:
        "Architected and launched a B2B SaaS platform from scratch, focusing on secure APIs, performance, and operability in early production.",
      techStack: ["TypeScript", "Next.js", "Node.js", "React", "AWS", "Redis"],
    },
    {
      title: "Cyber Incident Data Recovery",
      description:
        "Led critical data recovery after a cyber incident, restoring ~100K corrupted records using custom Python reconstruction scripts.",
      techStack: ["Python", "Data Recovery", "Incident Response"],
    },
    {
      title: "Operational Automation & CRM",
      description:
        "Built internal systems and automation that eliminated data silos and reduced manual work dramatically across business workflows.",
      techStack: ["JavaScript", "Python", "Automation", "SQL"],
    },
  ] satisfies ProfileProject[],

  experience: [
    {
      company: "ProBuy Inc.",
      position: "Full-Stack Technical Lead",
      period: "Sep 2024 — Nov 2025",
      highlights: [
        "Architected and launched a comprehensive B2B SaaS platform from scratch using TypeScript (Next.js, Node.js, React) and AWS.",
        "Reduced API latency by 30% by implementing Redis caching for high-traffic endpoints.",
        "Led a cross-functional team of 3 developers through code reviews and architecture decisions.",
        "Designed and implemented 100+ secure REST endpoints with JWT-based authentication/authorization.",
        "Managed early-stage production for active testers while maintaining 99.9% stability.",
        "Developed circuits and Mbed software for a custom device linked to the project.",
      ],
    },
    {
      company: "Deca4 Advisory",
      position: "IT Analyst & Full-Stack Developer",
      period: "Dec 2021 — Nov 2023",
      highlights: [
        "Led critical data recovery following a cyber incident, restoring ~100K corrupted records via custom Python reconstruction scripts.",
        "Automated mission-critical data processing workflows, cutting manual overhead by 85%.",
        "Ran internal security training sessions to reduce exposure to social engineering and data breaches.",
        "Developed backend services and automation scripts using JavaScript and Python.",
      ],
    },
    {
      company: "UgAutoTrans",
      position: "Technology Analyst & Developer",
      period: "Feb 2020 — Nov 2021",
      highlights: [
        "Engineered an internal CRM system and automated document preparation for border service agencies.",
        "Streamlined workflows enabling 1 staff member to do work previously requiring 5 (4× throughput).",
        "Centralized regional logistics data to eliminate silos and speed up decision-making.",
      ],
    },
    {
      company: "Various",
      position: "IT Support & Technical Instructor",
      period: "2010 — 2020",
      highlights: [
        "Taught advanced programming, robotics, and data analysis while handling systems troubleshooting and support.",
      ],
    },
  ] satisfies ProfileExperience[],

  education: [
    "Master’s Degree in Automation and Computer-Integrated Technologies — Odessa National Academy",
    "Postgraduate Studies in Computer Science (In Progress)",
  ],

  certifications: [
    "Microsoft Azure AI Fundamentals",
    "IBM Data Analyst Professional Certificate",
    "Google Project Management",
    "Cyber Security 101 Certificate (tryhackme.com)",
    "Web Security Fundamentals Certificate (tryhackme.com)",
    "Jr Penetration Tester Certificate (tryhackme.com)",
  ],
} as const;

