const FinishScreen = ({ points, maxPoints, higherPoints, dispatch }) => {
  const percentage = Math.ceil((points / maxPoints) * 100);
  return (
    <>
      <p className="result">
        You Scored {points} out of {maxPoints} ({percentage}%)
      </p>
      <p className="highscore">your hiehger points ({higherPoints})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
