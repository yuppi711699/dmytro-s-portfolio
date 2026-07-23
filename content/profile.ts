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

export type TechnologyItem = {
  name: string;
  icon: string;
};

export type TechnologyCategory = {
  label: string;
  items: TechnologyItem[];
};

export const profile = {
  name: "Dmytro Slootskyi",
  headline: "Backend Software Engineer",
  phone: "+1 (778) 522-6547",
  email: "dmytroslootskyi@gmail.com",
  linkedin: "https://linkedin.com/in/dmytro-slootskyi",
  website: "https://dmytro-s-portfolio.vercel.app",

  summary: [
    "Backend Software Engineer with 5+ years of experience designing secure, scalable cloud applications using Python, TypeScript, Node.js, AWS, Docker, and PostgreSQL.",
    "Experienced in implementing AWS IAM, VPC, EC2 hardening, KMS, S3 policies, CloudWatch, Security Groups, NACLs, Route53, Load Balancer, and Parameter Store.",
    "Ranked in the Top 3% on TryHackMe with hands-on experience in penetration testing, Active Directory security, vulnerability assessments, and secure software development.",
  ],

  skills: {
    programmingBackend: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "NestJS",
      "Express.js",
      "Next.js",
      "React",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "gRPC",
    ],
    cloudDevSecOps: [
      "AWS EC2",
      "IAM",
      "S3",
      "VPC",
      "KMS",
      "Parameter Store",
      "Secrets Manager",
      "Security Groups",
      "NACLs",
      "Route53",
      "Application Load Balancer",
      "CloudWatch",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Linux",
    ],
    applicationSecurity: [
      "Secure SDLC",
      "OWASP Top 10",
      "Threat Modeling",
      "JWT",
      "RBAC",
      "API Security",
      "Secure Code Review",
      "Dependency Scanning",
      "Secrets Management",
      "Least Privilege",
    ],
    offensiveSecurity: [
      "Kali Linux",
      "Burp Suite",
      "OWASP ZAP",
      "Nmap",
      "Metasploit",
      "Gobuster",
      "Hydra",
      "BloodHound",
      "CrackMapExec",
      "Hashcat",
      "John the Ripper",
      "Wireshark",
    ],
    vulnerabilityManagement: [
      "Nessus",
      "OpenVAS",
      "CVSS",
      "Risk Assessment",
      "Incident Response",
      "Splunk",
    ],
    databases: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "SQL"],
    frameworks: [
      "MITRE ATT&CK",
      "NIST CSF",
      "CIS Controls",
      "Zero Trust",
      "Defense in Depth",
      "STRIDE",
    ],
  },

  technologies: [
    {
      label: "Programming & Backend",
      items: [
        { name: "Python", icon: "SiPython" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "NestJS", icon: "SiNestjs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "React", icon: "SiReact" },
        { name: "GraphQL", icon: "SiGraphql" },
        { name: "Bash", icon: "SiGnubash" },
      ],
    },
    {
      label: "Cloud & Infrastructure",
      items: [
        { name: "AWS", icon: "SiAmazonwebservices" },
        { name: "EC2", icon: "SiAmazonec2" },
        { name: "S3", icon: "SiAmazons3" },
        { name: "IAM", icon: "SiAmazoniam" },
        { name: "Docker", icon: "SiDocker" },
        { name: "Kubernetes", icon: "SiKubernetes" },
        { name: "Nginx", icon: "SiNginx" },
        { name: "Linux", icon: "SiLinux" },
      ],
    },
    {
      label: "DevOps & CI/CD",
      items: [
        { name: "Git", icon: "SiGit" },
        { name: "GitHub", icon: "SiGithub" },
        { name: "GitHub Actions", icon: "SiGithubactions" },
        { name: "Terraform", icon: "SiTerraform" },
        { name: "Ansible", icon: "SiAnsible" },
        { name: "Grafana", icon: "SiGrafana" },
        { name: "Prometheus", icon: "SiPrometheus" },
      ],
    },
    {
      label: "Security & Offensive",
      items: [
        { name: "Kali Linux", icon: "SiKalilinux" },
        { name: "Burp Suite", icon: "SiBurpsuite" },
        { name: "OWASP", icon: "SiOwasp" },
        { name: "Wireshark", icon: "SiWireshark" },
        { name: "Metasploit", icon: "SiMetasploit" },
        { name: "Splunk", icon: "SiSplunk" },
        { name: "TryHackMe", icon: "SiTryhackme" },
        { name: "Snyk", icon: "SiSnyk" },
        { name: "SonarQube", icon: "SiSonarqube" },
        { name: "HackerOne", icon: "SiHackerone" },
      ],
    },
    {
      label: "Application Security",
      items: [
        { name: "JWT", icon: "SiJsonwebtokens" },
        { name: "Let's Encrypt", icon: "SiLetsencrypt" },
        { name: "HashiCorp", icon: "SiHashicorp" },
        { name: "OpenVPN", icon: "SiOpenvpn" },
      ],
    },
    {
      label: "Databases & Messaging",
      items: [
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "Redis", icon: "SiRedis" },
        { name: "RabbitMQ", icon: "SiRabbitmq" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "Elasticsearch", icon: "SiElasticsearch" },
      ],
    },
    {
      label: "API & Testing",
      items: [
        { name: "Postman", icon: "SiPostman" },
        { name: "Swagger", icon: "SiSwagger" },
        { name: "Insomnia", icon: "SiInsomnia" },
        { name: "Sentry", icon: "SiSentry" },
      ],
    },
  ] satisfies TechnologyCategory[],

  projects: [
    {
      title: "AI SaaS Platform — AstroNatal Bot",
      description:
        "Designed AI SaaS platform using TypeScript, Python, AWS and Docker. Architecture supporting 1,263 MAU with 99%+ availability. Automated workflows saving 10+ hours/week.",
      techStack: ["TypeScript", "Python", "AWS", "Docker", "AI"],
    },
    {
      title: "Active Directory Security Lab",
      description:
        "Built Windows AD lab with Domain Controller, DNS, GPOs and domain users. Used BloodHound and CrackMapExec for enumeration. Practiced Kerberoasting, Pass-the-Hash and lateral movement.",
      techStack: ["Active Directory", "BloodHound", "CrackMapExec", "Kerberos"],
    },
    {
      title: "Web Application Security Testing",
      description:
        "Tested SQLi, XSS, IDOR, CSRF, Command Injection and Broken Authentication. 80+ attack scenarios using Burp Suite and OWASP ZAP.",
      techStack: ["Burp Suite", "OWASP ZAP", "OWASP Top 10"],
    },
    {
      title: "Vulnerability Assessment",
      description:
        "Assessed 100+ simulated hosts using Nmap, Nessus and OpenVAS. Prioritized remediation using CVSS scoring methodology.",
      techStack: ["Nmap", "Nessus", "OpenVAS", "CVSS"],
    },
    {
      title: "Cloud Security Implementation",
      description:
        "Implemented IAM, least privilege, Security Groups, NACLs, EC2 hardening, encrypted S3 buckets, CloudWatch and Parameter Store.",
      techStack: ["AWS", "IAM", "VPC", "CloudWatch", "S3"],
    },
    {
      title: "Cyber Incident Data Recovery",
      description:
        "Assisted recovery after a cybersecurity incident, restoring 100,000+ records. Research tech solutions for Sphera World, Tejouri, and DIFC.",
      techStack: ["Python", "Data Recovery", "Incident Response"],
    },
  ] satisfies ProfileProject[],

  experience: [
    {
      company: "AstroNatal Bot",
      position: "Security Engineer",
      period: "Dec 2025 — Present",
      highlights: [
        "Designed AI SaaS platform using TypeScript, Python, AWS and Docker.",
        "Designed architecture supporting 1,263 MAU with 99%+ availability.",
        "Automated workflows saving 10+ hours/week.",
      ],
    },
    {
      company: "ProBuy Inc.",
      position: "Lead Software Engineer",
      period: "Sep 2024 — Nov 2025",
      highlights: [
        "Designed 100+ REST APIs using NestJS and TypeScript.",
        "Implemented secure authentication following OWASP.",
        "Configured AWS IAM, Security Groups, VPC, EC2 hardening, KMS, S3 policies, Route53, ALB, CloudWatch and Parameter Store.",
        "Reduced API latency by 30% using Redis.",
        "Performed dependency scanning with Snyk.",
        "Led team of 3 developers.",
        "Maintained 99.9% production availability.",
      ],
    },
    {
      company: "CTDI",
      position: "Technical Specialist",
      period: "Nov 2023 — Apr 2024",
      highlights: [
        "Tested 180+ networking devices per shift.",
        "Maintained 100%+ production targets.",
      ],
    },
    {
      company: "Deca4 Advisory",
      position: "IT Analyst & Full-Stack Developer",
      period: "Dec 2021 — Nov 2023",
      highlights: [
        "Assisted recovery after a cybersecurity incident, restoring 100,000+ records.",
        "Research tech solutions for Sphera World, Tejouri, and Dubai International Financial Centre (DIFC).",
      ],
    },
    {
      company: "Ug Auto Trans",
      position: "Junior Software Developer",
      period: "Feb 2020 — Nov 2021",
      highlights: [
        "Built CRM from zero draft with document generation, auto email sends, and file automation scripts.",
        "Automated workflows reducing manual effort by 85% (total speed up process from 2h to 18 minutes).",
      ],
    },
  ] satisfies ProfileExperience[],

  tryhackme: {
    ranking: "Top 3% global ranking",
    rooms: "140+ completed rooms",
    streak: "215+ day learning streak",
    badges: "23 badges",
    paths: [
      "Pre Security",
      "Cyber Security 101",
      "Web Fundamentals",
      "Jr Penetration Tester",
    ],
    skills: [
      "Active Directory",
      "Privilege Escalation",
      "Web Exploitation",
      "Enumeration",
      "Password Attacks",
      "Incident Investigation",
    ],
  },

  education: ["Master degree of Automation and Computer Technologies"],

  certifications: [
    {
      name: "TryHackMe: Jr Penetration Tester",
      code: "THM-FEBJO1TGTD",
    },
    {
      name: "TryHackMe: Web Fundamentals",
      code: "THM-9BZDMIE0UT",
    },
    {
      name: "TryHackMe: Cyber Security 101",
      code: "THM-REKMTVLFXK",
    },
    {
      name: "Microsoft Azure AI Fundamentals",
      code: "6581388F4BB8D8BC",
    },
    {
      name: "IBM Data Analyst Professional Certificate",
      code: "",
    },
    {
      name: "Google Project Management",
      code: "VEVKDHMIK92D",
    },
  ],
} as const;
