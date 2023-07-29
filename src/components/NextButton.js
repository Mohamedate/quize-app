import { useQuize } from "../context/QuizeContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuize();
  const finished = index === numQuestions - 1;

  if (answer === null) return null;
  return (
    <button className="btn" onClick={() => dispatch({ type: "nextQuestion" })}>
      {finished ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
