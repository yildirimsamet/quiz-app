import { QuestionProvider } from "../contexts/QuestionContext";
import "../styles/global.scss";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [currentQuestionNum, setCurrentQuestionNum] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    answers: [],
  });
  const [isFinished, setIsFinished] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    fetch(process.env.API + "/api/getQuestion/" + currentQuestionNum)
      .then((res) => res.json())
      .then((res) => setCurrentQuestion(res));
  }, [currentQuestionNum]);

  return (
    <QuestionProvider
      value={{
        currentQuestion,
        setCurrentQuestion,
        currentQuestionNum,
        setCurrentQuestionNum,
        currentScore,
        setCurrentScore,
        isFinished,
        setIsFinished,
      }}
    >
      <Component {...pageProps} />
    </QuestionProvider>
  );
}

export default MyApp;
