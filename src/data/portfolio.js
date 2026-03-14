export const profile = {
  name: "Navya Syal",
  title: "Cybersecurity Student | SOC Internship",
  tagline:
   "I am currently learning SOC fundamentals and developing knowledge in security monitoring and digital forensics.",
  location: "Delhi, India",
  email: "navyaasyall@gmail.com",
  phone: "+91 9999511678",
  links: {
    github: "https://github.com/navyasyal",
    linkedin: "https://www.linkedin.com/in/navya-syal/",
    resume: "/resume.pdf"
  }
};

export const highlights = [
  { k: "Career Goal", v: "Aspiring Cybersecurity/SOC Analyst" },
  { k: "Core Strengths", v: "Problem Solving • Quick Learner • Team Collaboration" },
  { k: "Technologies", v: "Linux • Git/GitHub • Jenkins • Wireshark • Nmap • ELK Stack • MongoDB • React • Node.js" },
  { k: "Interests", v: "Threat Detection • Security Monitoring • Log Ananlysis" }
];

export const skills = [
  {
    group: "SOC Basics",
    items: ["Cloud Security","Log basics", "Alert triage (learning)", "Incident response flow (learning)", "MITRE ATT&CK (learning)"]
  },
  {
    group: "Security",
    items: ["Network basics", "OWASP basics", "Linux", "Shell basics"]
  },
  {
    group: "Development",
    items: ["React", "JavaScript", "Node/Express", "MongoDB", "SQL/MySQL", "HTML", "CSS",]
  },
  {
    group: "Tools",
    items: ["Git/GitHub", "Jenkins", "Postman", "VS Code", "Autopsy", "WireShark", "FTKImager"]
  }
];

export const positions = [
  {
    role: "President",
    org: "Agraga – The Management Society of NIIT University"
  },
  {
    role: "Member",
    org: "Student Affairs Committee (SAC)",
    desc: "Event Coordination and Student Welfare"
  }
];

export const projects = [
  {
    name: "Zero Trust Architecture with Hybrid Cloud (Ongoing)",
    category: "Security Architecture",
    featured: true,
    role: "Full-stack + security work",
    impact:
      "My Capstone project where I’m building a secure web application for Zero Trust Architecture with proper login and access control.",
    bullets: [
      "Added authentication and role-based access",
      "Focused on reducing unauthorized access",
      "Kept the project ready for CI/CD style deployment"
    ],
    tech: ["MERN Stack", "Authentication", "RBAC", "Jenkins", "Git/GitHub"],
    links: { repo: "", demo: "" },
    tag: "Capstone"
  },
  {
    name: "FORENSIC-AI: Deepfake Video Detection for Digital Evidence (Ongoing)",
    category: "Cybersecurity Research",
    featured: true,
    role: "R&D project",
    impact:
      "Working on a deepfake video detection project and trying to make it perform better on new/unseen data.",
    bullets: [
      "Studied different ways to detect deepfakes",
      "Focused on generalization (not only one dataset)",
      "Documented progress and results clearly"
    ],
    tech: ["Python", "Deep Learning (Concept)", "Forensics"],
    links: { report: "", repo: "" },
    tag: "R&D"
  },
  
  {
    name: "Career Counseling Management System",
    category: "Development",
    featured: false,
    role: "Database Management System Project",
    impact:
      "Built a system to store test results and generate basic career recommendations.",
    bullets: [
      "Designed database tables",
      "Implemented CRUD operations",
      "Generated recommendation outputs"
    ],
    tech: ["SQL", "MySQL", "Backend"],
    links: { repo: "" },
    tag: "Academic"
  },
  
  {
    name: "Multivariate Optimization (Lagrange Multipliers)",
    category: "Algorithms / Mathematics",
    featured: false,
    role: "Math + coding",
    impact:
      "Solved constrained optimization problems using Lagrange multipliers and SciPy.",
    bullets: ["Built constraint equations", "Solved using SciPy", "Checked outputs and constraints"],
    tech: ["Python", "SciPy"],
    links: { repo: "" },
    tag: "Academic"
  },
  {
    name: "Quantum Analysis of AES using Shannon’s Theory",
    category: "Cryptography Research",
    featured: false,
    role: "Research study",
    impact:
      "Studied AES security using Shannon theory concepts and basic quantum search idea (Grover).",
    bullets: ["Compared AES variants", "Reviewed entropy/redundancy concepts", "Wrote findings clearly"],
    tech: ["Cryptography", "Security Theory"],
    links: { paper: "", repo: "" },
    tag: "Research"
  },
  {
    name: "ATDAM: Adaptive Threat Detection & Automated Mitigation Framework",
    category: "Threat Detection Research",
    featured: false,
    role: "Research Study",
    impact:
      "Worked on a framework idea that combines detection methods and response steps.",
    bullets: [
      "Studied signature vs anomaly detection",
      "Outlined response workflow",
      "Added severity/priority idea"
    ],
    tech: ["Threat Detection", "Security Architecture"],
    links: { paper: "", repo: "" },
    tag: "Research"
  },
  {
    name: "Path-finding Algorithms for Pac-Man",
    category: "Algorithms",
    featured: false,
    role: "Algorithm comparison",
    impact:
      "Compared search algorithms like BFS, DFS and A* on maze problems.",
    bullets: ["Implemented A* with heuristic", "Compared efficiency", "Noted best results"],
    tech: ["Algorithms", "A*"],
    links: { repo: "" },
    tag: "Academic"
  }
];

export const certifications = [
  {
    name: "Cybersecurity Analyst Job Simulation",
    org: "Tata Consultancy Services (Forage)",
    year: "2024",
    link: "/certificates/tata-cybersecurity.pdf",
    details: [
      "Worked on Identity and Access Management (IAM)",
      "Learned IAM strategy and security best practices",
      "Created documentation and security recommendations"
    ]
  },
  {
    name: "Cybersecurity Job Simulation",
    org: "Mastercard (Forage)",
    year: "2024",
    link: "/certificates/mastercard-cybersecurity.pdf",
    details: [
      "Worked as an analyst in Mastercard's Security Awareness team",
      "Identified phishing threats",
      "Improved security training procedures"
    ]
  },
  {
    name: "Introduction to Cybersecurity",
    org: "IBM SkillsBuild",
    year: "2026",
    link: "/certificates/ibm-cybersecurity.pdf",
    details: [
      "Learned cybersecurity fundamentals",
      "Understood common cyber threats and defenses"
    ]
  }
];