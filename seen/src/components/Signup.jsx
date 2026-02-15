import React, { useState } from "react"
import "../styles/Signup.css"

export default function SignupForm() {
  const [form, setForm] = useState({
    companyName: "",
    taxRegistration: "",
    fleetSize: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    fleetManagerName: "",
    fleetManagerPhone: "",
    fleetManagerCode: "",
    password: "",
    confirmPassword: "",
  })

  const [error, setError] = useState("")

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match")
      return
    }
    // Replace with your submit logic (API call)
    console.log("Submitting form:", form)
    alert("Form submitted (check console).")
  }

  return (
    <div className="signup-page">
     

      <main className="card-wrap">
        <form className="signup-card" onSubmit={handleSubmit}>
          <h2 className="card-title">Signup</h2>

          {/* Company Details */}
          <div className="section">
            <h4>Company Details</h4>

            <label>
              Company Name
              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />
            </label>

            <div className="row">
              <label>
                Tax Registration Number
                <input
                  name="taxRegistration"
                  value={form.taxRegistration}
                  onChange={handleChange}
                  placeholder="Tax Registration Number"
                />
              </label>

              <label>
                Fleet Size
                <select
                  name="fleetSize"
                  value={form.fleetSize}
                  onChange={handleChange}
                >
                  <option value="">Select fleet size</option>
                  <option value="1-10">1 - 10</option>
                  <option value="11-50">11 - 50</option>
                  <option value="50+">50+</option>
                </select>
              </label>
            </div>
          </div>

          {/* Company Location */}
          <div className="section">
            <h4>Company Location</h4>

            <div className="row">
              <label>
                Country
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                >
                  <option value="">Select country</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="UAE">UAE</option>
                </select>
              </label>

              <label>
                City
                <select name="city" value={form.city} onChange={handleChange}>
                  <option value="">Select city</option>
                  <option value="Cairo">Cairo</option>
                  <option value="Alexandria">Alexandria</option>
                </select>
              </label>
            </div>

            <div className="row">
              <label>
                Address
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              </label>

              <label>
                Postal Code
                <input
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                />
              </label>
            </div>
          </div>

          {/* Fleet Manager Data */}
          <div className="section">
            <h4>Fleet Manager Data</h4>

            <div className="row">
              <label>
                Fleet Manager Name
                <input
                  name="fleetManagerName"
                  value={form.fleetManagerName}
                  onChange={handleChange}
                  placeholder="Fleet Manager Name"
                />
              </label>

              <label>
                Fleet Manager Phone
                <input
                  name="fleetManagerPhone"
                  value={form.fleetManagerPhone}
                  onChange={handleChange}
                  placeholder="Fleet Manager Phone"
                />
              </label>
            </div>

            <label>
              Fleet Manager Code
              <input
                name="fleetManagerCode"
                value={form.fleetManagerCode}
                onChange={handleChange}
                placeholder="Fleet Manager Code"
              />
            </label>

            <div className="row">
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </label>

              <label>
                Confirm Password
                <input
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
              </label>
            </div>
          </div>

          {error && <div className="error">{error}</div>}

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </main>
    </div>
  )
}
