import { createContext, useContext, useReducer } from "react";
import data from "../components/questions";
// import all images of my app
import logo from "../images/logo512.png";
import javaScript from "../images/javascript.png";
import html from "../images/html.png";
import python from "../images/python.png";
import cPlus from "../images/cplus.png";
import java from "../images/java.png";
import answerSoundUrl from "../sounds/correct-sound.mp3";
import wrongSoundUrl from "../sounds/wrong-sound.wav";
import worningSound from "../sounds/warningClock.wav";

const worning = new Audio(worningSound);
const correctEffectSound = new Audio(answerSoundUrl);
const wrongEffectSound = new Audio(wrongSoundUrl);

const QuizeContext = createContext();

const initialState = {
  questions: [],
  indexOfImage: null,
  status: "",
  index: 0,
  answer: null,
  points: 0,
  secondRemaining: 0,
  numQuestions: 0,
  maxPoints: 0,
};

const SECOND_PER_QUESTION = 30;

const myImages = [logo, javaScript, html, python, cPlus, java];

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
      const numQuestions = newQuestions.length;
      const maxPoints = newQuestions.reduce(
        (prev, cur) => prev + cur.points,
        0
      );
      return {
        ...state,
        questions: newQuestions,
        indexOfImage: payloads,
        secondRemaining: newQuestions.length * SECOND_PER_QUESTION,
        status: "active",
        numQuestions: numQuestions,
        maxPoints: maxPoints,
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
        worning.pause();
        return {
          ...state,
          status: "finished",
          worningSoundState: false,
        };
      }

      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "restart":
      worning.pause();
      return {
        ...initialState,
      };
    case "tickTimer":
      if (state.secondRemaining < 9) worning.play();
      if (!state.secondRemaining) {
        return {
          ...state,
          status: "finished",
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
function QuizeProvider({ children }) {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      secondRemaining,
      indexOfImage,
      maxPoints,
      numQuestions,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <QuizeContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        secondRemaining,
        indexOfImage,
        dispatch,
        myImages,
        maxPoints,
        numQuestions,
      }}
    >
      {children}
    </QuizeContext.Provider>
  );
}

function useQuize() {
  const context = useContext(QuizeContext);
  if (context === undefined) throw new Error("out of context");
  return context;
}

export { useQuize, QuizeProvider };
