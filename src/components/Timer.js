import { useEffect } from "react";

const Timer = ({ dispatch, secondRemaining }) => {
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
};

export default Timer;
