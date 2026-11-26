
import React, { useState } from "react";

function CreateMatch() {
  const [match, setMatch] = useState({
    team1: "",
    team2: "",
    date: "",
    venue: "",
    overs: "20"
  });

  const handleChange = (e) => {
    setMatch({
      ...match,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (match.team1 === match.team2) {
      alert("Please select different teams!");
      return;
    }

    alert("Match Created Successfully!");

    console.log(match);

    setMatch({
      team1: "",
      team2: "",
      date: "",
      venue: "",
      overs: "20"
    });
  };

  return (
    <div className="content-card">
      <h2>🏏 Create New Match</h2>

      <form onSubmit={handleSubmit}>
        <label>Team 1</label>
        <input
          name="team1"
          value={match.team1}
          onChange={handleChange}
          placeholder="Enter Team 1"
          required
        />

        <label>Team 2</label>
        <input
          name="team2"
          value={match.team2}
          onChange={handleChange}
          placeholder="Enter Team 2"
          required
        />

        <label>Match Date</label>
        <input
          type="date"
          name="date"
          value={match.date}
          onChange={handleChange}
          required
        />

        <label>Venue</label>
        <input
          name="venue"
          value={match.venue}
          onChange={handleChange}
          placeholder="Enter Stadium Name"
          required
        />

        <label>Total Overs</label>
        <select
          name="overs"
          value={match.overs}
          onChange={handleChange}
        >
          <option value="5">5 Overs</option>
          <option value="10">10 Overs</option>
          <option value="20">20 Overs</option>
          <option value="50">50 Overs</option>
        </select>

        <button type="submit">
          Create Match
        </button>
      </form>
    </div>
  );
}

export default CreateMatch;
