import React, { useState } from "react"
import {
  MoreVertical,
  MapPin,
  AlertCircle,
  MessageCircle,
  Send,
  X,
  TrendingUp,
  Activity,
  Users,
  Truck,
} from "lucide-react"

const Dashboard = () => {
  const [activeDriver, setActiveDriver] = useState(null)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const [showDrowsyAlert, setShowDrowsyAlert] = useState(false)

  const drivers = [
    {
      id: 1,
      code: "F1 562GH",
      location: "Cairo, Heliopolis 65 street",
      driver: "Ahmed El-Waleed",
      status: "Active",
      alerts: 2,
      operated: "40%",
      dispatched: "60%",
      tripsToday: 20,
      activeTrips: 7,
      completedTrips: 8,
      alertsToday: 9,
    },
    {
      id: 2,
      code: "F1 562GH",
      location: "Cairo, Heliopolis 65 street",
      driver: "Ahmed El-Waleed",
      status: "Active",
      alerts: 2,
      operated: "40%",
      dispatched: "60%",
      tripsToday: 20,
      activeTrips: 7,
      completedTrips: 8,
      alertsToday: 9,
    },
    {
      id: 3,
      code: "F1 562GH",
      location: "Cairo, Heliopolis 65 street",
      driver: "Ahmed El-Waleed",
      status: "Inactive",
      alerts: 0,
      operated: "40%",
      dispatched: "60%",
      tripsToday: 20,
      activeTrips: 7,
      completedTrips: 8,
      alertsToday: 9,
    },
    {
      id: 4,
      code: "F1 562GH",
      location: "Cairo, Heliopolis 65 street",
      driver: "Ahmed El-Waleed",
      status: "Active",
      alerts: 2,
      operated: "40%",
      dispatched: "60%",
      tripsToday: 20,
      activeTrips: 7,
      completedTrips: 8,
      alertsToday: 9,
    },
  ]

  const feedbackDrivers = [
    {
      id: 1,
      name: "Ahmed Abdalhamad",
      avatar: "👤",
      message: "Good performance",
      time: "5 mins",
    },
    {
      id: 2,
      name: "Ahmed Abdalhamad",
      avatar: "👤",
      message: "Need improvement",
      time: "2 mins",
    },
    {
      id: 3,
      name: "Ahmed Abdalhamad",
      avatar: "👤",
      message: "Great service",
      time: "1 min",
    },
    {
      id: 4,
      name: "Ahmed Abdalhamad",
      avatar: "👤",
      message: "Safe driving",
      time: "Just now",
    },
  ]

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <div style={styles.headerTop}>
          <h2 style={styles.pageTitle}>Dashboard</h2>
          <div style={styles.headerActions}>
            <input
              type="text"
              placeholder="Search"
              style={styles.searchInput}
            />
            <button style={styles.menuBtn}>⋮</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainLayout}>
        {/* Left Panel - Drivers List */}
        <div style={styles.leftPanel}>
          <h3 style={styles.panelTitle}>Active Drivers</h3>
          <div style={styles.driversList}>
            {drivers.map((driver) => (
              <div
                key={driver.id}
                style={{
                  ...styles.driverCard,
                  borderLeft:
                    activeDriver?.id === driver.id
                      ? "4px solid #4db8a8"
                      : "4px solid transparent",
                  backgroundColor:
                    activeDriver?.id === driver.id ? "#f0f9f8" : "#ffffff",
                }}
                onClick={() => setActiveDriver(driver)}
              >
                <div style={styles.driverCardHeader}>
                  <span style={styles.driverCode}>{driver.code}</span>
                  <span
                    style={{
                      ...styles.statusBadge,
                      backgroundColor:
                        driver.status === "Active" ? "#4db8a8" : "#d1d5db",
                    }}
                  >
                    ●
                  </span>
                </div>
                <div style={styles.driverCardBody}>
                  <p style={styles.driverInfo}>
                    <MapPin size={14} style={{ marginRight: "6px" }} />
                    {driver.location}
                  </p>
                  <p style={styles.driverInfo}>👤 {driver.driver}</p>
                  <p style={styles.driverInfo}>🔔 {driver.alerts} Alerts</p>
                </div>
                <button style={styles.moreBtn}>
                  <MoreVertical size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Center Panel - Statistics */}
        <div style={styles.centerPanel}>
          <div style={styles.feedbackBoxContainer}>
            <button
              onClick={() => setShowFeedbackModal(true)}
              style={styles.feedbackBoxBtn}
            >
              📬 Feedback Box
            </button>
          </div>

          <h3 style={styles.panelTitle}>Levels Statistics</h3>
          <div style={styles.statsContainer}>
            {/* Operated Stats */}
            <div style={styles.statItem}>
              <div style={styles.statHeader}>
                <span style={styles.statLabel}>Operated</span>
              </div>
              <div style={styles.percentage}>40%</div>
              <div style={styles.chart}>
                <div style={{ ...styles.chartBar, width: "40%" }}></div>
              </div>
              <p style={styles.change}>⬆️ 3% from last week</p>
            </div>

            {/* Operated Chart Card */}
            <div style={styles.chartCard}>
              <svg viewBox="0 0 100 60" style={styles.sparkline}>
                <polyline
                  points="5,45 15,35 25,40 35,25 45,30 55,15 65,20 75,10 85,15 95,8"
                  fill="none"
                  stroke="#4db8a8"
                  strokeWidth="2"
                />
              </svg>
              <p style={styles.chartLabel}>Operated</p>
              <p style={styles.chartValue}>13</p>
            </div>

            {/* Dispatched Stats */}
            <div style={styles.statItem}>
              <div style={styles.statHeader}>
                <span style={styles.statLabel}>Dispatched</span>
              </div>
              <div style={styles.percentage}>60%</div>
              <div style={styles.chart}>
                <div
                  style={{
                    ...styles.chartBar,
                    width: "60%",
                    backgroundColor: "#6b7280",
                  }}
                ></div>
              </div>
              <p style={styles.change}>⬆️ 2% from last week</p>
            </div>

            {/* Focused Chart Card */}
            <div style={styles.chartCard}>
              <svg viewBox="0 0 100 60" style={styles.sparkline}>
                <polyline
                  points="5,50 15,40 25,45 35,30 45,35 55,20 65,25 75,15 85,20 95,12"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                />
              </svg>
              <p style={styles.chartLabel}>Focused</p>
              <p style={styles.chartValue}>7</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Map */}
        <div style={styles.rightPanel}>
          <h3 style={styles.panelTitle}>View on map</h3>
          <div style={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27913.280123456!2d31.248!3d30.058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCairo!5e0!3m2!1sen!2seg!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              title="Fleet Map"
            />
          </div>
        </div>
      </div>

      {/* Bottom Stats Cards */}
      <div style={styles.bottomStats}>
        <div
          style={{
            ...styles.statCardLarge,
            backgroundColor: "#1a3a52",
            color: "white",
          }}
        >
          <p style={styles.statCardTitle}>Total Trips Today</p>
          <p style={styles.statCardValue}>20</p>
        </div>
        <div
          style={{
            ...styles.statCardLarge,
            backgroundColor: "#ffffff",
            color: "#1a3a52",
          }}
        >
          <p style={styles.statCardTitle}>Active Trips</p>
          <p style={styles.statCardValue}>7</p>
        </div>
        <div
          style={{
            ...styles.statCardLarge,
            backgroundColor: "#1a3a52",
            color: "white",
          }}
        >
          <p style={styles.statCardTitle}>Drivers on duty today</p>
          <p style={styles.statCardValue}>20</p>
          <p style={styles.statCardSubtitle}>Members Added</p>
          <a href="#" style={styles.seeMoreLink}>
            See More →
          </a>
        </div>
        <div
          style={{
            ...styles.statCardLarge,
            backgroundColor: "#ffffff",
            color: "#1a3a52",
          }}
        >
          <p style={styles.statCardTitle}>Completed Trips</p>
          <p style={styles.statCardValue}>8</p>
        </div>
        <div
          style={{
            ...styles.statCardLarge,
            backgroundColor: "#4db8a8",
            color: "white",
          }}
        >
          <p style={styles.statCardTitle}>Alerts Today</p>
          <p style={styles.statCardValue}>9</p>
        </div>
      </div>

      {/* Drowsy Alert Modal */}
      {showDrowsyAlert && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowDrowsyAlert(false)}
        >
          <div style={styles.alertModal} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowDrowsyAlert(false)}
              style={styles.closeBtn}
            >
              ×
            </button>
            <div style={styles.alertContent}>
              <div style={styles.alertIcon}>⚠️</div>
              <h2 style={styles.alertTitle}>Drowsy Alert</h2>
              <p style={styles.alertDescription}>
                Driver seems drowsy. Please take a break.
              </p>
              <button
                onClick={() => setShowDrowsyAlert(false)}
                style={styles.alertActionBtn}
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowFeedbackModal(false)}
        >
          <div
            style={styles.feedbackModal}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Feedback Box</h2>
              <button
                onClick={() => setShowFeedbackModal(false)}
                style={styles.closeBtn}
              >
                ×
              </button>
            </div>

            <div style={styles.feedbackSection}>
              <p style={styles.feedbackLabel}>Drivers</p>
              <div style={styles.feedbackList}>
                {feedbackDrivers.map((driver, idx) => (
                  <div key={idx} style={styles.feedbackItem}>
                    <div style={styles.feedbackAvatar}>{driver.avatar}</div>
                    <div style={styles.feedbackContent}>
                      <p style={styles.feedbackName}>{driver.name}</p>
                      <p style={styles.feedbackMsg}>{driver.message}</p>
                    </div>
                    <span style={styles.feedbackTime}>{driver.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.feedbackInput}>
              <textarea
                placeholder="Send a Message"
                value={feedbackMessage}
                onChange={(e) => setFeedbackMessage(e.target.value)}
                style={styles.textarea}
              />
              <button style={styles.sendBtn}>
                <Send size={18} color="white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#F8F9FB",
    minHeight: "100vh",
  },
  headerSection: {
    marginBottom: "24px",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: 0,
  },
  headerActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  searchInput: {
    padding: "10px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    width: "200px",
    fontSize: "14px",
  },
  menuBtn: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#6b7280",
  },
  mainLayout: {
    display: "grid",
    gridTemplateColumns: "280px 1fr 320px",
    gap: "20px",
    marginBottom: "24px",
  },
  leftPanel: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  centerPanel: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  rightPanel: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  panelTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#1a3a52",
    marginBottom: "16px",
    marginTop: 0,
  },
  driversList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxHeight: "450px",
    overflowY: "auto",
  },
  driverCard: {
    padding: "12px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
    position: "relative",
  },
  driverCardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  driverCode: {
    fontWeight: "600",
    fontSize: "12px",
    color: "#1a3a52",
  },
  statusBadge: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
  },
  driverCardBody: {
    fontSize: "12px",
    color: "#6b7280",
    lineHeight: "1.6",
  },
  driverInfo: {
    margin: "4px 0",
    display: "flex",
    alignItems: "center",
  },
  moreBtn: {
    position: "absolute",
    top: "8px",
    right: "8px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#9ca3af",
    padding: "4px",
  },
  feedbackBoxContainer: {
    marginBottom: "20px",
  },
  feedbackBoxBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1a3a52",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  statItem: {
    padding: "16px",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
  },
  statHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  statLabel: {
    fontWeight: "600",
    fontSize: "12px",
    color: "#1a3a52",
  },
  percentage: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1a3a52",
    marginBottom: "8px",
  },
  chart: {
    width: "100%",
    height: "6px",
    backgroundColor: "#e5e7eb",
    borderRadius: "3px",
    overflow: "hidden",
    marginBottom: "8px",
  },
  chartBar: {
    height: "100%",
    backgroundColor: "#4db8a8",
    borderRadius: "3px",
  },
  change: {
    fontSize: "11px",
    color: "#4db8a8",
    margin: 0,
  },
  chartCard: {
    padding: "16px",
    backgroundColor: "#1a3a52",
    borderRadius: "8px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sparkline: {
    width: "100%",
    height: "50px",
    marginBottom: "8px",
  },
  chartLabel: {
    fontSize: "12px",
    margin: "8px 0 0 0",
  },
  chartValue: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "4px 0 0 0",
  },
  mapContainer: {
    marginTop: "12px",
    borderRadius: "8px",
    overflow: "hidden",
    height: "250px",
  },
  bottomStats: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "16px",
  },
  statCardLarge: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  statCardTitle: {
    fontSize: "12px",
    fontWeight: "600",
    margin: "0 0 8px 0",
    opacity: 0.8,
  },
  statCardValue: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "8px 0",
  },
  statCardSubtitle: {
    fontSize: "11px",
    opacity: 0.7,
    margin: "8px 0 0 0",
  },
  seeMoreLink: {
    color: "inherit",
    textDecoration: "none",
    fontSize: "11px",
    fontWeight: "600",
    display: "inline-block",
    marginTop: "8px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  alertModal: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "300px",
    width: "90%",
    position: "relative",
    textAlign: "center",
  },
  feedbackModal: {
    backgroundColor: "white",
    borderRadius: "12px",
    maxWidth: "400px",
    width: "90%",
    maxHeight: "600px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid #e5e7eb",
  },
  modalTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: 0,
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "28px",
    cursor: "pointer",
    color: "#9ca3af",
    padding: 0,
    width: "32px",
    height: "32px",
  },
  alertContent: {
    padding: "20px 0",
  },
  alertIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  alertTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: "0 0 8px 0",
  },
  alertDescription: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 20px 0",
  },
  alertActionBtn: {
    padding: "10px 24px",
    backgroundColor: "#1a3a52",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  feedbackSection: {
    padding: "20px",
    flex: 1,
    overflowY: "auto",
  },
  feedbackLabel: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#6b7280",
    margin: "0 0 12px 0",
  },
  feedbackList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  feedbackItem: {
    display: "flex",
    gap: "12px",
    padding: "12px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    alignItems: "flex-start",
  },
  feedbackAvatar: {
    fontSize: "20px",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e7eb",
    borderRadius: "50%",
    flexShrink: 0,
  },
  feedbackContent: {
    flex: 1,
  },
  feedbackName: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#1a3a52",
    margin: "0 0 4px 0",
  },
  feedbackMsg: {
    fontSize: "12px",
    color: "#6b7280",
    margin: 0,
  },
  feedbackTime: {
    fontSize: "10px",
    color: "#9ca3af",
  },
  feedbackInput: {
    padding: "12px",
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    gap: "8px",
  },
  textarea: {
    flex: 1,
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "12px",
    fontFamily: "inherit",
    resize: "none",
    height: "40px",
  },
  sendBtn: {
    background: "#4db8a8",
    border: "none",
    borderRadius: "8px",
    padding: "10px 12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}

export default Dashboard
