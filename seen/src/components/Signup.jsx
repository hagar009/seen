import React, { useState } from "react"
import { Eye, EyeOff, ChevronDown } from "lucide-react"

const Signup = ({ onLogin, setView }) => {
  const [formData, setFormData] = useState({
    // Company Details
    companyName: "",
    taxRegistration: "",
    fleetSize: "",
    // Company Location
    country: "",
    city: "",
    address: "",
    postalCode: "",
    // Fleet Manager Data
    fleetManagerName: "",
    fleetManagerEmail: "",
    fleetManagerCode: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (
      !formData.companyName ||
      !formData.fleetManagerName ||
      !formData.password
    ) {
      setError("Please fill in all required fields")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)
    setTimeout(() => {
      onLogin(formData.fleetManagerName)
      setLoading(false)
    }, 1000)
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Signup</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && <div style={styles.errorMessage}>{error}</div>}

          {/* Company Details Section */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Company Details</h3>

            <div style={styles.formGroup}>
              <label style={styles.label}>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                style={styles.input}
              />
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Tax Registration Number</label>
                <input
                  type="text"
                  name="taxRegistration"
                  value={formData.taxRegistration}
                  onChange={handleChange}
                  placeholder="Enter tax ID"
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Fleet Size</label>
                <div style={styles.selectContainer}>
                  <select
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">Select fleet size</option>
                    <option value="1-5">1-5 vehicles</option>
                    <option value="6-20">6-20 vehicles</option>
                    <option value="21-50">21-50 vehicles</option>
                    <option value="50+">50+ vehicles</option>
                  </select>
                  <ChevronDown size={18} style={styles.selectIcon} />
                </div>
              </div>
            </div>
          </div>

          {/* Company Location Section */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Company Location</h3>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Country</label>
                <div style={styles.selectContainer}>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">Select country</option>
                    <option value="Egypt">Egypt</option>
                    <option value="UAE">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                  </select>
                  <ChevronDown size={18} style={styles.selectIcon} />
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>City</label>
                <div style={styles.selectContainer}>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">Select city</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Giza">Giza</option>
                  </select>
                  <ChevronDown size={18} style={styles.selectIcon} />
                </div>
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter postal code"
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Fleet Manager Data Section */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Fleet Manager Data</h3>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Fleet Manager Name</label>
                <input
                  type="text"
                  name="fleetManagerName"
                  value={formData.fleetManagerName}
                  onChange={handleChange}
                  placeholder="Enter manager name"
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Fleet Manager Name</label>
                <input
                  type="email"
                  name="fleetManagerEmail"
                  value={formData.fleetManagerEmail}
                  onChange={handleChange}
                  placeholder="Enter manager email"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Fleet Manager Code</label>
              <div style={styles.inputContainer}>
                <input
                  type="text"
                  name="fleetManagerCode"
                  value={formData.fleetManagerCode}
                  onChange={handleChange}
                  placeholder="Enter manager code"
                  style={styles.input}
                />
                <span style={styles.inputIcon}>🔐</span>
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Password</label>
                <div style={styles.inputContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
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
              <div style={styles.formGroup}>
                <label style={styles.label}>Confirm Password</label>
                <div style={styles.inputContainer}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    style={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={styles.iconButton}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} color="#999" />
                    ) : (
                      <Eye size={18} color="#999" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            style={{
              ...styles.submitBtn,
              opacity: loading ? 0.7 : 1,
            }}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <div style={styles.signupPrompt}>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setView("Login")}
              style={styles.signupLink}
            >
              Login here
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
    maxWidth: "500px",
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
    gap: "24px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    paddingBottom: "16px",
    borderBottom: "1px solid #e5e7eb",
  },
  sectionTitle: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
    margin: "0",
    textTransform: "capitalize",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  label: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#374151",
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "13px",
    fontFamily: "inherit",
    transition: "all 0.3s",
    backgroundColor: "#f9fafb",
  },
  inputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute",
    right: "12px",
    fontSize: "16px",
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
  selectContainer: {
    position: "relative",
  },
  select: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "13px",
    backgroundColor: "#f9fafb",
    cursor: "pointer",
    fontFamily: "inherit",
    appearance: "none",
    paddingRight: "30px",
  },
  selectIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9ca3af",
    pointerEvents: "none",
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

export default Signup
