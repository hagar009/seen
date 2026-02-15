import { useState } from "react"

export default function MainContent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h2 style={styles.title}>Utilities & Tools</h2>

        <div style={styles.gridLayout}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>📊 Counter Tool</h3>
            <p style={styles.sectionDescription}>
              Use this counter to track items or events
            </p>
            <div style={styles.counterBox}>
              <button
                onClick={() => setCount(count + 1)}
                style={{ ...styles.button, backgroundColor: "#3498db" }}
              >
                Count: {count}
              </button>
              <button
                onClick={() => setCount(0)}
                style={{ ...styles.button, backgroundColor: "#e74c3c" }}
              >
                Reset
              </button>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>👋 Greeting Tool</h3>
            <p style={styles.sectionDescription}>
              Enter your name to get a personalized greeting
            </p>
            <div style={styles.inputBox}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={styles.input}
              />
              {name && (
                <div style={styles.greeting}>
                  👋 Hello, <strong>{name}</strong>!
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={styles.infoBox}>
          <div style={styles.infoIcon}>ℹ️</div>
          <div>
            <div style={styles.infoTitle}>Quick Tips</div>
            <ul style={styles.infoList}>
              <li>Use the counter tool to track any numeric value</li>
              <li>
                Enter your name in the greeting tool for a personalized message
              </li>
              <li>All changes are saved in real-time</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

const styles = {
  main: {
    flex: 1,
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "32px",
  },
  gridLayout: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "24px",
    marginBottom: "32px",
  },
  section: {
    backgroundColor: "white",
    padding: "28px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  sectionTitle: {
    margin: "0 0 12px 0",
    fontSize: "18px",
    fontWeight: "700",
    color: "#2c3e50",
  },
  sectionDescription: {
    margin: "0 0 20px 0",
    fontSize: "14px",
    color: "#7f8c8d",
    lineHeight: "1.6",
  },
  counterBox: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 20px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.2s ease",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px 16px",
    fontSize: "16px",
    border: "2px solid #ecf0f1",
    borderRadius: "8px",
    fontFamily: "inherit",
    transition: "all 0.2s ease",
  },
  greeting: {
    padding: "16px",
    backgroundColor: "#d4edda",
    color: "#155724",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    border: "1px solid #c3e6cb",
  },
  infoBox: {
    backgroundColor: "#e8f4f8",
    border: "2px solid #3498db",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    gap: "16px",
  },
  infoIcon: {
    fontSize: "32px",
    minWidth: "40px",
  },
  infoTitle: {
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "8px",
  },
  infoList: {
    margin: "0",
    paddingLeft: "20px",
    color: "#34495e",
    lineHeight: "1.8",
  },
}
