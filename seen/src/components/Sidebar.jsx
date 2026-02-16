import React from "react"
import {
  LayoutGrid,
  ClipboardList,
  UserSquare2,
  Truck,
  BarChart3,
 
} from "lucide-react"

const Sidebar = ({ setView, activeView }) => {
  const menuItems = [
    { id: "Dashboard", icon: LayoutGrid, label: "Main" },
    { id: "Trip", icon: ClipboardList, label: "Trips" },
    { id: "ManageDrivers", icon: UserSquare2, label: "Drivers" },
    { id: "ManageVehicles", icon: Truck, label: "Vehicles" },
    { id: "Report", icon: BarChart3, label: "Report" },
  ]

  return (
    <aside className="w-20 bg-[#1A1C1E] flex flex-col items-center py-8 justify-between h-full min-h-screen">
      <div className="flex flex-col items-center gap-10">
        
        <nav className="flex flex-col space-y-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setView(item.id)}
              className={`cursor-pointer transition-all p-2 rounded-xl ${
                activeView === item.id
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <item.icon size={24} />
            </div>
          ))}
        </nav>
      </div>
   
    
    </aside>
  )
}

export default Sidebar
