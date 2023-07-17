const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${
            index === answer && hasAnswered ? "answer" : ""
          } ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payloads: index })}
          disabled={hasAnswered}
        >
          <span>{option}</span>
          <div className="image">
            {hasAnswered && index === question.correctOption && (
              <img src="./images/correct1.svg" alt="answer" />
            )}
            {hasAnswered && index !== question.correctOption && (
              <img src="./images/wrong-answer.svg" alt="answer" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Options;
