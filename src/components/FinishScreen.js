const FinishScreen = ({
  points,
  maxPoints,
  myImages,
  indexOfImage,
  dispatch,
}) => {
  const percentage = Math.ceil((points / maxPoints) * 100);
  let messageToPlayer;
  if (percentage < 50) {
    messageToPlayer = "You have to work harder 😢";
  } else if (percentage < 80) {
    messageToPlayer =
      "You are doing well but a little of work will make you better 🤩";
  } else {
    messageToPlayer = "Well done that's great 👏🥳";
  }
  return (
    <div className="finish">
      <div className="image-finish">
        <img src={myImages[indexOfImage]} alt="finish" />
      </div>
      <div className="result">
        You Scored {points} out of {maxPoints} ({percentage}%)
        <p>{messageToPlayer}</p>
      </div>
      <button
        className=" btn-resault"
        onClick={() => dispatch({ type: "restart" })}
      >
        Play Game Again 💪
      </button>
      <div className="copyright">
        Designed and Coded By Eng/
        <a
          href="https://mohamedate.github.io/Mohamed_Atef/"
          target="_blank"
          rel="noreferrer"
        >
          Mohamed Atef 👨🏻‍💻
        </a>
      </div>
    </div>
  );
};

export default FinishScreen;
