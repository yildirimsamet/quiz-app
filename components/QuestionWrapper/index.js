import { useQuestion } from "../../contexts/QuestionContext";
import styles from "./QuestionWrapper.module.scss";
import Result from "../../components/Result";
const QuestionWrapper = () => {
  const {
    currentQuestion,
    currentQuestionNum,
    setCurrentQuestionNum,
    setCurrentScore,
    currentScore,
    isFinished,
    setIsFinished,
  } = useQuestion();
  const handleAnswer = (e, isCorrect) => {
    if (!isCorrect) {
      const currentAnswerObj = currentQuestion.answers.filter(
        (answer) => answer.isCorrect === true
      );
      const correctButton = Array.from(
        document.getElementsByTagName("button")
      ).filter(
        (button) => button.textContent.slice(2) === currentAnswerObj[0].text
      );
      correctButton[0].classList.add("bg-green");
      setTimeout(() => {
        try {
          correctButton[0].classList.remove("bg-green");
        } catch (error) {}
      }, 999);
      console.log(currentAnswerObj);
      console.log(correctButton);
    }
    if (isCorrect) {
      setCurrentScore(currentScore + 1);
      e.target.classList.add("bg-green");
    } else {
      e.target.classList.add("bg-red");
    }
    if (currentQuestionNum >= 4) {
      setTimeout(() => {
        setIsFinished(true);
      }, 1000);
    }
    setTimeout(() => {
      try {
        e.target.classList.remove("bg-green");
        e.target.classList.remove("bg-red");
      } catch (error) {}
      setCurrentQuestionNum(currentQuestionNum + 1);
    }, 1000);
  };
  return (
    <>
      {isFinished ? (
        <Result />
      ) : (
        <div className={styles.questionBoxWrapper}>
          <h1 className={styles.title}>QUIZ APP</h1>
          <div className={styles.questionBox}>
            <img
              className={styles.questionBoxImg}
              src="/images/undraw_adventure_4hum.svg"
              alt="adventure"
            />
            <div className={styles.questionWrapper}>
              <div className={styles.currentNum}>
                {currentQuestionNum + "/4"}
              </div>
              <h3>{currentQuestion.question}</h3>
              <div>
                {currentQuestion.answers.map((answer, index) => (
                  <button
                    onClick={(e) => {
                      handleAnswer(e, answer.isCorrect);
                    }}
                    className={styles.answerButton}
                    key={index}
                  >
                    <span>
                      {index === 0
                        ? "A"
                        : index === 1
                        ? "B"
                        : index === 2
                        ? "C"
                        : "D"}
                    </span>{" "}
                    <span>{answer.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionWrapper;
