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
  headline: "Full-Stack Engineer & Security Engineer",
  phone: "+1 (778) 522-6547",
  email: "dmytroslootskyi@gmail.com",
  linkedin: "https://linkedin.com/in/dmytro-slootskyi",
  website: "https://dmytro-s-portfolio.vercel.app",

  summary: [
    "Full-Stack Engineer & Security Engineer with 5+ years of experience architecting secure, scalable backend systems (TypeScript, JavaScript, Python, AWS).",
    "Specializing in integrating robust security protocols into CI/CD pipelines, high-velocity feature delivery and robust application security.",
    "Experience in high-stakes incident response and data recovery, complemented by a Master’s degree in Automation and advanced Security certifications and deep technical expertise in AI.",
  ],

  skills: {
    backend: [
      "Python",
      "TypeScript (Node.js, NestJS, Next.js)",
      "JavaScript (ES7+)",
      "REST APIs",
      "GraphQL",
      "Solidity",
      "SQL",
      "Microservices",
      "gRPC",
      "n8n",
      "OpenClaw",
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
      "Metasploit",
      "Burp Suite",
      "Nmap",
      "Hydra",
      "Wireshark",
      "Gobuster",
      "Splunk",
    ],
    aiData: [
      "LLM API Integration (OpenAI)",
      "AI Fundamentals",
      "Data Analytics",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Redis",
      "RabbitMQ",
      "AWS IoT Core",
    ],
    projectManagement: [
      "Agile",
      "Waterfall",
      "Scrum",
      "Kanban",
      "Trello",
      "Gantt Charts",
      "Jira",
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
      company: "AstroNatal Bot",
      position: "Founder & Lead Full-Stack Engineer (Startup)",
      period: "Dec 2025 — Present",
      highlights: [
        "Built and launched an AI-powered astrology platform from scratch, owning 100% of product development, UX/UI, and go-to-market strategy.",
        "Increased user engagement with personalized AI readings, achieving +45% average session duration and 28% 30-day retention.",
        "Reduced operational workload by ~10 hours/week by automating content generation and user interactions with AI.",
        "Designed scalable architecture supporting 1,000+ monthly active users with <1% downtime.",
      ],
    },
    {
      company: "ProBuy Inc.",
      position: "CTO, Software Technical Lead",
      period: "Sep 2024 — Nov 2025",
      highlights: [
        "Reduced API latency by 30% by implementing Redis caching.",
        "Led a team of 3 developers.",
        "Designed and implemented 100+ secure REST APIs.",
        "Managed production stability at 99.9%.",
        "Developed IoT systems and AWS-based infrastructure.",
      ],
    },
    {
      company: "CTDI",
      position: "Technical Specialist",
      period: "Nov 2023 — Apr 2024",
      highlights: [
        "Tested 180+ network devices per shift.",
        "Maintained 100%+ production targets.",
        "Improved product reliability by identifying defects.",
      ],
    },
    {
      company: "Deca4 Advisory",
      position: "IT Analyst & Full-Stack Developer",
      period: "Dec 2021 — Nov 2023",
      highlights: [
        "Restored ~100K corrupted records after cyber incident.",
        "Automated workflows reducing manual work by 70%.",
        "Maintained 99.9% uptime and improved response time.",
      ],
    },
    {
      company: "Ug Auto Trans",
      position: "Technology Analyst & Developer",
      period: "Feb 2020 — Nov 2021",
      highlights: [
        "Built CRM system boosting throughput by 400%.",
        "Automated data pipelines reducing manual effort by 85%.",
      ],
    },
    {
      company: "https://www.ctrs.com.ua",
      position: "Coach in Computer Science and Robotics",
      period: "Apr 2017 — Jan 2020",
      highlights: [
        "Designed and delivered educational programs in programming and computer science, conducting 5,000+ instructional sessions.",
        "Maintained an exceptional 99.5% average client satisfaction rating, consistently delivering high-quality training outcomes.",
      ],
    },
    {
      company: "Odessa National Academy",
      position: "Mechatronics and Robotics Engineer",
      period: "Apr 2015 — Mar 2017",
      highlights: [
        "Led design and development of pneumatic and autonomous robotic systems, improving operational precision and reliability.",
        "Developed 1 pneumatic robot.",
        "Implemented ESP32-based sensor arrays to enhance accuracy of laboratory results.",
        "Conducted in-depth data analysis and presented insights through clear visualizations (charts and graphs) to support decision-making.",
      ],
    },
  ] satisfies ProfileExperience[],

  education: [
    "Odessa National Maritime University — PhD Computer Science (Sept. 2018 — 2030)",
    "NPower Project Management (Dec. 2025)",
    "NPower Junior Data Analyst Program (Mar. 2024)",
    "Hillel IT School — Full-Stack Web Development (May 2020)",
    "Odessa National Academy — Master’s in Mechatronics (Mar. 2018)",
  ],

  certifications: [
    "Microsoft Azure AI Fundamentals (2024)",
    "IBM Data Analyst Professional Certificate (2024)",
    "Google Project Management (2025)",
    "Cyber Security 101 Certificate (2026)",
    "Web Security Fundamentals Certificate (2026)",
    "Jr Penetration Tester Certificate (2026)",
  ],
} as const;
