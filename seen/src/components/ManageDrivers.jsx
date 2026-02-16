import React, { useState } from "react"
import { Trash2, Edit2, Eye, Plus, X, Upload, Camera } from "lucide-react"

const ManageDrivers = () => {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      code: "#DRV-148",
      name: "Ahmed Abdalhamad",
      phone: "+20 1505268845",
      licenseId: "A555897451",
      assignedVehicle: "Vehicle 1",
      status: "active",
      email: "ahmed@example.com",
      dateOfBirth: "1990-05-15",
      licenseExpiry: "2025-12-31",
      avatar: "👨",
    },
    {
      id: 2,
      code: "#DRV-149",
      name: "Mohammed Hassan",
      phone: "+20 1512345678",
      licenseId: "A555897452",
      assignedVehicle: "Vehicle 2",
      status: "active",
      email: "mohammed@example.com",
      dateOfBirth: "1992-03-20",
      licenseExpiry: "2026-06-30",
      avatar: "👨",
    },
    {
      id: 3,
      code: "#DRV-150",
      name: "Fatima Ali",
      phone: "+20 1587654321",
      licenseId: "A555897453",
      assignedVehicle: "Vehicle 3",
      status: "inactive",
      email: "fatima@example.com",
      dateOfBirth: "1988-07-10",
      licenseExpiry: "2024-09-15",
      avatar: "👩",
    },
    {
      id: 4,
      code: "#DRV-151",
      name: "Omar Ibrahim",
      phone: "+20 1598765432",
      licenseId: "A555897454",
      assignedVehicle: "Vehicle 4",
      status: "active",
      email: "omar@example.com",
      dateOfBirth: "1995-11-25",
      licenseExpiry: "2027-01-20",
      avatar: "👨",
    },
    {
      id: 5,
      code: "#DRV-152",
      name: "Layla Mohamed",
      phone: "+20 1578901234",
      licenseId: "A555897455",
      assignedVehicle: "Vehicle 5",
      status: "active",
      email: "layla@example.com",
      dateOfBirth: "1991-09-08",
      licenseExpiry: "2025-05-10",
      avatar: "👩",
    },
    {
      id: 6,
      code: "#DRV-153",
      name: "Youssef Youssef",
      phone: "+20 1589234567",
      licenseId: "A555897456",
      assignedVehicle: "Vehicle 6",
      status: "active",
      email: "youssef@example.com",
      dateOfBirth: "1994-02-14",
      licenseExpiry: "2026-08-05",
      avatar: "👨",
    },
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const [newDriver, setNewDriver] = useState({
    code: "",
    name: "",
    phone: "",
    licenseId: "",
    assignedVehicle: "",
    status: "active",
    email: "",
    dateOfBirth: "",
    licenseExpiry: "",
  })

  const handleAddDriver = () => {
    if (newDriver.name && newDriver.phone && newDriver.licenseId) {
      const code = `#DRV-${152 + drivers.length}`
      setDrivers([
        ...drivers,
        { id: drivers.length + 1, ...newDriver, code, avatar: "👨" },
      ])
      resetForm()
      setShowAddModal(false)
    }
  }

  const handleEditDriver = () => {
    if (
      selectedDriver &&
      newDriver.name &&
      newDriver.phone &&
      newDriver.licenseId
    ) {
      setDrivers(
        drivers.map((driver) =>
          driver.id === selectedDriver.id
            ? {
                ...newDriver,
                id: selectedDriver.id,
                code: selectedDriver.code,
                avatar: selectedDriver.avatar,
              }
            : driver,
        ),
      )
      resetForm()
      setShowEditModal(false)
    }
  }

  const handleViewDriver = (driver) => {
    setSelectedDriver(driver)
    setNewDriver(driver)
    setShowViewModal(true)
  }

  const handleEditClick = (driver) => {
    setSelectedDriver(driver)
    setNewDriver(driver)
    setShowEditModal(true)
  }

  const handleDelete = (id) => {
    if (window.confirm("Delete this driver?")) {
      setDrivers(drivers.filter((driver) => driver.id !== id))
    }
  }

  const resetForm = () => {
    setNewDriver({
      code: "",
      name: "",
      phone: "",
      licenseId: "",
      assignedVehicle: "",
      status: "active",
      email: "",
      dateOfBirth: "",
      licenseExpiry: "",
    })
    setSelectedDriver(null)
  }

  const filteredDrivers = drivers.filter((driver) => {
    const matchesStatus =
      filterStatus === "all" || driver.status === filterStatus
    const matchesSearch =
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.includes(searchTerm) ||
      driver.email.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Manage Drivers</h2>
        <div style={styles.headerActions}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search driver..."
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
            <Plus size={18} /> Add Driver
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Code</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Phone Number</th>
              <th style={styles.th}>License ID</th>
              <th style={styles.th}>Assigned Vehicle</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrivers.map((driver) => (
              <tr key={driver.id} style={styles.bodyRow}>
                <td style={styles.td}>
                  <span style={styles.code}>{driver.code}</span>
                </td>
                <td style={styles.td}>{driver.name}</td>
                <td style={styles.td}>{driver.phone}</td>
                <td style={styles.td}>{driver.licenseId}</td>
                <td style={styles.td}>{driver.assignedVehicle}</td>
                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.statusBadge,
                      backgroundColor:
                        driver.status === "active" ? "#d4edda" : "#f8d7da",
                      color: driver.status === "active" ? "#155724" : "#721c24",
                    }}
                  >
                    {driver.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button
                      style={styles.actionBtn}
                      onClick={() => handleViewDriver(driver)}
                      title="View"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      style={styles.actionBtn}
                      onClick={() => handleEditClick(driver)}
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      style={{ ...styles.actionBtn, color: "#ef4444" }}
                      onClick={() => handleDelete(driver.id)}
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Driver Modal */}
      {showAddModal && (
        <Modal
          title="Add Driver"
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddDriver}
          submitText="Save"
        >
          <DriverForm
            driver={newDriver}
            setDriver={setNewDriver}
            isEditMode={false}
          />
        </Modal>
      )}

      {/* Edit Driver Modal */}
      {showEditModal && (
        <Modal
          title="Edit Driver"
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditDriver}
          submitText="Save"
        >
          <DriverForm
            driver={newDriver}
            setDriver={setNewDriver}
            isEditMode={true}
          />
        </Modal>
      )}

      {/* View Driver Modal */}
      {showViewModal && selectedDriver && (
        <Modal
          title="View Driver"
          onClose={() => setShowViewModal(false)}
          hideActions={true}
        >
          <DriverViewContent driver={selectedDriver} />
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

const DriverForm = ({ driver, setDriver, isEditMode }) => {
  const [showAvatarUpload, setShowAvatarUpload] = useState(false)

  return (
    <div style={styles.formContainer}>
      <div style={styles.formTwoColumn}>
        <div style={styles.formSection}>
          <div style={styles.avatarSection}>
            <div style={styles.avatarContainer}>
              <span style={styles.avatarEmoji}>{driver.avatar || "👨"}</span>
            </div>
            <button
              type="button"
              style={styles.uploadBtn}
              onClick={() => setShowAvatarUpload(!showAvatarUpload)}
            >
              <Camera size={16} />
              {isEditMode ? "Change" : "Upload"} Photo
            </button>
            {showAvatarUpload && (
              <input type="file" accept="image/*" style={styles.fileInput} />
            )}
          </div>

          <div>
            <label style={styles.formLabel}>Driver Name</label>
            <input
              type="text"
              value={driver.name}
              onChange={(e) => setDriver({ ...driver, name: e.target.value })}
              placeholder="Enter driver name"
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.formSection}>
          <div style={styles.dummySpace}></div>
          <div>
            <label style={styles.formLabel}>Email</label>
            <input
              type="email"
              value={driver.email}
              onChange={(e) => setDriver({ ...driver, email: e.target.value })}
              placeholder="Enter email"
              style={styles.input}
            />
          </div>
        </div>
      </div>

      <div style={styles.formTwoColumn}>
        <div>
          <label style={styles.formLabel}>Phone Number</label>
          <input
            type="tel"
            value={driver.phone}
            onChange={(e) => setDriver({ ...driver, phone: e.target.value })}
            placeholder="Enter phone number"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.formLabel}>Date of Birth</label>
          <input
            type="date"
            value={driver.dateOfBirth}
            onChange={(e) =>
              setDriver({ ...driver, dateOfBirth: e.target.value })
            }
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.formTwoColumn}>
        <div>
          <label style={styles.formLabel}>License ID</label>
          <input
            type="text"
            value={driver.licenseId}
            onChange={(e) =>
              setDriver({ ...driver, licenseId: e.target.value })
            }
            placeholder="Enter license ID"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.formLabel}>License Expiry</label>
          <input
            type="date"
            value={driver.licenseExpiry}
            onChange={(e) =>
              setDriver({ ...driver, licenseExpiry: e.target.value })
            }
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.formTwoColumn}>
        <div>
          <label style={styles.formLabel}>Assigned Vehicle</label>
          <select
            value={driver.assignedVehicle}
            onChange={(e) =>
              setDriver({ ...driver, assignedVehicle: e.target.value })
            }
            style={styles.select}
          >
            <option value="">Select vehicle</option>
            <option value="Vehicle 1">Vehicle 1</option>
            <option value="Vehicle 2">Vehicle 2</option>
            <option value="Vehicle 3">Vehicle 3</option>
            <option value="Vehicle 4">Vehicle 4</option>
            <option value="Vehicle 5">Vehicle 5</option>
          </select>
        </div>
        <div>
          <label style={styles.formLabel}>Status</label>
          <select
            value={driver.status}
            onChange={(e) => setDriver({ ...driver, status: e.target.value })}
            style={styles.select}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  )
}

