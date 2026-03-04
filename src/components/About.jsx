import Section from "./Section.jsx";
import Card from "./Card.jsx";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
    >
      
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8 }}>
         I’m a cybersecurity student currently exploring different areas of
          defensive security and preparing for SOC and blue team roles. I’m
          interested in understanding how security incidents happen and how
          they can be detected and investigated. Through my coursework and
          projects, I’ve been learning about monitoring systems, analyzing
          logs, and understanding how security controls are implemented in
          real applications.
          I’m always looking for opportunities to keep learning, improve my
          technical skills, and gain hands-on experience. My goal is to grow
          into a role where I can contribute to security monitoring and
          incident response while continuing to build a strong foundation in
          cybersecurity.
        </p>
    </Section>
  );
}