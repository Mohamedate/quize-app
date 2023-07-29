import { useQuize } from "../context/QuizeContext";
import correctImage from "../images/correct1.svg";
import wrongImage from "../images/wrong-answer.svg";

function Options() {
  const { questions, dispatch, answer, index } = useQuize();
  const hasAnswered = answer !== null;

  const question = questions[index];
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn-option ${
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
              <img src={correctImage} alt="answer" />
            )}
            {hasAnswered && index !== question.correctOption && (
              <img src={wrongImage} alt="answer" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

export default Options;
