import { useQuize } from "../context/QuizeContext";
import Options from "./Options";

function Question() {
  const {questions, index, dispatch, answer} = useQuize()

  return (
    <div>
      <h3>{questions[index].question}</h3>
      <Options question={questions[index]} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
