import correctIcon from "./images/correct1.svg";
import wrontIcon from "./images/wrong-answer.svg";

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
              <img src={correctIcon} alt="answer" />
            )}
            {hasAnswered && index !== question.correctOption && (
              <img src={wrontIcon} alt="answer" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Options;