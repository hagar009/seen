import { useState } from "react"

export default function Dashboard() {
  const [stats] = useState([
    {
      icon: "🚗",
      label: "Total Vehicles",
      value: "48",
      change: "+2 this month",
      color: "#3498db",
    },
    {
      icon: "👥",
      label: "Active Drivers",
      value: "35",
      change: "+1 this month",
      color: "#2ecc71",
    },
    {
      icon: "🛣️",
      label: "Total Trips",
      value: "1,247",
      change: "+120 this month",
      color: "#f39c12",
    },
    {
      icon: "📊",
      label: "Fuel Efficiency",
      value: "8.5 km/L",
      change: "+0.3 avg",
      color: "#e74c3c",
    },
  ])

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dashboard Overview</h2>

      <div style={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <div key={idx} style={styles.statCard}>
            <div
              style={{ ...styles.statIcon, backgroundColor: `${stat.color}20` }}
            >
              {stat.icon}
            </div>
            <div style={styles.statContent}>
              <div style={styles.statLabel}>{stat.label}</div>
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statChange}>{stat.change}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.chartsContainer}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Recent Activity</h3>
          <div style={styles.placeholder}>
            <p>📈 Chart placeholder - Activity trends</p>
          </div>
        </div>

        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Top Drivers</h3>
          <div style={styles.placeholder}>
            <p>🏆 Chart placeholder - Driver performance</p>
          </div>
        </div>
      </div>

      <div style={styles.alertBox}>
        <div style={styles.alertIcon}>⚠️</div>
        <div>
          <div style={styles.alertTitle}>System Status</div>
          <div style={styles.alertMessage}>
            All systems operating normally. Last backup: 2 hours ago.
          </div>
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
    marginBottom: "24px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    gap: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  statIcon: {
    fontSize: "32px",
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statContent: {
    flex: 1,
  },
  statLabel: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#7f8c8d",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  statValue: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2c3e50",
    margin: "4px 0",
  },
  statChange: {
    fontSize: "12px",
    color: "#27ae60",
    fontWeight: "500",
  },
  chartsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },
  chartCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  chartTitle: {
    marginTop: "0",
    marginBottom: "16px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#2c3e50",
  },
  placeholder: {
    minHeight: "250px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7f8c8d",
    fontWeight: "500",
  },
  alertBox: {
    backgroundColor: "#fff8e8",
    border: "2px solid #f39c12",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
  },
  alertIcon: {
    fontSize: "24px",
  },
  alertTitle: {
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "4px",
  },
  alertMessage: {
    color: "#7f8c8d",
    fontSize: "14px",
  },
}
