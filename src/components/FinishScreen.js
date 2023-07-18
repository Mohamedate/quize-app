const FinishScreen = ({
  points,
  maxPoints,
  myImages,
  indexOfImage,
  dispatch,
}) => {
  const percentage = Math.ceil((points / maxPoints) * 100);
  return (
    <div className="finish">
      <div className="image-finish">
        <img src={myImages[indexOfImage]} alt="finish" />
      </div>
      <p className="result">
        You Scored {points} out of {maxPoints} ({percentage}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
      <div className="copyright">Designed and Coded By Eng/Mohamed Atef</div>
    </div>
  );
};

export default FinishScreen;
