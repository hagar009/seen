import React from "react"
import { Menu, Search, Bell } from "lucide-react"

export default function Header({
  isAuthenticated,
  onLogout,
  setView,
  toggleSidebar,
  userName,
}) {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}><img src="../assets/image/SEEN LOGOooooooooooooo.png"/></span>
        </div>
      </div>

      <div style={styles.navActions}>
        {!isAuthenticated ? (
          <>
            <button onClick={() => setView("Login")} style={styles.loginBtn}>
              Login
            </button>
            <button onClick={() => setView("Signup")} style={styles.signupBtn}>
              Sign up
            </button>
          </>
        ) : (
          <>
            <div style={styles.searchContainer}>
              <Search size={18} style={styles.searchIconLucide} />
              <input
                type="text"
                placeholder="Search drivers, vehicles..."
                style={styles.searchInput}
              />
            </div>
            <button style={styles.notificationBtn}>
              <Bell size={20} />
              <span style={styles.notificationBadge}>3</span>
            </button>
            <button onClick={toggleSidebar} style={styles.menuBtn}>
              <Menu size={20} />
            </button>
          </>
        )}
      </div>
    </header>
  )
}

const styles = {
  header: {
    width: "100%",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  logoIcon: {
    fontSize: "32px",
  },
  logoText: {
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  navActions: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  loginBtn: {
    background: "transparent",
    color: "white",
    border: "1px solid white",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s",
  },
  signupBtn: {
    background: "white",
    color: "#0f2027",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s",
  },
  searchContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "6px",
    padding: "8px 12px",
  },
  searchIconLucide: {
    color: "rgba(255,255,255,0.6)",
    marginRight: "8px",
  },
  searchInput: {
    background: "none",
    border: "none",
    color: "white",
    outline: "none",
    fontSize: "13px",
    width: "250px",
    fontFamily: "inherit",
  },
  notificationBtn: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    position: "relative",
    padding: "8px",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
  },
  notificationBadge: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    backgroundColor: "#ef4444",
    color: "white",
    fontSize: "10px",
    fontWeight: "bold",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuBtn: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    padding: "8px",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
  },
}
