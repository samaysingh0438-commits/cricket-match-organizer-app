
import React from "react";
import {
  Trophy,
  Users,
  CalendarDays,
  Target,
  PlusCircle,
  ArrowUpRight
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Total Matches",
      value: "12",
      icon: Trophy,
      color: "#16a36b"
    },
    {
      title: "Total Teams",
      value: "08",
      icon: Users,
      color: "#2563eb"
    },
    {
      title: "Total Players",
      value: "80",
      icon: Target,
      color: "#ea8a18"
    },
    {
      title: "Upcoming Matches",
      value: "03",
      icon: CalendarDays,
      color: "#9333ea"
    }
  ];

  const matches = [
    {
      team1: "India",
      team2: "Australia",
      date: "28 Nov 2026",
      venue: "Delhi Stadium",
      status: "Upcoming"
    },
    {
      team1: "England",
      team2: "Pakistan",
      date: "30 Nov 2026",
      venue: "Mumbai Stadium",
      status: "Upcoming"
    },
    {
      team1: "South Africa",
      team2: "New Zealand",
      date: "02 Dec 2026",
      venue: "Chennai Stadium",
      status: "Upcoming"
    }
  ];

  return (
    <div className="dashboard">

      <div className="dashboard-heading">
        <div>
          <h1>Cricket Dashboard 🏏</h1>
          <p>Welcome back! Manage your cricket matches.</p>
        </div>

        <button className="create-btn">
          <PlusCircle size={18} />
          Create Match
        </button>
      </div>

      {/* Statistics Cards */}

      <div className="stats-grid">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={index}>
              <div
                className="stat-icon"
                style={{ backgroundColor: item.color }}
              >
                <Icon size={25} color="white" />
              </div>

              <div>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
              </div>

              <ArrowUpRight className="stat-arrow" size={20} />
            </div>
          );
        })}

      </div>

      {/* Recent Matches */}

      <div className="matches-section">

        <div className="section-heading">
          <h2>Recent Matches</h2>
          <button>View All</button>
        </div>

        <div className="match-list">

          {matches.map((match, index) => (
            <div className="match-card" key={index}>

              <div className="match-teams">
                <h3>{match.team1}</h3>
                <span>VS</span>
                <h3>{match.team2}</h3>
              </div>

              <div className="match-info">
                <p>
                  <CalendarDays size={16} />
                  {match.date}
                </p>

                <p>📍 {match.venue}</p>
              </div>

              <span className="match-status">
                {match.status}
              </span>

            </div>
          ))}

        </div>
      </div>

      {/* Quick Actions */}

      <div className="quick-section">
        <h2>Quick Actions</h2>

        <div className="quick-grid">

          <div className="quick-card">
            <Trophy size={30} />
            <h3>Create Match</h3>
            <p>Organize a new cricket match.</p>
          </div>

          <div className="quick-card">
            <Users size={30} />
            <h3>Manage Teams</h3>
            <p>Create teams and add players.</p>
          </div>

          <div className="quick-card">
            <Target size={30} />
            <h3>Live Score</h3>
            <p>Track runs, wickets and overs.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;
