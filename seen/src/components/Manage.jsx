export default function Manage() {
  const management = [
    {
      icon: "👥",
      title: "Manage Drivers",
      description: "Add, edit, or remove drivers from your fleet",
      color: "#3498db",
    },
    {
      icon: "🚗",
      title: "Manage Vehicles",
      description: "Track and manage vehicle inventory and status",
      color: "#2ecc71",
    },
    {
      icon: "🛣️",
      title: "Trip Management",
      description: "Create and monitor trips and routes",
      color: "#f39c12",
    },
    {
      icon: "📊",
      title: "Reports",
      description: "Generate detailed reports and analytics",
      color: "#e74c3c",
    },
  ]

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Management Dashboard</h2>
      <p style={styles.subtitle}>Select a management area to get started</p>

      <div style={styles.grid}>
        {management.map((item, idx) => (
          <div key={idx} style={styles.card}>
            <div style={{ ...styles.icon, backgroundColor: `${item.color}20` }}>
              {item.icon}
            </div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardDescription}>{item.description}</p>
            <button style={{ ...styles.cardBtn, backgroundColor: item.color }}>
              Go to {item.title}
            </button>
          </div>
        ))}
      </div>

      <div style={styles.quickStats}>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>48</div>
          <div style={styles.statLabel}>Total Vehicles</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>35</div>
          <div style={styles.statLabel}>Active Drivers</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>1,247</div>
          <div style={styles.statLabel}>Total Trips</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>8.5</div>
          <div style={styles.statLabel}>Avg Fuel Efficiency</div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#7f8c8d",
    marginBottom: "32px",
    margin: "0 0 32px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginBottom: "48px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "32px 24px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  icon: {
    fontSize: "48px",
    width: "80px",
    height: "80px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  cardTitle: {
    margin: "0 0 12px 0",
    fontSize: "18px",
    fontWeight: "700",
    color: "#2c3e50",
  },
  cardDescription: {
    margin: "0 0 20px 0",
    fontSize: "14px",
    color: "#7f8c8d",
    lineHeight: "1.6",
  },
  cardBtn: {
    padding: "10px 20px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  quickStats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  statBox: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  statNumber: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#3498db",
    marginBottom: "8px",
  },
  statLabel: {
    fontSize: "14px",
    color: "#7f8c8d",
    fontWeight: "600",
  },
}
