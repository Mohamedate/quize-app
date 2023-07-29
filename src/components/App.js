import Header from "./Header";
import Main from "./Main";

import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import ExitButton from "./ExitButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import { useQuize } from "../context/QuizeContext";
function App() {
  const { status } = useQuize();

  return (
    <div className="app">
      <Main>
        {status === "" && (
          <>
            <h1>Are You Ready To Challenge Yourself!?</h1>
            <StartScreen />
          </>
        )}
        {status === "active" && (
          <>
            <Header />
            <Progress />
            <Question />
            <Footer>
              <ExitButton />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
