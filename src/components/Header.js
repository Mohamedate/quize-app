import Timer from "./Timer";

const Header = ({ dispatch, secondRemaining, myImages, indexOfImage }) => {
  return (
    <header className="app-header">
      <img src={myImages[indexOfImage]} alt="React logo" />
      <Timer dispatch={dispatch} secondRemaining={secondRemaining} />
    </header>
  );
};

export default Header;
