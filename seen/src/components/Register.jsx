import { useState } from "react"

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!formData.fullName.trim()) {
      setError("Full name is required.")
      return
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    if (!formData.phone.trim()) {
      setError("Phone number is required.")
      return
    }

    setSuccess(true)
    setTimeout(() => {
      setFormData({ fullName: "", email: "", password: "", phone: "" })
      setSuccess(false)
    }, 2000)
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.title}>Register Account</h2>
          <p style={styles.subtitle}>Complete your registration</p>
        </div>

        {success && (
          <div style={styles.success}>✓ Registration successful!</div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              style={styles.input}
            />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f8f9fa",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "48px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
  },
  cardHeader: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "28px",
    fontWeight: "700",
    color: "#2c3e50",
  },
  subtitle: {
    margin: "0",
    fontSize: "14px",
    color: "#7f8c8d",
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
    fontSize: "14px",
    fontWeight: "600",
    color: "#2c3e50",
  },
  input: {
    padding: "12px 16px",
    fontSize: "16px",
    border: "2px solid #ecf0f1",
    borderRadius: "8px",
    fontFamily: "inherit",
    transition: "all 0.2s ease",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px",
    transition: "all 0.2s ease",
  },
  error: {
    padding: "12px 16px",
    backgroundColor: "#ffe8e8",
    color: "#c0392b",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    border: "1px solid #f5b6b6",
  },
  success: {
    padding: "12px 16px",
    backgroundColor: "#d4edda",
    color: "#155724",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    border: "1px solid #c3e6cb",
    marginBottom: "16px",
    textAlign: "center",
  },
}
