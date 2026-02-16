import React, { useState } from "react"
import { Trash2, Edit2, Eye, Plus, X } from "lucide-react"

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      code: "#VEH-101",
      brand: "Mercedes-Benz",
      type: "Heavy-Duty Trucks",
      model: "EActros",
      capacity: "1 Ton",
      status: "available",
      year: 2023,
      fuelType: "Diesel",
      color: "White",
      mileage: "15,000 km",
    },
    {
      id: 2,
      code: "#VEH-102",
      brand: "Mercedes-Benz",
      type: "Heavy-Duty Trucks",
      model: "EActros",
      capacity: "1 Ton",
      status: "in-use",
      year: 2023,
      fuelType: "Diesel",
      color: "Black",
      mileage: "12,500 km",
    },
    {
      id: 3,
      code: "#VEH-103",
      brand: "Mercedes-Benz",
      type: "Heavy-Duty Trucks",
      model: "EActros",
      capacity: "1 Ton",
      status: "maintenance",
      year: 2023,
      fuelType: "Diesel",
      color: "Silver",
      mileage: "8,200 km",
    },
    {
      id: 4,
      code: "#VEH-104",
      brand: "Mercedes-Benz",
      type: "Heavy-Duty Trucks",
      model: "EActros",
      capacity: "1 Ton",
      status: "available",
      year: 2023,
      fuelType: "Diesel",
      color: "Blue",
      mileage: "20,100 km",
    },
    {
      id: 5,
      code: "#VEH-105",
      brand: "Mercedes-Benz",
      type: "Heavy-Duty Trucks",
      model: "EActros",
      capacity: "1 Ton",
      status: "available",
      year: 2023,
      fuelType: "Diesel",
      color: "White",
      mileage: "18,750 km",
    },
    {
      id: 6,
      code: "#VEH-106",
      brand: "Mercedes-Benz",
      type: "Heavy-Duty Trucks",
      model: "EActros",
      capacity: "1 Ton",
      status: "in-use",
      year: 2023,
      fuelType: "Diesel",
      color: "Red",
      mileage: "5,400 km",
    },
    {
      id: 7,
      code: "#VEH-107",
      brand: "Mercedes-Benz",
      type: "Heavy-Duty Trucks",
      model: "EActros",
      capacity: "1 Ton",
      status: "available",
      year: 2023,
      fuelType: "Diesel",
      color: "Green",
      mileage: "9,800 km",
    },
    {
      id: 8,
      code: "#VEH-108",
      brand: "Mercedes-Benz",
      type: "Heavy-Duty Trucks",
      model: "EActros",
      capacity: "1 Ton",
      status: "available",
      year: 2023,
      fuelType: "Diesel",
      color: "Yellow",
      mileage: "22,300 km",
    },
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const [newVehicle, setNewVehicle] = useState({
    code: "",
    brand: "",
    type: "",
    model: "",
    capacity: "",
    status: "available",
    year: new Date().getFullYear(),
    fuelType: "",
    color: "",
    mileage: "",
  })

  const handleAddVehicle = () => {
    if (newVehicle.brand && newVehicle.model && newVehicle.type) {
      const code = `#VEH-${108 + vehicles.length}`
      setVehicles([
        ...vehicles,
        { id: vehicles.length + 1, ...newVehicle, code },
      ])
      resetForm()
      setShowAddModal(false)
    }
  }

  const handleEditVehicle = () => {
    if (
      selectedVehicle &&
      newVehicle.brand &&
      newVehicle.model &&
      newVehicle.type
    ) {
      setVehicles(
        vehicles.map((vehicle) =>
          vehicle.id === selectedVehicle.id
            ? {
                ...newVehicle,
                id: selectedVehicle.id,
                code: selectedVehicle.code,
              }
            : vehicle,
        ),
      )
      resetForm()
      setShowEditModal(false)
    }
  }

  const handleViewVehicle = (vehicle) => {
    setSelectedVehicle(vehicle)
    setNewVehicle(vehicle)
    setShowViewModal(true)
  }

  const handleEditClick = (vehicle) => {
    setSelectedVehicle(vehicle)
    setNewVehicle(vehicle)
    setShowEditModal(true)
  }

  const handleDelete = (id) => {
    if (window.confirm("Delete this vehicle?")) {
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id))
    }
  }

  const resetForm = () => {
    setNewVehicle({
      code: "",
      brand: "",
      type: "",
      model: "",
      capacity: "",
      status: "available",
      year: new Date().getFullYear(),
      fuelType: "",
      color: "",
      mileage: "",
    })
    setSelectedVehicle(null)
  }

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      vehicle.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const getStatusColor = (status) => {
    const colors = {
      available: { bg: "#d4edda", text: "#155724" },
      "in-use": { bg: "#cce5ff", text: "#004085" },
      maintenance: { bg: "#f8d7da", text: "#721c24" },
    }
    return colors[status] || { bg: "#e2e3e5", text: "#383d41" }
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Manage Vehicles</h2>
        <div style={styles.headerActions}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            <span style={styles.searchIcon}>🔍</span>
          </div>
          <button
            onClick={() => {
              resetForm()
              setShowAddModal(true)
            }}
            style={styles.addBtn}
          >
            <Plus size={18} /> Vehicle
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Code</th>
              <th style={styles.th}>Brand</th>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Model</th>
              <th style={styles.th}>Capacity</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.map((vehicle) => {
              const statusColor = getStatusColor(vehicle.status)
              return (
                <tr key={vehicle.id} style={styles.bodyRow}>
                  <td style={styles.td}>
                    <span style={styles.code}>{vehicle.code}</span>
                  </td>
                  <td style={styles.td}>{vehicle.brand}</td>
                  <td style={styles.td}>{vehicle.type}</td>
                  <td style={styles.td}>{vehicle.model}</td>
                  <td style={styles.td}>{vehicle.capacity}</td>
                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.statusBadge,
                        backgroundColor: statusColor.bg,
                        color: statusColor.text,
                      }}
                    >
                      {vehicle.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.actionButtons}>
                      <button
                        style={styles.actionBtn}
                        onClick={() => handleViewVehicle(vehicle)}
                        title="View"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        style={styles.actionBtn}
                        onClick={() => handleEditClick(vehicle)}
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        style={{ ...styles.actionBtn, color: "#ef4444" }}
                        onClick={() => handleDelete(vehicle.id)}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Add Vehicle Modal */}
      {showAddModal && (
        <Modal
          title="Add"
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddVehicle}
          submitText="Save"
        >
          <VehicleForm vehicle={newVehicle} setVehicle={setNewVehicle} />
        </Modal>
      )}

      {/* Edit Vehicle Modal */}
      {showEditModal && (
        <Modal
          title="Edit"
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditVehicle}
          submitText="Save"
        >
          <VehicleForm vehicle={newVehicle} setVehicle={setNewVehicle} />
        </Modal>
      )}

      {/* View Vehicle Modal */}
      {showViewModal && selectedVehicle && (
        <Modal
          title="View"
          onClose={() => setShowViewModal(false)}
          hideActions={true}
        >
          <VehicleViewContent vehicle={selectedVehicle} />
        </Modal>
      )}
    </div>
  )
}

