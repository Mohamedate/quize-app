import { useEffect } from "react";

const Header = ({ dispatch, secondRemaining, myImage, indexOfImage }) => {
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
    <header className="app-header">
      <img src={myImage[indexOfImage]} alt="React logo" />
      <div className={`timer`}>
        {MINUTS < 10 ? `0${MINUTS}` : MINUTS}:
        {SECOND < 10 ? `0${SECOND}` : SECOND}
      </div>
    </header>
  );
};

export default Header;
