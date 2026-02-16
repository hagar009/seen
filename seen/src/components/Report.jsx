import React, { useState } from "react"
import { BarChart3, TrendingUp, AlertCircle, Calendar } from "lucide-react"

const Report = () => {
  const [timeRange, setTimeRange] = useState("This Month")

  const stats = [
    {
      id: 1,
      title: "Total Trips",
      value: "56",
      subtitle: "This Month",
      backgroundColor: "#1a3a52",
      textColor: "white",
      icon: "🚗",
      size: "large",
    },
    {
      id: 2,
      title: "Alerts",
      value: "25",
      backgroundColor: "#4db8a8",
      textColor: "white",
      icon: "⚠️",
      size: "small",
    },
    {
      id: 3,
      title: "Car Accident Rate",
      value: "8",
      subtitle: "%",
      backgroundColor: "#4db8a8",
      textColor: "white",
      icon: "📊",
      size: "small",
    },
  ]

  const drivingStats = [
    {
      id: 1,
      title: "Drowsy Driving",
      value: "5m 8s",
      chart: "📈",
      trend: "↑",
    },
    {
      id: 2,
      title: "Reckless Driving",
      value: "30m 8s",
      chart: "📈",
      trend: "↑",
    },
    {
      id: 3,
      title: "Idle Driving",
      value: "635",
      chart: "📈",
      trend: "↓",
    },
  ]

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Trips",
        data: [45, 52, 48, 61, 55, 58, 56],
        borderColor: "#4db8a8",
        backgroundColor: "rgba(77, 184, 168, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>report</h2>
        <button style={styles.timeRangeBtn}>
          <Calendar size={16} />
          {timeRange}
        </button>
      </div>

      {/* Main Stats Cards */}
      <div style={styles.statsLayout}>
        {/* Large Card - Total Trips */}
        <div
          style={{
            ...styles.statCard,
            ...styles.largeCard,
            backgroundColor: stats[0].backgroundColor,
            color: stats[0].textColor,
          }}
        >
          <p style={styles.cardLabel}>{stats[0].title}</p>
          <p style={styles.largeValue}>{stats[0].value}</p>
          <p style={styles.cardSubtitle}>{stats[0].subtitle}</p>
        </div>

        {/* Chart Area */}
        <div style={styles.chartCard}>
          <p style={styles.chartTitle}>Most Drowsy Time during Dat</p>
          <div style={styles.chartPlaceholder}>
            <svg viewBox="0 0 300 150" style={styles.chart}>
              {/* Mountain chart visualization */}
              <defs>
                <linearGradient
                  id="mountainGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(77, 184, 168, 0.3)" />
                  <stop offset="100%" stopColor="rgba(77, 184, 168, 0.01)" />
                </linearGradient>
              </defs>
              <path
                d="M 0 100 L 30 80 L 60 90 L 90 60 L 120 70 L 150 40 L 180 55 L 210 30 L 240 50 L 270 35 L 300 60 L 300 150 L 0 150 Z"
                fill="url(#mountainGradient)"
                stroke="#4db8a8"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Small Stats Cards */}
      <div style={styles.smallStatsContainer}>
        {[stats[1], stats[2]].map((stat) => (
          <div
            key={stat.id}
            style={{
              ...styles.statCard,
              ...styles.smallCard,
              backgroundColor: stat.backgroundColor,
              color: stat.textColor,
            }}
          >
            <p style={styles.cardLabel}>{stat.title}</p>
            <p style={styles.smallValue}>{stat.value}</p>
            {stat.subtitle && (
              <p style={styles.cardSubtitle}>{stat.subtitle}</p>
            )}
          </div>
        ))}
      </div>

      {/* Driving Statistics */}
      <div style={styles.drivingStatsContainer}>
        {drivingStats.map((stat) => (
          <div key={stat.id} style={styles.drivingStatCard}>
            <div style={styles.drivingStatHeader}>
              <h3 style={styles.drivingStatTitle}>{stat.title}</h3>
              <span style={styles.trendIcon}>{stat.trend}</span>
            </div>
            <p style={styles.drivingStatValue}>{stat.value}</p>
            <div style={styles.miniChart}>
              <svg viewBox="0 0 100 40" style={styles.miniChartSvg}>
                <polyline
                  points="5,30 15,20 25,25 35,15 45,20 55,10 65,18 75,12 85,16 95,8"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Metrics */}
      <div style={styles.metricsSection}>
        <div style={styles.metricCard}>
          <div style={styles.metricHeader}>
            <BarChart3 size={24} color="#4db8a8" />
            <span style={styles.metricLabel}>Total Distance</span>
          </div>
          <p style={styles.metricValue}>2,345 km</p>
          <p style={styles.metricChange}>↑ 12% from last month</p>
        </div>

        <div style={styles.metricCard}>
          <div style={styles.metricHeader}>
            <TrendingUp size={24} color="#4db8a8" />
            <span style={styles.metricLabel}>Avg Speed</span>
          </div>
          <p style={styles.metricValue}>65 km/h</p>
          <p style={styles.metricChange}>↓ 5% from last month</p>
        </div>

        <div style={styles.metricCard}>
          <div style={styles.metricHeader}>
            <AlertCircle size={24} color="#ef4444" />
            <span style={styles.metricLabel}>Safety Score</span>
          </div>
          <p style={styles.metricValue}>92/100</p>
          <p style={styles.metricChange}>↑ 8% from last month</p>
        </div>
      </div>

      {/* Top Drivers Table */}
      <div style={styles.tableSection}>
        <h3 style={styles.sectionTitle}>Top Drivers</h3>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.tableHeader}>Driver</th>
                <th style={styles.tableHeader}>Trips</th>
                <th style={styles.tableHeader}>Distance</th>
                <th style={styles.tableHeader}>Score</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Ahmed Abdalhamad",
                  trips: 45,
                  distance: "1,200 km",
                  score: "95",
                },
                {
                  name: "Mohammed Hassan",
                  trips: 38,
                  distance: "980 km",
                  score: "88",
                },
                {
                  name: "Fatima Ali",
                  trips: 52,
                  distance: "1,450 km",
                  score: "92",
                },
                {
                  name: "Omar Ibrahim",
                  trips: 41,
                  distance: "1,100 km",
                  score: "89",
                },
              ].map((driver, idx) => (
                <tr key={idx} style={styles.tableRow}>
                  <td style={styles.tableCell}>{driver.name}</td>
                  <td style={styles.tableCell}>{driver.trips}</td>
                  <td style={styles.tableCell}>{driver.distance}</td>
                  <td style={styles.tableCell}>{driver.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Statistics */}
      <div style={styles.summarySection}>
        <div style={styles.summaryCard}>
          <p style={styles.summaryLabel}>Fleet Utilization</p>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progress, width: "78%" }}></div>
          </div>
          <p style={styles.summaryValue}>78%</p>
        </div>

        <div style={styles.summaryCard}>
          <p style={styles.summaryLabel}>Driver Compliance</p>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progress,
                width: "85%",
                backgroundColor: "#4db8a8",
              }}
            ></div>
          </div>
          <p style={styles.summaryValue}>85%</p>
        </div>

        <div style={styles.summaryCard}>
          <p style={styles.summaryLabel}>Vehicle Health</p>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progress,
                width: "92%",
                backgroundColor: "#10b981",
              }}
            ></div>
          </div>
          <p style={styles.summaryValue}>92%</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#F8F9FB",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: 0,
  },
  timeRangeBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    backgroundColor: "#1a3a52",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },
  statsLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "24px",
  },
  statCard: {
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  largeCard: {
    gridColumn: "1",
    gridRow: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  smallCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "140px",
  },
  cardLabel: {
    fontSize: "13px",
    fontWeight: "600",
    opacity: 0.9,
    margin: "0 0 8px 0",
  },
  cardSubtitle: {
    fontSize: "12px",
    opacity: 0.7,
    margin: "8px 0 0 0",
  },
  largeValue: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "12px 0",
    lineHeight: 1,
  },
  smallValue: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "12px 0",
    lineHeight: 1,
  },
  chartCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    gridColumn: "2",
    gridRow: "1 / 3",
    display: "flex",
    flexDirection: "column",
  },
  chartTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1a3a52",
    marginBottom: "16px",
    margin: "0 0 16px 0",
  },
  chartPlaceholder: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    width: "100%",
    height: "100%",
    maxHeight: "200px",
  },
  smallStatsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "24px",
  },
  drivingStatsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },
  drivingStatCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  drivingStatHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  drivingStatTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1a3a52",
    margin: 0,
  },
  trendIcon: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  drivingStatValue: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: "8px 0 12px 0",
  },
  miniChart: {
    width: "100%",
    height: "40px",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    padding: "8px",
    boxSizing: "border-box",
  },
  miniChartSvg: {
    width: "100%",
    height: "100%",
  },
  metricsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },
  metricCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  metricHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  metricLabel: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#6b7280",
  },
  metricValue: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: "12px 0 8px 0",
  },
  metricChange: {
    fontSize: "12px",
    color: "#4db8a8",
    margin: 0,
  },
  tableSection: {
    marginBottom: "32px",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1a3a52",
    marginBottom: "16px",
    margin: "0 0 16px 0",
  },
  tableContainer: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    overflow: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeaderRow: {
    backgroundColor: "#f3f4f6",
    borderBottom: "2px solid #e5e7eb",
  },
  tableHeader: {
    padding: "12px 16px",
    textAlign: "left",
    fontWeight: "600",
    color: "#374151",
    fontSize: "13px",
  },
  tableRow: {
    borderBottom: "1px solid #e5e7eb",
  },
  tableCell: {
    padding: "12px 16px",
    color: "#374151",
    fontSize: "13px",
  },
  summarySection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  summaryCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  summaryLabel: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#6b7280",
    marginBottom: "12px",
    margin: "0 0 12px 0",
  },
  progressBar: {
    width: "100%",
    height: "8px",
    backgroundColor: "#e5e7eb",
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "12px",
  },
  progress: {
    height: "100%",
    backgroundColor: "#1a3a52",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },
  summaryValue: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: 0,
  },
}

export default Report
