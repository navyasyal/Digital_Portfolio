export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="container" style={{ padding: "64px 0 12px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 28, letterSpacing: 0.2 }}>{title}</h2>
          {subtitle ? (
            <p style={{ margin: "8px 0 0", color: "var(--muted)", maxWidth: 780, lineHeight: 1.6 }}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <div style={{ marginTop: 18 }}>{children}</div>
    </section>
  );
}