const professionals = [
  { name: "יוסי כהן", role: "מתווך", area: "תל אביב" },
  { name: "דנה לוי", role: "יועצת משכנתאות", area: "מרכז" },
  { name: "אבי רוזן", role: "שמאי מקרקעין", area: "שרון" },
];

export default function Professionals() {
  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: "0 16px" }}>
      <h1>אנשי מקצוע</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 16 }}>
        {professionals.map((p) => (
          <div key={p.name} style={{ background: "#fff", padding: 16, borderRadius: 8 }}>
            <strong>{p.name}</strong>
            <div>{p.role}</div>
            <div style={{ color: "#777" }}>{p.area}</div>
            <button style={{ marginTop: 8 }}>צור קשר</button>
          </div>
        ))}
      </div>
    </main>
  );
}