const Modal = ({
  title,
  onClose,
  onSubmit,
  submitText = "Save",
  hideActions = false,
  children,
}) => (
  <div style={styles.modalOverlay} onClick={onClose}>
    <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
      <div style={styles.modalHeader}>
        <h2 style={styles.modalTitle}>{title}</h2>
        <button onClick={onClose} style={styles.closeBtn}>
          ×
        </button>
      </div>

      <div style={styles.modalBody}>{children}</div>

      {!hideActions && (
        <div style={styles.modalFooter}>
          <button onClick={onClose} style={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={onSubmit} style={styles.submitBtn}>
            {submitText}
          </button>
        </div>
      )}
    </div>
  </div>
)

const VehicleForm = ({ vehicle, setVehicle }) => {
  const fuelTypes = ["Diesel", "Petrol", "Electric", "Hybrid"]
  const vehicleTypes = [
    "Heavy-Duty Trucks",
    "Light Trucks",
    "Vans",
    "Semi-Trucks",
    "Buses",
  ]
  const colors = [
    "White",
    "Black",
    "Silver",
    "Blue",
    "Red",
    "Green",
    "Yellow",
    "Gray",
  ]
  const statuses = ["available", "in-use", "maintenance"]

  return (
    <div style={styles.formContainer}>
      <div style={styles.formTwoColumn}>
        <div>
          <label style={styles.formLabel}>Truck Brand</label>
          <input
            type="text"
            value={vehicle.brand}
            onChange={(e) => setVehicle({ ...vehicle, brand: e.target.value })}
            placeholder="e.g., Mercedes-Benz"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.formLabel}>Truck Code</label>
          <input
            type="text"
            value={vehicle.code}
            onChange={(e) => setVehicle({ ...vehicle, code: e.target.value })}
            placeholder="e.g., #VEH-101"
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.formTwoColumn}>
        <div>
          <label style={styles.formLabel}>Type</label>
          <select
            value={vehicle.type}
            onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
            style={styles.select}
          >
            <option value="">Select Type</option>
            {vehicleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={styles.formLabel}>Model</label>
          <input
            type="text"
            value={vehicle.model}
            onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
            placeholder="e.g., EActros"
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.formTwoColumn}>
        <div>
          <label style={styles.formLabel}>Capacity</label>
          <input
            type="text"
            value={vehicle.capacity}
            onChange={(e) =>
              setVehicle({ ...vehicle, capacity: e.target.value })
            }
            placeholder="e.g., 1 Ton"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.formLabel}>Year</label>
          <input
            type="number"
            value={vehicle.year}
            onChange={(e) =>
              setVehicle({ ...vehicle, year: parseInt(e.target.value) })
            }
            min="2000"
            max={new Date().getFullYear()}
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.formTwoColumn}>
        <div>
          <label style={styles.formLabel}>Fuel Type</label>
          <select
            value={vehicle.fuelType}
            onChange={(e) =>
              setVehicle({ ...vehicle, fuelType: e.target.value })
            }
            style={styles.select}
          >
            <option value="">Select Fuel Type</option>
            {fuelTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={styles.formLabel}>Color</label>
          <select
            value={vehicle.color}
            onChange={(e) => setVehicle({ ...vehicle, color: e.target.value })}
            style={styles.select}
          >
            <option value="">Select Color</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={styles.formTwoColumn}>
        <div>
          <label style={styles.formLabel}>Mileage</label>
          <input
            type="text"
            value={vehicle.mileage}
            onChange={(e) =>
              setVehicle({ ...vehicle, mileage: e.target.value })
            }
            placeholder="e.g., 10,000 km"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.formLabel}>Status</label>
          <select
            value={vehicle.status}
            onChange={(e) => setVehicle({ ...vehicle, status: e.target.value })}
            style={styles.select}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

