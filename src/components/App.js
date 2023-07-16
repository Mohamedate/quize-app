import { useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import data from "./questions";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";

import answerSoundUrl from "../sounds/correct-sound.mp3";
import wrongSoundUrl from "../sounds/wrong-sound.wav";
import jsImage from "./images/js.svg";
import pyImage from "./images/python.svg";
import htmlImage from "./images/html.svg";
import reactImage from "./images/react.svg";

const myImage = [pyImage, htmlImage, reactImage, jsImage];
const SECOND_PER_QUESTION = 30;
const correctEffectSound = new Audio(answerSoundUrl);
const wrongEffectSound = new Audio(wrongSoundUrl);

const initialState = {
  questions: [],
  indexOfImage: null,
  status: "",
  index: 0,
  answer: null,
  points: 0,
  secondRemaining: SECOND_PER_QUESTION * data.html.length,
};

function reducer(state, { type, payloads }) {
  switch (type) {
    case "start":
      return {
        ...state,
        questions:
          payloads === 0
            ? data.python
            : payloads === 1
            ? data.html
            : payloads === 2
            ? data.react
            : data.javaScript,
        indexOfImage: payloads,
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
              myImage={myImage}
              dispatch={dispatch}
            />
          </>
        )}
        {status === "active" && (
          <>
            <Header
              myImage={myImage}
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
          />
        )}
      </Main>
    </div>
  );
};

export default App;
