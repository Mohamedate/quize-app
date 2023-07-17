function StartScreen({ numQuestions, dispatch, myImages }) {
  return (
    <div className="start">
      <h2>You Are In The Right Place!</h2>
      <h3>Select Your Favorite Topic!</h3>
      <div className="select">
        {myImages.map((item, i) => (
          <StartScreenOption
            key={i}
            imgItem={item}
            dispatch={dispatch}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

const StartScreenOption = ({ imgItem, dispatch, index }) => {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "start", payloads: index })}
    >
      <img src={imgItem} alt="img" />
    </button>
  );
};

export default StartScreen;
