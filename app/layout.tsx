export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f7f7f7" }}>
        <header style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>
          <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "16px", display: "flex", gap: 24 }}>
            <strong>HiHome</strong>
            <a href="/">בית</a>
            <a href="/search">חיפוש נכסים</a>
            <a href="/professionals">מקצוענים</a>
            <a href="/dashboard">דשבורד</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
