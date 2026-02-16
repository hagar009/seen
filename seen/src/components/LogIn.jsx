import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const Login = ({ onLogin, setView }) => {
  const [email, setEmail] = useState("fleet@example.com")
  const [password, setPassword] = useState("password123")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    setLoading(true)
    setTimeout(() => {
      onLogin(
        email.split("@")[0].charAt(0).toUpperCase() +
          email.split("@")[0].slice(1),
      )
      setLoading(false)
    }, 1000)
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && <div style={styles.errorMessage}>{error}</div>}

          <div style={styles.formGroup}>
            <label style={styles.label}>Your ID</label>
            <div style={styles.inputContainer}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your thought ID"
                style={styles.input}
              />
              <span style={styles.inputIcon}>🔐</span>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputContainer}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                style={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.iconButton}
              >
                {showPassword ? (
                  <EyeOff size={18} color="#999" />
                ) : (
                  <Eye size={18} color="#999" />
                )}
              </button>
            </div>
          </div>

          <div style={styles.forgotContainer}>
            <a href="#" style={styles.forgotLink}>
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            style={{
              ...styles.submitBtn,
              opacity: loading ? 0.7 : 1,
            }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div style={styles.signupPrompt}>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => setView("Signup")}
              style={styles.signupLink}
            >
              Sign up here
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "40px 30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: "30px",
    margin: "0 0 30px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
  },
  inputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "12px 40px 12px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "13px",
    fontFamily: "inherit",
    transition: "all 0.3s",
    backgroundColor: "#f9fafb",
  },
  inputIcon: {
    position: "absolute",
    right: "12px",
    fontSize: "18px",
    pointerEvents: "none",
  },
  iconButton: {
    position: "absolute",
    right: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  forgotContainer: {
    textAlign: "right",
    marginTop: "8px",
  },
  forgotLink: {
    fontSize: "12px",
    color: "#ef4444",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.3s",
  },
  submitBtn: {
    padding: "12px 16px",
    backgroundColor: "#1a3a52",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s",
    marginTop: "12px",
  },
  signupPrompt: {
    fontSize: "13px",
    color: "#6b7280",
    textAlign: "center",
    marginTop: "20px",
  },
  signupLink: {
    background: "none",
    border: "none",
    color: "#3b82f6",
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "underline",
    fontSize: "13px",
  },
  errorMessage: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    padding: "12px 16px",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "500",
  },
}

export default Login
