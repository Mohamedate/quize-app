const ExitButton = ({ dispatch }) => {
  return (
    <button className="btn" onClick={() => dispatch({ type: "restart" })}>
      Exit
    </button>
  );
};

export default ExitButton;
