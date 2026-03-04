import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <div className="container" style={{ padding: "28px 0 40px", color: "var(--muted)" }}>
      <hr className="sep" />
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <div>© {new Date().getFullYear()} {profile.name}</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="pill" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="pill" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="pill" href={profile.links.resume} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </div>
  );
}