import { useQuize } from "../context/QuizeContext";

function ExitButton() {
  const { dispatch } = useQuize();
  return (
    <button className="btn" onClick={() => dispatch({ type: "restart" })}>
      Exit
    </button>
  );
}

export default ExitButton;
