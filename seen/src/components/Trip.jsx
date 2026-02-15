import { useState } from "react"

export default function Trip() {
  const [trips, setTrips] = useState([
    {
      id: 1,
      driver: "John Smith",
      vehicle: "ABC-1234",
      from: "New York",
      to: "Boston",
      date: "2024-01-15",
      distance: "215 km",
      status: "Completed",
    },
    {
      id: 2,
      driver: "Sarah Johnson",
      vehicle: "BCD-5678",
      from: "Chicago",
      to: "Detroit",
      date: "2024-01-15",
      distance: "280 km",
      status: "In Progress",
    },
    {
      id: 3,
      driver: "Mike Wilson",
      vehicle: "CDE-9012",
      from: "Houston",
      to: "Dallas",
      date: "2024-01-15",
      distance: "240 km",
      status: "Completed",
    },
  ])

  const [newTrip, setNewTrip] = useState({
    driver: "",
    vehicle: "",
    from: "",
    to: "",
  })

  const handleAddTrip = (e) => {
    e.preventDefault()
    if (newTrip.driver && newTrip.vehicle && newTrip.from && newTrip.to) {
      const trip = {
        id: trips.length + 1,
        ...newTrip,
        date: new Date().toISOString().split("T")[0],
        distance: "0 km",
        status: "In Progress",
      }
      setTrips([...trips, trip])
      setNewTrip({ driver: "", vehicle: "", from: "", to: "" })
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Trips</h2>

      <div style={styles.addForm}>
        <h3 style={styles.formTitle}>Create New Trip</h3>
        <form onSubmit={handleAddTrip} style={styles.form}>
          <input
            type="text"
            placeholder="Driver Name"
            value={newTrip.driver}
            onChange={(e) => setNewTrip({ ...newTrip, driver: e.target.value })}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Vehicle Plate"
            value={newTrip.vehicle}
            onChange={(e) =>
              setNewTrip({ ...newTrip, vehicle: e.target.value })
            }
            style={styles.input}
          />
          <input
            type="text"
            placeholder="From Location"
            value={newTrip.from}
            onChange={(e) => setNewTrip({ ...newTrip, from: e.target.value })}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="To Location"
            value={newTrip.to}
            onChange={(e) => setNewTrip({ ...newTrip, to: e.target.value })}
            style={styles.input}
          />
          <button type="submit" style={styles.addBtn}>
            Create Trip
          </button>
        </form>
      </div>

      <div style={styles.tableWrapper}>
        <h3 style={styles.sectionTitle}>Trip History</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Driver</th>
              <th>Vehicle</th>
              <th>Route</th>
              <th>Distance</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id}>
                <td style={styles.idCell}>{trip.id}</td>
                <td>{trip.driver}</td>
                <td>
                  <strong style={styles.plate}>{trip.vehicle}</strong>
                </td>
                <td>
                  {trip.from} → {trip.to}
                </td>
                <td>{trip.distance}</td>
                <td>
                  <span
                    style={{
                      ...styles.badge,
                      backgroundColor:
                        trip.status === "Completed" ? "#d4edda" : "#cfe2ff",
                      color:
                        trip.status === "Completed" ? "#155724" : "#084298",
                    }}
                  >
                    {trip.status}
                  </span>
                </td>
                <td>{trip.date}</td>
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
    flex: "1 1 180px",
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
  plate: {
    color: "#3498db",
    fontFamily: "monospace",
  },
  badge: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
  },
}
