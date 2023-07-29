import { useQuize } from "../context/QuizeContext";
import Timer from "./Timer";

const Header = () => {
  const {myImages, indexOfImage} = useQuize()
  return (
    <header className="app-header">
      <img
        className={indexOfImage === 0 ? "react" : ""}
        src={myImages[indexOfImage]}
        alt="React logo"
      />
      <Timer />
    </header>
  );
};

export default Header;
