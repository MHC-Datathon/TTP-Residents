import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { API_URL } from "./shared";
import TrainDesert from "./components/TrainDesert";
import FultonStreet from "./components/FultonStreet";
import RiderShip from "./components/RiderShip";
import JamaicaRidership from "./components/JamaicaRidership";

const App = () => {
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/me`, {
        withCredentials: true,
      });
      setUser(response.data.user);
    } catch {
      console.log("Not authenticated");
      setUser(null);
    }
  };

  // Check authentication status on app load
  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      // Logout from our backend
      await axios.post(
        `${API_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <NavBar user={user} onLogout={handleLogout} />
      <div className="app">
        <Routes>
          <Route exact path="/TTP-Residents/" element={<Home />} />
          <Route path="/TrainDesert" element={<TrainDesert />} />
          <Route path="/FultonStreet" element={<FultonStreet />}/>
          <Route path="/riderShip" element={<RiderShip />} />
          <Route path="/JamaicaRidership" element={<JamaicaRidership />} />
        </Routes>
      </div>
    </div>
  );
};

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
