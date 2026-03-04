import React from "react";

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    borderRight: "1px solid rgba(255,255,255,0.1)",
    padding: "25px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
  },
  name: {
    color: "white",
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "5px",
  },
  role: {
    color: "#b8b8ff",
    fontSize: "14px",
    marginBottom: "30px",
  },
  navLink: {
    color: "#dcdcff",
    textDecoration: "none",
    padding: "10px 0",
    display: "block",
    fontSize: "15px",
    transition: "0.3s",
  },
  footer: {
    fontSize: "13px",
    color: "#aaa",
  },
};

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      
      {/* Top Section */}
      <div>
        <div style={styles.name}>Navya Syal</div>
        <div style={styles.role}>Cybersecurity Intern</div>

        <a href="#home" style={styles.navLink}>🏠 Home</a>
        <a href="#about" style={styles.navLink}>👩‍💻 About</a>
        <a href="#skills" style={styles.navLink}>🛠 Skills</a>
        <a href="#projects" style={styles.navLink}>🚀 Projects</a>
        <a href="#certifications" style={styles.navLink}>📜 Certifications</a>
        <a href="#contact" style={styles.navLink}>📬 Contact</a>
      </div>

      {/* Bottom Section */}
      <div style={styles.footer}>
        <div>✨ Open to Internships</div>
        <div>📍 India</div>
      </div>

    </div>
  );
}