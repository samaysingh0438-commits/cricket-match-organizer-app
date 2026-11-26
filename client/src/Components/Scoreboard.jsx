import { useState } from "react";
function Scoreboard() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);

  const addRuns = (value) => {
    setRuns(runs + value);
    setBalls(balls + 1);
  };

  const addWicket = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      setBalls(balls + 1);
    }
  };

  const addDotBall = () => {
    setBalls(balls + 1);
  };

  const resetScore = () => {
    setRuns(0);
    setWickets(0);
    setBalls(0);
  };

  return (
    <div className="content-card">
      <h2>🏏 Live Scoreboard</h2>

      <div className="score-display">
        <h1>{runs}/{wickets}</h1>

        <h3>
          Overs: {Math.floor(balls / 6)}.{balls % 6}
        </h3>
      </div>

      <div className="score-buttons">
        <button onClick={() => addRuns(1)}>+1</button>
        <button onClick={() => addRuns(2)}>+2</button>
        <button onClick={() => addRuns(3)}>+3</button>
        <button onClick={() => addRuns(4)}>+4</button>
        <button onClick={() => addRuns(6)}>+6</button>
        <button onClick={addDotBall}>Dot Ball</button>
        <button onClick={addWicket}>Wicket</button>
      </div>

      <button onClick={resetScore}>
        Reset Score
      </button>
    </div>
  );
}

export default Scoreboard;