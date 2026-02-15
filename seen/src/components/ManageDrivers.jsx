import { useState } from "react"

export default function ManageDrivers() {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "John Smith",
      license: "DL-2021-001",
      status: "Active",
      trips: 45,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      license: "DL-2021-002",
      status: "Active",
      trips: 38,
    },
    {
      id: 3,
      name: "Mike Wilson",
      license: "DL-2021-003",
      status: "Inactive",
      trips: 32,
    },
    {
      id: 4,
      name: "Emily Brown",
      license: "DL-2021-004",
      status: "Active",
      trips: 52,
    },
    {
      id: 5,
      name: "David Lee",
      license: "DL-2021-005",
      status: "Active",
      trips: 41,
    },
  ])

  const [newDriver, setNewDriver] = useState({ name: "", license: "" })

  const handleAddDriver = (e) => {
    e.preventDefault()
    if (newDriver.name && newDriver.license) {
      const driver = {
        id: drivers.length + 1,
        ...newDriver,
        status: "Active",
        trips: 0,
      }
      setDrivers([...drivers, driver])
      setNewDriver({ name: "", license: "" })
    }
  }

  const handleDeleteDriver = (id) => {
    setDrivers(drivers.filter((d) => d.id !== id))
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Drivers</h2>

      <div style={styles.addForm}>
        <h3 style={styles.formTitle}>Add New Driver</h3>
        <form onSubmit={handleAddDriver} style={styles.form}>
          <input
            type="text"
            placeholder="Driver Name"
            value={newDriver.name}
            onChange={(e) =>
              setNewDriver({ ...newDriver, name: e.target.value })
            }
            style={styles.input}
          />
          <input
            type="text"
            placeholder="License Number"
            value={newDriver.license}
            onChange={(e) =>
              setNewDriver({ ...newDriver, license: e.target.value })
            }
            style={styles.input}
          />
          <button type="submit" style={styles.addBtn}>
            Add Driver
          </button>
        </form>
      </div>

      <div style={styles.tableWrapper}>
        <h3 style={styles.sectionTitle}>Driver List</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>License</th>
              <th>Status</th>
              <th>Trips</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td style={styles.idCell}>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.license}</td>
                <td>
                  <span
                    style={{
                      ...styles.badge,
                      backgroundColor:
                        driver.status === "Active" ? "#d4edda" : "#f8d7da",
                      color: driver.status === "Active" ? "#155724" : "#721c24",
                    }}
                  >
                    {driver.status}
                  </span>
                </td>
                <td>{driver.trips}</td>
                <td>
                  <button
                    onClick={() => handleDeleteDriver(driver.id)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "24px",
  },
  addForm: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "32px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  formTitle: {
    margin: "0 0 16px 0",
    fontSize: "18px",
    fontWeight: "600",
    color: "#2c3e50",
  },
  form: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  input: {
    flex: "1 1 200px",
    padding: "12px 16px",
    border: "2px solid #ecf0f1",
    borderRadius: "8px",
    fontSize: "16px",
    fontFamily: "inherit",
  },
  addBtn: {
    padding: "12px 24px",
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  tableWrapper: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    overflowX: "auto",
  },
  sectionTitle: {
    margin: "0 0 16px 0",
    fontSize: "18px",
    fontWeight: "600",
    color: "#2c3e50",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  idCell: {
    width: "50px",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
  },
  deleteBtn: {
    padding: "6px 12px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
}
