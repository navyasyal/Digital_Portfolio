import Section from "./Section.jsx";
import Card from "./Card.jsx";
import Badge from "./Badge.jsx";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Card>
        <div className="grid two">
          <div>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Reach me</div>
            <div style={{ color: "var(--muted)", lineHeight: 1.9 }}>
              <div>✉️ {profile.email}</div>
              <div>📞 {profile.phone}</div>

              <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn primary" href={`mailto:${profile.email}`}>Email</a>
                <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Quick message</div>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: 10 }}>
              Hi, I’m {profile.name}. I’m actively seeking a Cyber Security/SOC internship and can share my portfolio and projects
              related to monitoring, security, and digital forensics. I’d love to connect.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}