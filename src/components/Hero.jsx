import Card from "./Card.jsx";
import Badge from "./Badge.jsx";
import { profile, highlights } from "../data/portfolio.js";

export default function Hero() {
  return (
    <div className="container" style={{ padding: "54px 0 16px" }}>
      <div className="grid two" style={{ alignItems: "center" }}>

        {/* LEFT SIDE */}
        <div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Badge tone="accent">SOC Internship</Badge>
            <Badge tone="purple">Blue Team</Badge>
            <Badge tone="info">Learning-focused</Badge>
            <Badge tone="sunny">Quick learner</Badge>
          </div>

          <h1
            style={{
              margin: "14px 0 8px",
              fontSize: 46,
              letterSpacing: -0.6,
              lineHeight: 1.05
            }}
          >
            {profile.name}
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: 18,
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: 680
            }}
          >
            <span style={{ color: "var(--text)", fontWeight: 750 }}>
              {profile.title}
            </span>
            {" — "}
            {profile.tagline}
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a
              className="btn"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div
            style={{
              marginTop: 18,
              color: "var(--muted)",
              display: "flex",
              gap: 10,
              flexWrap: "wrap"
            }}
          >
            <span className="pill">📍 {profile.location}</span>
            <span className="pill">✉️ {profile.email}</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={{ display: "grid", gap: 18, justifyItems: "center" }}>

          {/* PHOTO WITH GLOW */}
          <div style={{ position: "relative", width: 240, height: 240 }}>

            {/* gradient glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at center, rgba(124,92,255,0.45), rgba(255,120,200,0.25), transparent)",
                filter: "blur(18px)"
              }}
            />

            {/* image */}
            <img
  src="/images/navya.jpg"
  alt="Navya Syal"
  style={{
    position: "relative",
    width: 240,
    height: 240,
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid rgba(255,255,255,0.18)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
    imageRendering: "auto"
  }}
/>
          </div>

          {/* RECRUITER SNAPSHOT */}
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10,
                flexWrap: "wrap"
              }}
            >
              <div>
                <div style={{ fontWeight: 850, fontSize: 16 }}>
                  Recruiter snapshot
                </div>
              </div>

              <Badge tone="accent">Open to internship</Badge>
            </div>

            <hr className="sep" />

            <div className="grid" style={{ gap: 10 }}>
              {highlights.map((h) => (
                <div
                  key={h.k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: 12,
                    borderRadius: 16,
                    border: "1px solid var(--border)",
                    background: "rgba(0,0,0,0.16)"
                  }}
                >
                  <div style={{ color: "var(--muted)" }}>{h.k}</div>
                  <div style={{ fontWeight: 750 }}>{h.v}</div>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}