import React from "react"
import "../styles/Signup.css"

export default function Signup() {
  return (
    <div className="signup-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <div className="logo-circle">SAV</div>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </div>
      </div>

      {/* Form Card */}
      <div className="signup-card">
        <h2>Signup</h2>

        <div className="section">
          <h4>Company Details</h4>

          <input type="text" placeholder="Company Name" />

          <div className="row">
            <input type="text" placeholder="Tax Registration Number" />
            <select>
              <option>Fleet Size</option>
              <option>1 - 10</option>
              <option>10 - 50</option>
              <option>50+</option>
            </select>
          </div>
        </div>

        <div className="section">
          <h4>Company Location</h4>

          <div className="row">
            <select>
              <option>Country</option>
              <option>Egypt</option>
              <option>Saudi Arabia</option>
            </select>

            <select>
              <option>City</option>
              <option>Cairo</option>
              <option>Riyadh</option>
            </select>
          </div>

          <div className="row">
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Postal Code" />
          </div>
        </div>

        <div className="section">
          <h4>Fleet Manager Data</h4>

          <div className="row">
            <input type="text" placeholder="Fleet Manager Name" />
            <input type="text" placeholder="Fleet Manager Phone" />
          </div>

          <input type="text" placeholder="Fleet Manager Code" />

          <div className="row">
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>

        <button className="register-btn">Register</button>
      </div>
    </div>
  )
}
