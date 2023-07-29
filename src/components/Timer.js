import { useEffect } from "react";
import { useQuize } from "../context/QuizeContext";

function Timer() {
  const { dispatch, secondRemaining } = useQuize();

  const SECOND = secondRemaining % 60;
  const MINUTS = Math.floor(secondRemaining / 60);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tickTimer" });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div className={`timer ${secondRemaining < 8 ? "worning" : ""}`}>
      {MINUTS < 10 ? `0${MINUTS}` : MINUTS}:
      {SECOND < 10 ? `0${SECOND}` : SECOND}
    </div>
  );
}

export default Timer;
