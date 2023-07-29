import { useQuize } from "../context/QuizeContext";

function Progress() {
  const { index, numQuestions, points, maxPoints } = useQuize();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + 1} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
