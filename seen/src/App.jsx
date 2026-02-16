import React, { useState } from "react"
import {
  LayoutGrid,
  ClipboardList,
  UserSquare2,
  Truck,
  BarChart3,
  Car,
  Menu,
  X,
} from "lucide-react"

import Header from "./components/Header"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Trip from "./components/Trip"
import ManageDrivers from "./components/ManageDrivers"
import ManageVehicles from "./components/ManageVehicles"
import Report from "./components/Report"

const components = {
  Login,
  Signup,
  Dashboard,
  Trip,
  ManageDrivers,
  ManageVehicles,
  Report,
}

function App() {
  const [view, setView] = useState(localStorage.getItem("view") || "Login")
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true" || false,
  )
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "Admin User",
  )
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const ActiveComponent = components[view] || Dashboard

  const handleLogin = (user = "Admin User") => {
    setAuthenticated(true)
    setUserName(user)
    setView("Dashboard")

    localStorage.setItem("authenticated", "true")
    localStorage.setItem("userName", user)
    localStorage.setItem("view", "Dashboard")
  }

  const handleLogout = () => {
    setAuthenticated(false)
    setView("Login")
    setMobileMenuOpen(false)

    localStorage.removeItem("authenticated")
    localStorage.removeItem("userName")
    localStorage.removeItem("view")
  }

  const handleNavigation = (page) => {
    setView(page)
    localStorage.setItem("view", page)
    setMobileMenuOpen(false)
  }

  return (
    <div style={styles.app}>
      {!authenticated ? (
        // Authentication Pages (Login/Signup)
        <>
          <Header isAuthenticated={authenticated} setView={handleNavigation} />
          <main style={styles.authMain}>
            <ActiveComponent onLogin={handleLogin} setView={handleNavigation} />
          </main>
        </>
      ) : (
        // Authenticated Dashboard Pages
        <>
          <Header
            isAuthenticated={authenticated}
            onLogout={handleLogout}
            setView={handleNavigation}
            toggleSidebar={() => {
              setSidebarOpen(!sidebarOpen)
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            userName={userName}
          />

          <div style={styles.dashboardLayout}>
            {mobileMenuOpen && (
              <div
                style={styles.mobileOverlay}
                onClick={() => setMobileMenuOpen(false)}
              />
            )}

            {/* Sidebar */}
            <aside
              style={{
                ...styles.sidebar,
                width: sidebarOpen ? "80px" : "0px",
                padding: sidebarOpen ? "30px 0" : "0px",
              }}
            >
              <div style={styles.sidebarLogo}>
                <Car size={28} color="#1A1C1E" />
              </div>
              <nav style={styles.sidebarNav}>
                <NavItem
                  icon={<LayoutGrid />}
                  active={view === "Dashboard"}
                  onClick={() => handleNavigation("Dashboard")}
                  title="Dashboard"
                />
                <NavItem
                  icon={<ClipboardList />}
                  active={view === "Trip"}
                  onClick={() => handleNavigation("Trip")}
                  title="Trips"
                />
                <NavItem
                  icon={<UserSquare2 />}
                  active={view === "ManageDrivers"}
                  onClick={() => handleNavigation("ManageDrivers")}
                  title="Drivers"
                />
                <NavItem
                  icon={<Truck />}
                  active={view === "ManageVehicles"}
                  onClick={() => handleNavigation("ManageVehicles")}
                  title="Vehicles"
                />
                <NavItem
                  icon={<BarChart3 />}
                  active={view === "Report"}
                  onClick={() => handleNavigation("Report")}
                  title="Reports"
                />
              </nav>
              <div style={styles.sidebarProfile}>
                <img
                  src="https://via.placeholder.com/40"
                  alt="profile"
                  style={styles.avatarImg}
                />
              </div>
            </aside>

            {/* Content Wrapper */}
            <div style={styles.contentWrapper}>
              <header style={styles.topbar}>
                <div style={styles.userInfo}>
                  <span style={styles.userAvatar}>👤</span>
                  <div>
                    <div style={styles.userName}>{userName}</div>
                    <div style={styles.userRole}>Administrator</div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <button
                    onClick={() => {
                      setSidebarOpen(!sidebarOpen)
                      setMobileMenuOpen(!mobileMenuOpen)
                    }}
                    style={styles.toggleSidebarBtn}
                    title="Toggle Menu"
                  >
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                  <button onClick={handleLogout} style={styles.logoutBtn}>
                    Logout
                  </button>
                </div>
              </header>

              <main style={styles.mainContent}>
                <ActiveComponent />
              </main>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const NavItem = ({ icon, active, onClick, title }) => (
  <div
    onClick={onClick}
    style={{
      ...styles.navItem,
      color: active ? "#ffffff" : "#9ca3af",
      backgroundColor: active ? "#374151" : "transparent",
      transition: "all 0.3s",
      cursor: "pointer",
      position: "relative",
    }}
    title={title}
  >
    {React.cloneElement(icon, { size: 24 })}
    {active && <div style={styles.activeIndicator} />}
  </div>
)

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    overflow: "hidden",
  },
  authMain: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  },
  dashboardLayout: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
    position: "relative",
  },
  mobileOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 99,
  },
  sidebar: {
    backgroundColor: "#1A1C1E",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.3s",
    overflow: "hidden",
    zIndex: 100,
  },
  sidebarLogo: {
    backgroundColor: "white",
    padding: "8px",
    borderRadius: "50%",
    marginBottom: "40px",
  },
  sidebarNav: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    flex: 1,
  },
  navItem: {
    cursor: "pointer",
    padding: "10px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transition: "all 0.3s",
  },
  activeIndicator: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "4px",
    height: "24px",
    backgroundColor: "#4db8a8",
    borderRadius: "2px",
  },
  sidebarProfile: {
    marginBottom: "20px",
  },
  avatarImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid #374151",
  },
  contentWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "white",
    borderBottom: "1px solid #e5e7eb",
    zIndex: 50,
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  userAvatar: {
    fontSize: "24px",
    backgroundColor: "#f3f4f6",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontWeight: "600",
    color: "#2c3e50",
  },
  userRole: {
    fontSize: "12px",
    color: "#9ca3af",
  },
  logoutBtn: {
    padding: "8px 16px",
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "all 0.3s",
  },
  toggleSidebarBtn: {
    padding: "8px 12px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
  },
  mainContent: {
    flex: 1,
    overflowY: "auto",
    backgroundColor: "#F8F9FB",
  },
}

export default App
