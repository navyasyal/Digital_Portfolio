export default function Badge({ children, tone = "default" }) {
  const map = {
    default: { border: "var(--border)", bg: "rgba(255,255,255,0.04)", color: "var(--muted)" },
    accent: { border: "rgba(255,111,174,0.45)", bg: "rgba(255,111,174,0.10)", color: "var(--text)" },
    ok: { border: "rgba(52,211,153,0.45)", bg: "rgba(52,211,153,0.10)", color: "var(--text)" },
    info: { border: "rgba(96,165,250,0.45)", bg: "rgba(96,165,250,0.10)", color: "var(--text)" },
    purple: { border: "rgba(167,139,250,0.45)", bg: "rgba(167,139,250,0.10)", color: "var(--text)" },
    sunny: { border: "rgba(251,191,36,0.55)", bg: "rgba(251,191,36,0.12)", color: "var(--text)" }
  };
  const t = map[tone] || map.default;

  return (
    <span
      className="pill"
      style={{
        borderColor: t.border,
        background: t.bg,
        color: t.color
      }}
    >
      {children}
    </span>
  );
}