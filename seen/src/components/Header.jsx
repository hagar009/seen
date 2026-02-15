export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
       <img
          src="../assets/image/White_Orange_Modern_Automotive_Logo-removebg-preview (1) 2.svg"
          alt="SAV Logo"      style={{ width: "40px", height: "40px" }} />
      </div>

      <div style={styles.navActions}>
        <button style={styles.loginBtn}>Login</button>
        <button style={styles.signupBtn}>Signup</button>
      </div>
    </header>
  )
}

const styles = {
  header: {
    width: "100%",
    position: "relative",
        // background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
  background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",

    color: "white",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  navActions: {
    display: "flex",
    gap: "12px",
  },
  loginBtn: {
    background: "transparent",
    color: "white",
    border: "1px solid white",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  signupBtn: {
    background: "white",
    color: "#2c3e50",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
}
