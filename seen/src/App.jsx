import { useState, useCallback } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Manage from "./components/Manage";
import Trip from "./components/Trip";
import ManageDrivers from "./components/ManageDrivers";
import ManageVehicles from "./components/ManageVehicles";
import Report from "./components/Report";
import "./App.css";

// You can later move this to a separate file (e.g. routes.js)
const VIEW_COMPONENTS = {
  Dashboard,
  Manage,
  Trip,
  ManageDrivers,
  ManageVehicles,
  Report,
  MainContent,     // public / landing
  Login,
  Signup,
  Register,
};

type ViewKey = keyof typeof VIEW_COMPONENTS; 
function App() {
  const [view, setView] = useState<ViewKey>("Login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("Admin User");

  // Memoized handlers
  const handleLogin = useCallback((name = "Admin User") => {
    setIsAuthenticated(true);
    setUserName(name);
    setView("Dashboard");
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setUserName("Admin User");
    setView("Login");
  }, []);

  const ActiveComponent = VIEW_COMPONENTS[view] || Dashboard;

  // Decide layout based on auth status
  if (!isAuthenticated) {
    // Public / Auth views
    const isAuthPage = ["Login", "Signup", "Register"].includes(view);

    return (
      <div className="app-container">
        <Header
          isAuthenticated={false}
          onLogout={handleLogout}
          setView={setView}
        />

        <main className={isAuthPage ? "auth-layout" : "public-layout"}>
          <ActiveComponent
            onLogin={handleLogin}
            setView={setView}
            // You can pass more props if needed (e.g. onSignupSuccess)
          />
        </main>
      </div>
    );
  }

  // Authenticated layout
  return (
    <div className="app-container">
      <Header
        isAuthenticated={true}
        userName={userName}
        onLogout={handleLogout}
        setView={setView}
      />

      <div className="authenticated-layout">
        {/* Optional: Sidebar can be added here later */}
        
        <div className="top-user-bar">
          <div className="user-info">
            <span className="avatar" role="img" aria-label="user">
              👤
            </span>
            <div className="user-details">
              <div className="user-name">{userName}</div>
              <div className="user-role">Administrator</div>
            </div>
          </div>

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <main className="main-content">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}

export default App;