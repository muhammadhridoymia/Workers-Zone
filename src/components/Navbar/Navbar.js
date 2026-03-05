import React, { useState} from "react";
import { User, Info,Home} from "lucide-react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';


const Navigation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");


  return (
      <div className="bottom-navigation">
        <div className="nav-buttons">
          <button
            onClick={() => {setActiveTab("profile"); navigate("/profile");}}
            className={activeTab === "profile" ? "nav-btn active" : "nav-btn"}
            >
            <User className="nav-icon" />
            <span className="nav-label">Profile</span>
          </button>

          <button
            onClick={() => {setActiveTab("home"); navigate("/");}}
            className={activeTab === "home" ? "nav-btn active" : "nav-btn"}
            >
            <Home className="nav-icon" />
            <span className="nav-label"> Home</span>
          </button>

          <button
            onClick={() => {setActiveTab("notifications"); navigate("/messages");}}
            className={activeTab === "notifications" ? "nav-btn active" : "nav-btn"}
            >
            <Info className="nav-icon" />
            <span className="nav-label">Notifications</span>
          </button>
        </div>
      </div>
  );
};

export default Navigation;