const DriverViewContent = ({ driver }) => (
  <div style={styles.viewContainer}>
    <div style={styles.viewTwoColumn}>
      <div style={styles.viewLeft}>
        <div style={styles.viewAvatarContainer}>
          <span style={styles.viewAvatarEmoji}>{driver.avatar}</span>
        </div>
        <p style={styles.viewName}>{driver.name}</p>
      </div>

      <div style={styles.viewRight}>
        <div style={styles.licenseCard}>
          <p style={styles.licenseCardTitle}>📋 License Information</p>
          <p style={styles.licenseCardInfo}>License ID: {driver.licenseId}</p>
          <p style={styles.licenseCardInfo}>Expires: {driver.licenseExpiry}</p>
        </div>
      </div>
    </div>

    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>Address</label>
        <p style={styles.viewValue}>{driver.email || "N/A"}</p>
      </div>
      <div>
        <label style={styles.viewLabel}>Phone Number</label>
        <p style={styles.viewValue}>{driver.phone}</p>
      </div>
    </div>

    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>Date of Birth</label>
        <p style={styles.viewValue}>{driver.dateOfBirth || "N/A"}</p>
      </div>
      <div>
        <label style={styles.viewLabel}>Assigned Vehicle</label>
        <p style={styles.viewValue}>{driver.assignedVehicle}</p>
      </div>
    </div>

    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>License ID</label>
        <p style={styles.viewValue}>{driver.licenseId}</p>
      </div>
      <div>
        <label style={styles.viewLabel}>Password</label>
        <p style={styles.viewValue}>••••••••</p>
      </div>
    </div>

    <div style={styles.viewTwoColumn}>
      <div>
        <label style={styles.viewLabel}>Status</label>
        <p
          style={{
            ...styles.viewValue,
            color: driver.status === "active" ? "#155724" : "#721c24",
          }}
        >
          {driver.status}
        </p>
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
    maxWidth: "700px",
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
    gap: "20px",
  },
  formTwoColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  formSection: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  avatarSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  avatarContainer: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #e5e7eb",
  },
  avatarEmoji: {
    fontSize: "40px",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 12px",
    backgroundColor: "#f3f4f6",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
    color: "#374151",
    transition: "all 0.3s",
  },
  fileInput: {
    display: "none",
  },
  dummySpace: {
    height: "0",
  },
  formLabel: {
    fontSize: "13px",
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
  },
  select: {
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "13px",
    backgroundColor: "white",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.3s",
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
  viewLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  viewRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  viewAvatarContainer: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #e5e7eb",
  },
  viewAvatarEmoji: {
    fontSize: "50px",
  },
  viewName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: 0,
  },
  licenseCard: {
    backgroundColor: "#f3f4f6",
    padding: "16px",
    borderRadius: "8px",
    borderLeft: "4px solid #1a3a52",
  },
  licenseCardTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#1a3a52",
    margin: "0 0 8px 0",
  },
  licenseCardInfo: {
    fontSize: "12px",
    color: "#6b7280",
    margin: "4px 0",
  },
  viewLabel: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#6b7280",
    marginBottom: "6px",
  },
  viewValue: {
    fontSize: "14px",
    color: "#374151",
    fontWeight: "500",
    margin: 0,
  },
}

export default ManageDrivers
