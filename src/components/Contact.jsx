import Section from "./Section.jsx";
import Badge from "./Badge.jsx";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      compact={true}
    >
      <div style={{ display: "grid", gap: 18 }}>
        <div>
          <div style={{ fontWeight: 900, marginBottom: 10, fontSize: 18 }}>
            Reach me
          </div>

          <div style={{ color: "var(--muted)", lineHeight: 1.9 }}>
            <div>✉️ {profile.email}</div>
            <div>📞 {profile.phone}</div>
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn primary" href={`mailto:${profile.email}`}>Email</a>
            <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 900, marginBottom: 8, fontSize: 18 }}>
            Quick message
          </div>

          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: 10, marginBottom: 0 }}>
            Hi, I’m {profile.name}. I’m currently looking for a Cyber Security or SOC internship and would love to connect.
          </p>
        </div>
      </div>
    </Section>
  );
}