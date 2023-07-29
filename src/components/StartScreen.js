import { useQuize } from "../context/QuizeContext";

function StartScreen() {
  const { myImages, dispatch } = useQuize();

  return (
    <div className="start">
      <h2>You Are In The Right Place! 👌</h2>
      <h3>Select Your Favorite Topic! </h3>
      <div className="select">
        {myImages.map((item, index) => (
          <button
            key={index}
            className="btn btn-ui"
            onClick={() => dispatch({ type: "start", payloads: index })}
          >
            <img className={index === 0 ? "react" : ""} src={item} alt="img" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default StartScreen;
