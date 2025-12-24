export default function Home() {
  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: "0 16px" }}>
      <section style={{ background: "#fff", padding: 40, borderRadius: 8 }}>
        <h1 style={{ fontSize: 36 }}>HiHome</h1>
        <p style={{ fontSize: 18, color: "#555" }}>
          פלטפורמה חכמה לפרסום, ניהול וחיפוש נכסי נדל״ן – בלי כפילויות, בלי בלגן.
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <input placeholder="עיר" style={{ flex: 1, padding: 12 }} />
          <input placeholder="מחיר עד" style={{ flex: 1, padding: 12 }} />
          <button style={{ padding: "12px 24px", background: "#000", color: "#fff" }}>
            חפש נכסים
          </button>
        </div>
      </section>
    </main>
  );
}
