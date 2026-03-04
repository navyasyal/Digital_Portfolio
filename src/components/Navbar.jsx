import { profile } from "../data/portfolio.js";

const items = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        background: "rgba(11,15,23,0.70)",
        borderBottom: "1px solid var(--border)"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
        <a href="#" style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 14,
              border: "1px solid var(--border)",
              background: "linear-gradient(90deg, rgba(255,111,174,0.35), rgba(167,139,250,0.28), rgba(52,211,153,0.20))",
              display: "grid",
              placeItems: "center",
              fontWeight: 800
            }}
          >
            N
          </span>
          <div>
            <div style={{ fontWeight: 800, lineHeight: 1.1 }}>{profile.name}</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>{profile.title}</div>
          </div>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <nav style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {items.map((it) => (
              <a key={it.href} href={it.href} className="pill" style={{ fontSize: 13 }}>
                {it.label}
              </a>
            ))}
          </nav>

          <a className="btn ghost" href={profile.links.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}