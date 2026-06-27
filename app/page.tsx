export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#facc15", fontSize: "28px" }}>Ray'snote</span>
        <span>Home</span>
        <span>News</span>
        <span>Business</span>
        <span>Technology</span>
        <span>Entertainment</span>
        <span>Opinion</span>

        <input
          placeholder="Search..."
          style={{
            marginLeft: "auto",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
      </nav>

      <section
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ color: "#facc15", fontSize: "60px" }}>
          Welcome to Ray'snote
        </h1>

        <p style={{ fontSize: "22px", maxWidth: "800px" }}>
          Independent online publishing for news, business, technology,
          entertainment, sports, opinion, and creator stories.
        </p>

        <button
          style={{
            marginTop: "20px",
            background: "#facc15",
            color: "black",
            border: "none",
            borderRadius: "10px",
            padding: "14px 28px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Subscribe
        </button>
      </section>

      <h2 style={{ marginTop: "50px" }}>Latest Articles</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {[
          "Breaking News",
          "Business",
          "Technology",
          "Entertainment",
          "Sports",
          "Opinion",
        ].map((title) => (
          <article
            key={title}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h3>{title}</h3>
            <p>Original reporting from the Ray'snote newsroom.</p>

            <button>Read More</button>
          </article>
        ))}
      </div>
    </main>
  );
} 

