import { useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import data from "./questions";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import ExitButton from "./ExitButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";

// import all images of my app
import logo from "../images/logo512.png";
import javaScript from "../images/javascript.png";
import html from "../images/html.png";
import python from "../images/python.png";
import cPlus from "../images/cplus.png";
import java from "../images/java.png";

// sound of correct and wrong answer
import answerSoundUrl from "../sounds/correct-sound.mp3";
import wrongSoundUrl from "../sounds/wrong-sound.wav";

const SECOND_PER_QUESTION = 30;
const correctEffectSound = new Audio(answerSoundUrl);
const wrongEffectSound = new Audio(wrongSoundUrl);

const myImages = [logo, javaScript, html, python, cPlus, java];

const initialState = {
  questions: [],
  indexOfImage: null,
  status: "",
  index: 0,
  answer: null,
  points: 0,
  secondRemaining: 0,
};

function reducer(state, { type, payloads }) {
  switch (type) {
    case "start":
      const newQuestions =
        payloads === 0
          ? data.react
          : payloads === 1
          ? data.javaScript
          : payloads === 2
          ? data.html
          : payloads === 3
          ? data.python
          : payloads === 4
          ? data.cPlus
          : data.java;
      return {
        ...state,
        questions: newQuestions,
        indexOfImage: payloads,
        secondRemaining: newQuestions.length * SECOND_PER_QUESTION,
        status: "active",
      };

    case "newAnswer":
      const question = state.questions.at(state.index);
      const isCorrect = payloads === question.correctOption;
      if (isCorrect) correctEffectSound.play();
      else wrongEffectSound.play();
      return {
        ...state,
        answer: payloads,
        points: isCorrect ? state.points + question.points : state.points,
      };
    case "nextQuestion":
      const lastQuestion = state.index === state.questions.length - 1;
      if (lastQuestion) {
        return {
          ...state,
          status: "finished",
        };
      }

      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "restart":
      return {
        ...initialState,
      };
    case "tickTimer":
      if (!state.secondRemaining) {
        return {
          ...state,
          secondRemaining: SECOND_PER_QUESTION,
        };
      }
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
      };
    default:
      throw new Error("error");
  }
}
const App = () => {
  const [
    { questions, status, index, answer, points, secondRemaining, indexOfImage },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <div className="app">
      <Main>
        {status === "" && (
          <>
            <h1>Are You Ready To Challenge Yourself !?</h1>
            <StartScreen
              numQuestions={numQuestions}
              dispatch={dispatch}
              myImages={myImages}
            />
          </>
        )}
        {status === "active" && (
          <>
            <Header
              myImages={myImages}
              indexOfImage={indexOfImage}
              dispatch={dispatch}
              secondRemaining={secondRemaining}
            />
            <Progress
              index={index}
              numQuestions={numQuestions}
              maxPoints={maxPoints}
              points={points}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <ExitButton />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            dispatch={dispatch}
            indexOfImage={indexOfImage}
            myImages={myImages}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
