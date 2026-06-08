
function Score({ score, total, onRestart }) {
  return (
    <div className="card p-5 text-center shadow">
      <h1>Quiz Ended</h1>
      <h2>Your Score: {score}/{total}</h2>

      <button className="btn btn-success mt-3" onClick={onRestart}>
        Replay
      </button>
    </div>
  );
}

export default Score;