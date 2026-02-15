import { useState } from "react"

export default function Report() {
  const [reportType, setReportType] = useState("monthly")
  const [reports] = useState([
    {
      id: 1,
      title: "Fleet Performance Report",
      date: "2024-01-15",
      type: "monthly",
      vehicles: 48,
      trips: 1247,
      fuelCost: "$4,521",
    },
    {
      id: 2,
      title: "Driver Safety Report",
      date: "2024-01-15",
      type: "monthly",
      drivers: 35,
      incidents: 2,
      rating: "9.2/10",
    },
    {
      id: 3,
      title: "Fuel Consumption Analysis",
      date: "2024-01-14",
      type: "weekly",
      consumption: "2,850L",
      efficiency: "8.5km/L",
      savings: "$340",
    },
    {
      id: 4,
      title: "Route Optimization Report",
      date: "2024-01-13",
      type: "weekly",
      routes: 156,
      optimized: 42,
      timesSaved: "289hrs",
    },
  ])

  const filteredReports = reports.filter((r) => r.type === reportType)

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Reports & Analytics</h2>

      <div style={styles.filterSection}>
        <h3 style={styles.sectionTitle}>Filter Reports</h3>
        <div style={styles.filterGroup}>
          <button
            onClick={() => setReportType("monthly")}
            style={{
              ...styles.filterBtn,
              backgroundColor: reportType === "monthly" ? "#3498db" : "#ecf0f1",
              color: reportType === "monthly" ? "white" : "#2c3e50",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setReportType("weekly")}
            style={{
              ...styles.filterBtn,
              backgroundColor: reportType === "weekly" ? "#3498db" : "#ecf0f1",
              color: reportType === "weekly" ? "white" : "#2c3e50",
            }}
          >
            Weekly
          </button>
        </div>
      </div>

      <div style={styles.reportsGrid}>
        {filteredReports.map((report) => (
          <div key={report.id} style={styles.reportCard}>
            <div style={styles.reportHeader}>
              <h4 style={styles.reportTitle}>{report.title}</h4>
              <span style={styles.reportDate}>{report.date}</span>
            </div>
            <div style={styles.reportContent}>
              {Object.entries(report).map(([key, value]) => {
                if (["id", "title", "date", "type"].includes(key)) return null
                return (
                  <div key={key} style={styles.reportStat}>
                    <span style={styles.reportLabel}>{key}</span>
                    <span style={styles.reportValue}>{value}</span>
                  </div>
                )
              })}
            </div>
            <button style={styles.viewBtn}>View Report</button>
          </div>
        ))}
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
  filterSection: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "32px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  sectionTitle: {
    margin: "0 0 16px 0",
    fontSize: "18px",
    fontWeight: "600",
    color: "#2c3e50",
  },
  filterGroup: {
    display: "flex",
    gap: "12px",
  },
  filterBtn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s ease",
  },
  reportsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  reportCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  reportHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: "12px",
    borderBottom: "1px solid #ecf0f1",
  },
  reportTitle: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "700",
    color: "#2c3e50",
  },
  reportDate: {
    fontSize: "12px",
    color: "#7f8c8d",
  },
  reportContent: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  reportStat: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reportLabel: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#7f8c8d",
    textTransform: "capitalize",
  },
  reportValue: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#2c3e50",
  },
  viewBtn: {
    padding: "10px 16px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
}
