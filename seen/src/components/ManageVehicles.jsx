import { useState } from "react"

export default function ManageVehicles() {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      plate: "ABC-1234",
      model: "Toyota Innova",
      status: "Active",
      fuel: "75%",
    },
    {
      id: 2,
      plate: "BCD-5678",
      model: "Mahindra Bolero",
      status: "Active",
      fuel: "60%",
    },
    {
      id: 3,
      plate: "CDE-9012",
      model: "Tata Sumo",
      status: "Maintenance",
      fuel: "40%",
    },
    {
      id: 4,
      plate: "DEF-3456",
      model: "Isuzu D-Max",
      status: "Active",
      fuel: "85%",
    },
    {
      id: 5,
      plate: "EFG-7890",
      model: "Ford Endeavour",
      status: "Active",
      fuel: "55%",
    },
  ])

  const [newVehicle, setNewVehicle] = useState({ plate: "", model: "" })

  const handleAddVehicle = (e) => {
    e.preventDefault()
    if (newVehicle.plate && newVehicle.model) {
      const vehicle = {
        id: vehicles.length + 1,
        ...newVehicle,
        status: "Active",
        fuel: "50%",
      }
      setVehicles([...vehicles, vehicle])
      setNewVehicle({ plate: "", model: "" })
    }
  }

  const handleDeleteVehicle = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id))
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Vehicles</h2>

      <div style={styles.addForm}>
        <h3 style={styles.formTitle}>Add New Vehicle</h3>
        <form onSubmit={handleAddVehicle} style={styles.form}>
          <input
            type="text"
            placeholder="License Plate"
            value={newVehicle.plate}
            onChange={(e) =>
              setNewVehicle({ ...newVehicle, plate: e.target.value })
            }
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Vehicle Model"
            value={newVehicle.model}
            onChange={(e) =>
              setNewVehicle({ ...newVehicle, model: e.target.value })
            }
            style={styles.input}
          />
          <button type="submit" style={styles.addBtn}>
            Add Vehicle
          </button>
        </form>
      </div>

      <div style={styles.tableWrapper}>
        <h3 style={styles.sectionTitle}>Vehicle Fleet</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>License Plate</th>
              <th>Model</th>
              <th>Status</th>
              <th>Fuel Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td style={styles.idCell}>{vehicle.id}</td>
                <td>
                  <strong style={styles.plate}>{vehicle.plate}</strong>
                </td>
                <td>{vehicle.model}</td>
                <td>
                  <span
                    style={{
                      ...styles.badge,
                      backgroundColor:
                        vehicle.status === "Active" ? "#d4edda" : "#fff3cd",
                      color:
                        vehicle.status === "Active" ? "#155724" : "#856404",
                    }}
                  >
                    {vehicle.status}
                  </span>
                </td>
                <td>
                  <div style={styles.fuelBar}>
                    <div
                      style={{
                        ...styles.fuelFill,
                        width: vehicle.fuel,
                        backgroundColor:
                          parseInt(vehicle.fuel) > 50 ? "#27ae60" : "#e74c3c",
                      }}
                    />
                    <span style={styles.fuelText}>{vehicle.fuel}</span>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteVehicle(vehicle.id)}
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
    padding: 20, // ✅ لو عايزة padding زي pageStyles
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
  fuelBar: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "120px",
  },
  fuelFill: {
    flex: 1,
    height: "6px",
    borderRadius: "3px",
    transition: "background-color 0.2s ease",
  },
  fuelText: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#2c3e50",
    minWidth: "35px",
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
