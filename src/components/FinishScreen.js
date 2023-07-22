const lose = <p>You have to work harder &#128549;</p>;
const win = <p>Good jop bro &#128079;</p>;
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
        {percentage < 50 ? lose : win}
      </p>
      <button
        className=" btn-resault"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Game &#128170;
      </button>
      <div className="copyright">Designed and Coded By Eng/Mohamed Atef</div>
    </div>
  );
};

export default FinishScreen;
