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
  { k: "Technologies", v: "Splunk • Git/GitHub • Jenkins • Wireshark • Nmap • Wazuh • React • Node.js" },
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
    name: "Zero Trust Architecture with Hybrid Cloud",
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
    links: { "Github Repository": "https://github.com/navyasyal/zerotrust/tree/feature/zero_trust_final", demo: "" },
    tag: "Capstone"
  },
  {
    name: "FORENSIC-AI: Deepfake Video Detection for Digital Evidence",
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
    links: { repo: "" , report: "https://drive.google.com/file/d/1zEwQ-ksQRvBBJBRcDQruOuGbh0cZKzRv/view?usp=sharing" },
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
    links: { "Research Report": "https://drive.google.com/file/d/18oLKiYGJKduFdpdd4FBYIxML4H4M42Ux/view?usp=sharing", repo: "" },
    tag: "Research"
  },
  {
    name: "ATDAM: Adaptive Threat Detection & Automated Mitigation Framework",
    category: "Threat Detection Research",
    featured: false,
    role: "Research Study",
    impact:
      "Researched on a framework idea that combines detection methods and response steps.",
    bullets: [
      "Studied signature vs anomaly detection",
      "Outlined response workflow",
      "Added severity/priority idea"
    ],
    tech: ["Threat Detection", "Security Architecture"],
    links: { "Research Paper": "https://drive.google.com/file/d/1-Z1-Fykfle-07-NZvyJmThlMiSDMjY6X/view?usp=sharing", repo: "" },
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
    links: { repo: "", "Presentation": "https://drive.google.com/file/d/1lg4c7FH_ZwTveKvM_RB78k9PIR7Wzqqn/view?usp=sharing" },
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
  },
  {
    name: "SOC Simulation",
    org: "TryHackMe",
    year: "2026",
    link: "https://tryhackme.com/soc-sim/public-summary/6995f10149d49142cbfab7960fd6f9b9e9dda7728ac61b167c535cfdea957962f79755da6a084293323db7cfbfe2cdc0",
    details: [
      "Completed SOC simulation involving real-world alert triage and investigation",
      "Analyzed security alerts and identified true vs false positives",
      "Worked with SIEM tools to investigate logs and suspicious activity",
      "Documented findings through structured case reports"
    ]
  },
  {
  name: "Endpoint Security",
  org: "Cisco Networking Academy",
  year: "2026",
  link: "/certificates/cisco-endpoint.pdf",
  details: [
    "Learned endpoint protection and security fundamentals",
    "Covered malware, attacks, and system protection techniques"
  ]
},
{
  name: "CyberSecurity Threat Management",
  org: "Cisco Networking Academy",
  year: "2026",
  link: "/certificates/cisco-threat-management.pdf",
  details: [
    "Learned threat detection, attack vectors, and incident response basics",
    "Built foundation in SOC operations and cybersecurity risk management"
  ]
}
];

export const selfProjects = [
  {
    title: "Linux Log Analysis & Brute Force Detection",
    link: "https://github.com/navyasyal/linux-log-analysis",
    points: [
      "Simulated a brute force attack using failed SSH login attempts",
      "Analyzed logs using journalctl to detect authentication failures",
      "Identified attacker IP and analyzed login patterns",
    ],
    tech: ["Linux", "Log Analysis", "SSH", "Journalctl"]
  },

  {
    title: "SIEM-Based SOC Lab using Wazuh",
    link: "https://github.com/navyasyal/wazuh-siem-soc-project",
    points: [
      "Built a SIEM-based SOC lab using Wazuh with multi-VM setup",
      "Generated and analyzed security logs",
      "Simulated brute-force attacks and detected login failures",
      "Performed privilege escalation testing and analyzed alerts",
      "Monitored real-time log ingestion and correlation",
      "Configured syslog and auth.log collection",
      "Identified attack patterns through analysis"
    ],
    tech: ["Wazuh", "SIEM", "Linux", "SOC Monitoring"]
  },

  {
    title: "Splunk Log Analysis & Security Monitoring",
    link: "https://github.com/navyasyal/Splunk_Log_Analysis",
    points: [
      "Built a SIEM dashboard using Splunk to analyze Windows Event Logs",
      "Created SPL queries to detect failed logins and suspicious activity",
      "Identified brute-force attack patterns from login behavior",
      "Monitored privileged account activity and unusual access",
      "Designed dashboards to visualize security trends",
      "Optimized SPL queries for better performance"
    ],
    tech: ["Splunk", "SIEM", "Windows Logs", "SPL"]
  },

    {
    title: "Threat Detection using Kali Linux",
    link: "https://github.com/navyasyal/kali-threat-detection",
    points: [
      "Simulated real-world cyber attack techniques and mapped them to MITRE ATT&CK",
      "Detected SSH brute force attacks by analyzing authentication logs using journalctl",
      "Monitored and analyzed command execution activity using auditd logs",
      "Identified persistence mechanisms through cron job creation and monitoring",
      "Detected access to sensitive files (e.g., /etc/shadow) indicating potential credential theft"
    ],
    tech: ["MITRE ATT&CK", "Linux Logs", "Journalctl", "auditd"]
  }
];