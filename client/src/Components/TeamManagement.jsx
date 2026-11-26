import { useState } from "react";

function TeamManagement() {
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState(() =>
    JSON.parse(localStorage.getItem("teams") || "[]")
  );

  const addTeam = (e) => {
    e.preventDefault();

    if (!teamName.trim()) return;

    const updatedTeams = [
      ...teams,
      {
        id: Date.now(),
        name: teamName
      }
    ];

    setTeams(updatedTeams);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
    setTeamName("");
  };
  const deleteTeam = (id) => {
    const updatedTeams = teams.filter(
      (team) => team.id !== id
    );

    setTeams(updatedTeams);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
  };

  return (
    <div className="page-container">
      <h2>Team Management 🏏</h2>

      <form onSubmit={addTeam} className="team-form">
        <input
          type="text"
          placeholder="Enter Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <button type="submit">Add Team</button>
      </form>

      <h3>Available Teams ({teams.length})</h3>

      <div className="team-list">
        {teams.map((team) => (
          <div className="team-card" key={team.id}>
            <h3>🏏 {team.name}</h3>

            <button onClick={() => deleteTeam(team.id)}>
              Delete
            </button>
          </div>
        ))}

        {teams.length === 0 && (
          <p>No teams added yet.</p>
        )}
      </div>
    </div>
  );
}

export default TeamManagement;