const VehicleViewContent = ({ vehicle }) => (
  <div style={styles.viewContainer}>
    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>Truck Brand</label>
        <p style={styles.viewValue}>{vehicle.brand}</p>
      </div>
      <div>
        <label style={styles.viewLabel}>Truck Code</label>
        <p style={styles.viewValue}>{vehicle.code}</p>
      </div>
    </div>

    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>Heavy-Duty Trucks</label>
        <p style={styles.viewValue}>{vehicle.type}</p>
      </div>
      <div>
        <label style={styles.viewLabel}>Model</label>
        <p style={styles.viewValue}>{vehicle.model}</p>
      </div>
    </div>

    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>Capacity</label>
        <p style={styles.viewValue}>{vehicle.capacity}</p>
      </div>
      <div>
        <label style={styles.viewLabel}>Year</label>
        <p style={styles.viewValue}>{vehicle.year}</p>
      </div>
    </div>

    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>Fuel Type</label>
        <p style={styles.viewValue}>{vehicle.fuelType}</p>
      </div>
      <div>
        <label style={styles.viewLabel}>Color</label>
        <p style={styles.viewValue}>{vehicle.color}</p>
      </div>
    </div>

    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>Mileage</label>
        <p style={styles.viewValue}>{vehicle.mileage}</p>
      </div>
      <div>
        <label style={styles.viewLabel}>Status</label>
        <p style={styles.viewValue}>{vehicle.status}</p>
      </div>
    </div>
  </div>
)

const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#F8F9FB",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "24px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: "0 0 20px 0",
  },
  headerActions: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  searchContainer: {
    position: "relative",
    flex: "1",
    minWidth: "200px",
  },
  searchInput: {
    width: "100%",
    padding: "10px 16px 10px 40px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
  },
  searchIcon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9ca3af",
  },
  addBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    backgroundColor: "#1a3a52",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s",
  },
  tableContainer: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    overflow: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  headerRow: {
    backgroundColor: "#f3f4f6",
    borderBottom: "2px solid #e5e7eb",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left",
    fontWeight: "600",
    color: "#374151",
    fontSize: "13px",
  },
  bodyRow: {
    borderBottom: "1px solid #e5e7eb",
    transition: "all 0.3s",
  },
  td: {
    padding: "14px 16px",
    fontSize: "13px",
    color: "#374151",
  },
  code: {
    fontWeight: "600",
    color: "#1a3a52",
  },
  statusBadge: {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
  },
  actionButtons: {
    display: "flex",
    gap: "8px",
  },
  actionBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#3b82f6",
    fontSize: "16px",
    padding: "4px 8px",
    transition: "all 0.3s",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "90%",
    maxHeight: "90vh",
    overflow: "auto",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    backgroundColor: "white",
  },
  modalTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: 0,
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "28px",
    cursor: "pointer",
    color: "#9ca3af",
    padding: 0,
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBody: {
    padding: "24px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  formTwoColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  formLabel: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "6px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "13px",
    fontFamily: "inherit",
    transition: "all 0.3s",
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "13px",
    backgroundColor: "white",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.3s",
    boxSizing: "border-box",
  },
  modalFooter: {
    display: "flex",
    gap: "12px",
    padding: "20px 24px",
    borderTop: "1px solid #e5e7eb",
    position: "sticky",
    bottom: 0,
    backgroundColor: "white",
  },
  cancelBtn: {
    flex: 1,
    padding: "10px 16px",
    backgroundColor: "#f3f4f6",
    color: "#374151",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s",
  },
  submitBtn: {
    flex: 1,
    padding: "10px 16px",
    backgroundColor: "#1a3a52",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s",
  },
  viewContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  viewTwoColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  viewLabel: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#6b7280",
    marginBottom: "6px",
    display: "block",
  },
  viewValue: {
    fontSize: "14px",
    color: "#374151",
    fontWeight: "500",
    margin: 0,
  },
}

export default ManageVehicles
