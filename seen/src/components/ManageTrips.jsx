import React, { useState } from "react"
import {
  Trash2,
  Edit2,
  Eye,
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const ManageTrips = () => {
  const [trips, setTrips] = useState([
    {
      id: 1,
      tripNo: "#1001",
      driver: "Ahmed Abdalhamad",
      destination: "Assiut",
      distance: "250 km",
      date: "12/10/2025",
      alerts: "3",
      status: "completed",
      time: "12:00 PM",
    },
    {
      id: 2,
      tripNo: "#1002",
      driver: "Mohammed Hassan",
      destination: "Cairo",
      distance: "180 km",
      date: "12/10/2025",
      alerts: "1",
      status: "active",
      time: "2:30 PM",
    },
    {
      id: 3,
      tripNo: "#1003",
      driver: "Fatima Ali",
      destination: "Alexandria",
      distance: "220 km",
      date: "12/10/2025",
      alerts: "2",
      status: "pending",
      time: "4:15 PM",
    },
    {
      id: 4,
      tripNo: "#1004",
      driver: "Ahmed Abdalhamad",
      destination: "Giza",
      distance: "45 km",
      date: "12/10/2025",
      alerts: "0",
      status: "completed",
      time: "10:45 AM",
    },
    {
      id: 5,
      tripNo: "#1005",
      driver: "Ahmed Abdalhamad",
      destination: "Assiut",
      distance: "250 km",
      date: "12/10/2025",
      alerts: "1",
      status: "active",
      time: "3:20 PM",
    },
    {
      id: 6,
      tripNo: "#1006",
      driver: "Ahmed Abdalhamad",
      destination: "Assiut",
      distance: "250 km",
      date: "12/10/2025",
      alerts: "2",
      status: "completed",
      time: "9:00 AM",
    },
    {
      id: 7,
      tripNo: "#1007",
      driver: "Ahmed Abdalhamad",
      destination: "Assiut",
      distance: "250 km",
      date: "12/10/2025",
      alerts: "3",
      status: "pending",
      time: "5:45 PM",
    },
    {
      id: 8,
      tripNo: "#1008",
      driver: "Ahmed Abdalhamad",
      destination: "Assiut",
      distance: "250 km",
      date: "12/10/2025",
      alerts: "1",
      status: "completed",
      time: "1:15 PM",
    },
    {
      id: 9,
      tripNo: "#1009",
      driver: "Ahmed Abdalhamad",
      destination: "Assiut",
      distance: "250 km",
      date: "12/10/2025",
      alerts: "2",
      status: "active",
      time: "6:00 PM",
    },
    {
      id: 10,
      tripNo: "#1010",
      driver: "Ahmed Abdalhamad",
      destination: "Assiut",
      distance: "250 km",
      date: "12/10/2025",
      alerts: "0",
      status: "completed",
      time: "11:30 AM",
    },
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10))
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState("00:00")

  const [newTrip, setNewTrip] = useState({
    tripNo: "",
    driver: "",
    destination: "",
    distance: "",
    date: "",
    alerts: "0",
    status: "pending",
    time: "00:00",
  })

  // Calendar generation
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    )
  }

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    )
  }

  const handleAddTrip = () => {
    if (
      newTrip.tripNo &&
      newTrip.driver &&
      newTrip.destination &&
      selectedDate
    ) {
      const dateStr = `${currentMonth.getMonth() + 1}/${selectedDate}/${currentMonth.getFullYear()}`
      setTrips([
        ...trips,
        {
          id: trips.length + 1,
          ...newTrip,
          date: dateStr,
          time: selectedTime,
        },
      ])
      resetForm()
      setShowAddModal(false)
    }
  }

  const handleEditTrip = () => {
    if (
      selectedTrip &&
      newTrip.tripNo &&
      newTrip.driver &&
      newTrip.destination
    ) {
      const dateStr = `${currentMonth.getMonth() + 1}/${selectedDate}/${currentMonth.getFullYear()}`
      setTrips(
        trips.map((trip) =>
          trip.id === selectedTrip.id
            ? {
                ...newTrip,
                id: selectedTrip.id,
                date: dateStr,
                time: selectedTime,
              }
            : trip,
        ),
      )
      resetForm()
      setShowEditModal(false)
    }
  }

  const handleViewTrip = (trip) => {
    setSelectedTrip(trip)
    setNewTrip(trip)
    setShowViewModal(true)
  }

  const handleEditClick = (trip) => {
    setSelectedTrip(trip)
    setNewTrip(trip)
    const [month, day, year] = trip.date.split("/")
    setCurrentMonth(new Date(year, month - 1))
    setSelectedDate(parseInt(day))
    setSelectedTime(trip.time)
    setShowEditModal(true)
  }

  const handleDelete = (id) => {
    if (window.confirm("Delete this trip?")) {
      setTrips(trips.filter((trip) => trip.id !== id))
    }
  }

  const resetForm = () => {
    setNewTrip({
      tripNo: "",
      driver: "",
      destination: "",
      distance: "",
      date: "",
      alerts: "0",
      status: "pending",
      time: "00:00",
    })
    setSelectedDate(null)
    setSelectedTime("00:00")
    setCurrentMonth(new Date(2025, 10))
  }

  const filteredTrips = trips.filter((trip) => {
    const matchesStatus = filterStatus === "all" || trip.status === filterStatus
    const matchesSearch =
      trip.tripNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const calendarDays = generateCalendarDays()
  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Manage trip</h2>
        <div style={styles.headerActions}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search By Date"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            <span style={styles.searchIcon}>🔍</span>
          </div>
          <div style={styles.filterTabs}>
            <button
              style={{
                ...styles.filterBtn,
                backgroundColor: filterStatus === "all" ? "#dc2626" : "white",
                color: filterStatus === "all" ? "white" : "#6b7280",
              }}
              onClick={() => setFilterStatus("all")}
            >
              All
            </button>
            <button
              style={{
                ...styles.filterBtn,
                backgroundColor:
                  filterStatus === "active" ? "#dc2626" : "white",
                color: filterStatus === "active" ? "white" : "#6b7280",
              }}
              onClick={() => setFilterStatus("active")}
            >
              Active
            </button>
          </div>
          <button
            onClick={() => {
              resetForm()
              setShowAddModal(true)
            }}
            style={styles.addBtn}
          >
            <Plus size={18} /> Add Trip
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Trip</th>
              <th style={styles.th}>Driver</th>
              <th style={styles.th}>Destination</th>
              <th style={styles.th}>Distance</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Alerts</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrips.map((trip) => (
              <tr key={trip.id} style={styles.bodyRow}>
                <td style={styles.td}>
                  <span style={styles.tripNo}>{trip.tripNo}</span>
                </td>
                <td style={styles.td}>{trip.driver}</td>
                <td style={styles.td}>{trip.destination}</td>
                <td style={styles.td}>{trip.distance}</td>
                <td style={styles.td}>{trip.date}</td>
                <td style={styles.td}>
                  <span style={styles.alertBadge}>{trip.alerts} Alerts</span>
                </td>
                <td style={styles.td}>
                  <span
                    style={{ ...styles.badge, ...getBadgeStyle(trip.status) }}
                  >
                    {trip.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button
                      style={styles.actionBtn}
                      onClick={() => handleViewTrip(trip)}
                      title="View"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      style={styles.actionBtn}
                      onClick={() => handleEditClick(trip)}
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      style={{ ...styles.actionBtn, color: "#ef4444" }}
                      onClick={() => handleDelete(trip.id)}
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

      {/* Add Trip Modal */}
      {showAddModal && (
        <Modal
          title="Add Trip"
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddTrip}
          submitText="Save"
        >
          <ModalForm
            trip={newTrip}
            setTrip={setNewTrip}
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
            monthName={monthName}
            calendarDays={calendarDays}
          />
        </Modal>
      )}

      {/* Edit Trip Modal */}
      {showEditModal && (
        <Modal
          title="Edit Trip"
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditTrip}
          submitText="Save"
        >
          <ModalForm
            trip={newTrip}
            setTrip={setNewTrip}
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
            monthName={monthName}
            calendarDays={calendarDays}
          />
        </Modal>
      )}

      {/* View Trip Modal */}
      {showViewModal && selectedTrip && (
        <Modal
          title="ViewTrip"
          onClose={() => setShowViewModal(false)}
          hideActions={true}
        >
          <div style={styles.viewContent}>
            <div style={styles.viewField}>
              <label style={styles.viewLabel}>Destination</label>
              <p style={styles.viewValue}>{selectedTrip.destination}</p>
            </div>
            <div style={styles.viewField}>
              <label style={styles.viewLabel}>Driver</label>
              <p style={styles.viewValue}>{selectedTrip.driver}</p>
            </div>
            <div style={styles.viewField}>
              <label style={styles.viewLabel}>Trip</label>
              <p style={styles.viewValue}>{selectedTrip.tripNo}</p>
            </div>
            <div style={styles.viewField}>
              <label style={styles.viewLabel}>Assigned Distance</label>
              <p style={styles.viewValue}>{selectedTrip.distance}</p>
            </div>
            <div style={styles.viewField}>
              <label style={styles.viewLabel}>Pick Date & Time</label>
              <p style={styles.viewValue}>
                {selectedTrip.date} at {selectedTrip.time}
              </p>
            </div>
          </div>
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

const ModalForm = ({
  trip,
  setTrip,
  currentMonth,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  handlePrevMonth,
  handleNextMonth,
  monthName,
  calendarDays,
}) => {
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"))
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0"),
  )

  const [showTimeDropdown, setShowTimeDropdown] = useState(false)

  return (
    <div style={styles.formContainer}>
      <div style={styles.formSection}>
        <label style={styles.formLabel}>Destination</label>
        <input
          type="text"
          value={trip.destination}
          onChange={(e) => setTrip({ ...trip, destination: e.target.value })}
          placeholder="Enter destination"
          style={styles.input}
        />
      </div>

      <div style={styles.formSection}>
        <label style={styles.formLabel}>Driver</label>
        <input
          type="text"
          value={trip.driver}
          onChange={(e) => setTrip({ ...trip, driver: e.target.value })}
          placeholder="Enter driver name"
          style={styles.input}
        />
      </div>

      <div style={styles.formSection}>
        <label style={styles.formLabel}>Trip</label>
        <input
          type="text"
          value={trip.tripNo}
          onChange={(e) => setTrip({ ...trip, tripNo: e.target.value })}
          placeholder="Enter trip number"
          style={styles.input}
        />
      </div>

      <div style={styles.formSection}>
        <label style={styles.formLabel}>Assigned Distance</label>
        <input
          type="text"
          value={trip.distance}
          onChange={(e) => setTrip({ ...trip, distance: e.target.value })}
          placeholder="Enter distance"
          style={styles.input}
        />
      </div>

      <div style={styles.dateTimeSection}>
        <div style={styles.calendarContainer}>
          <h4 style={styles.calendarTitle}>Pick Date & Time</h4>
          <div style={styles.calendarHeader}>
            <button onClick={handlePrevMonth} style={styles.navBtn}>
              <ChevronLeft size={16} />
            </button>
            <span style={styles.monthYear}>{monthName}</span>
            <button onClick={handleNextMonth} style={styles.navBtn}>
              <ChevronRight size={16} />
            </button>
          </div>

          <div style={styles.weekDays}>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} style={styles.weekDay}>
                {day}
              </div>
            ))}
          </div>

          <div style={styles.calendar}>
            {calendarDays.map((day, idx) => (
              <button
                key={idx}
                onClick={() => day && setSelectedDate(day)}
                style={{
                  ...styles.calendarDay,
                  backgroundColor:
                    day === selectedDate ? "#1a3a52" : "transparent",
                  color: day === selectedDate ? "white" : "#374151",
                  cursor: day ? "pointer" : "default",
                  opacity: day ? 1 : 0.3,
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.timeContainer}>
          <div style={styles.timeInput}>
            <span style={styles.timeLabel}>
              {String(selectedTime.split(":")[0]).padStart(2, "0")}
            </span>
            <span style={styles.timeSeparator}>:</span>
            <span style={styles.timeLabel}>
              {String(selectedTime.split(":")[1] || "00").padStart(2, "0")}
            </span>
          </div>
          <select
            value={selectedTime.split(":")[0] || "00"}
            onChange={(e) => {
              const mins = selectedTime.split(":")[1] || "00"
              setSelectedTime(`${e.target.value}:${mins}`)
            }}
            style={styles.timeSelect}
          >
            {hours.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          <select
            value={selectedTime.split(":")[1] || "00"}
            onChange={(e) => {
              const hrs = selectedTime.split(":")[0] || "00"
              setSelectedTime(`${hrs}:${e.target.value}`)
            }}
            style={styles.timeSelect}
          >
            {minutes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

const getBadgeStyle = (status) => {
  const styles = {
    completed: { backgroundColor: "#d4edda", color: "#155724" },
    active: { backgroundColor: "#cce5ff", color: "#004085" },
    pending: { backgroundColor: "#fff3cd", color: "#856404" },
  }
  return styles[status] || {}
}

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
  filterTabs: {
    display: "flex",
    gap: "8px",
  },
  filterBtn: {
    padding: "10px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
    transition: "all 0.3s",
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
  tripNo: {
    fontWeight: "600",
    color: "#1a3a52",
  },
  alertBadge: {
    backgroundColor: "#fecaca",
    color: "#dc2626",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
  },
  badge: {
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
  formSection: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
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
    transition: "all 0.3s",
  },
  dateTimeSection: {
    display: "flex",
    gap: "20px",
    marginTop: "12px",
  },
  calendarContainer: {
    flex: 1,
  },
  calendarTitle: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
    margin: "0 0 12px 0",
  },
  calendarHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  navBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#6b7280",
    padding: "4px",
  },
  monthYear: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
  },
  weekDays: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "4px",
    marginBottom: "8px",
  },
  weekDay: {
    textAlign: "center",
    fontSize: "11px",
    fontWeight: "600",
    color: "#9ca3af",
    padding: "4px 0",
  },
  calendar: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "4px",
  },
  calendarDay: {
    aspectRatio: "1",
    border: "1px solid #e5e7eb",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  timeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minWidth: "120px",
  },
  timeInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    padding: "12px",
    backgroundColor: "#f3f4f6",
    borderRadius: "6px",
  },
  timeLabel: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1a3a52",
    minWidth: "24px",
    textAlign: "center",
  },
  timeSeparator: {
    fontSize: "16px",
    color: "#1a3a52",
  },
  timeSelect: {
    padding: "6px",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    fontSize: "12px",
    cursor: "pointer",
    backgroundColor: "white",
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
  viewContent: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  viewField: {
    paddingBottom: "12px",
    borderBottom: "1px solid #e5e7eb",
  },
  viewLabel: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#6b7280",
    display: "block",
    marginBottom: "6px",
  },
  viewValue: {
    fontSize: "14px",
    color: "#374151",
    fontWeight: "500",
    margin: 0,
  },
}

export default ManageTrips
