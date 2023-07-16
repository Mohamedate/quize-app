function NextButton({ dispatch, answer, index, numQuestions }) {
  const finished = index === numQuestions - 1;

  if (answer === null) return null;
  return (
    <button className="btn" onClick={() => dispatch({ type: "nextQuestion" })}>
      {finished ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
