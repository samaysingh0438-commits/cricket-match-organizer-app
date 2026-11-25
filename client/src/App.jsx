
import { useState } from "react";
import {
  LayoutDashboard,
  Trophy,
  Users,
  PlusCircle,
  History,
  Menu
} from "lucide-react";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Create Match", icon: PlusCircle },
    { name: "Teams", icon: Users },
    { name: "Scoreboard", icon: Trophy },
    { name: "Match History", icon: History }
  ];

  return (
    <div className="app">

      <aside className="sidebar">
        <h2>🏏 CricketPro</h2>

        <div className="menu">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={activePage === item.name ? "active" : ""}
                onClick={() => setActivePage(item.name)}
              >
                <Icon size={20} />
                {item.name}
              </button>
            );
          })}
        </div>
      </aside>

      <main className="main-content">

        <header>
          <button className="mobile-menu">
            <Menu />
          </button>
          <h2>{activePage}</h2>
          <span>Welcome, Admin 👋</span>
        </header>

        {activePage === "Dashboard" && (
          <>
            <h1>Cricket Dashboard</h1>
            <p>Manage your cricket matches easily.</p>

            <div className="stats">

              <div className="stat-card">
                <h3>Total Matches</h3>
                <h1>12</h1>
              </div>

              <div className="stat-card">
                <h3>Total Teams</h3>
                <h1>8</h1>
              </div>

              <div className="stat-card">
                <h3>Total Players</h3>
                <h1>80</h1>
              </div>

              <div className="stat-card">
                <h3>Completed</h3>
                <h1>9</h1>
              </div>

            </div>

            <div className="welcome-card">
              <h2>🏏 Organize Your Cricket Tournament</h2>
              <p>
                Create matches, manage teams, track scores
                and view match results in one place.
              </p>

              <button onClick={() => setActivePage("Create Match")}>
                Create New Match
              </button>
            </div>
          </>
        )}

        {activePage !== "Dashboard" && (
          <div className="welcome-card">
            <h2>{activePage}</h2>
            <p>
              {activePage} section will be developed
              in the next steps.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
