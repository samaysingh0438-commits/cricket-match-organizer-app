
import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateMatch from "./components/CreateMatch";
import TeamManagement from "./components/TeamManagement";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app">
      <Navbar />

      <div className="main-container">

        <aside className="sidebar">
          <h2>🏏 Cricket App</h2>

          <button onClick={() => setActivePage("Dashboard")}>
            🏠 Dashboard
          </button>

          <button onClick={() => setActivePage("Create Match")}>
            ➕ Create Match
          </button>

          <button onClick={() => setActivePage("Teams")}>
            👥 Teams
          </button>

          <button onClick={() => setActivePage("Scoreboard")}>
            🏆 Scoreboard
          </button>
        </aside>

        <main className="main-content">

          {activePage === "Dashboard" && <Dashboard />}

          {activePage === "Create Match" && <CreateMatch />}

          {activePage === "Teams" && <TeamManagement />}

          {activePage === "Scoreboard" && <Scoreboard />}

        </main>

      </div>
    </div>
  );
}

export default App;