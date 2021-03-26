import { useQuestion } from "../../contexts/QuestionContext";
import styles from "./Result.module.scss";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
const Result = () => {
  const resultWrapperDiv = useRef();
  const {
    currentScore,
    setCurrentScore,
    setCurrentQuestionNum,
    setIsFinished,
  } = useQuestion();
  const handleTryAgain = () => {
    setCurrentScore(0);
    setCurrentQuestionNum(1);
    setIsFinished(false);
  };
  useEffect(() => {
    if (currentScore < 1) {
      return;
    }
    lottie.loadAnimation({
      container: resultWrapperDiv.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/animations/confetti.json"),
    });
  }, []);
  return (
    <div ref={resultWrapperDiv} className={styles.resultWrapper}>
      <h3 className={styles.title}>Result</h3>
      <div className={styles.resultBox}>
        <img
          className={styles.img}
          src="/images/undraw_winners_ao2o.svg"
          alt="winner"
        />
        <p className={styles.scoreInfo}>
          You got{" "}
          <span className={currentScore > 0 ? styles.score : styles.badScore}>
            {currentScore}
          </span>{" "}
          correct answers
        </p>
        <button onClick={handleTryAgain} className={styles.button}>
          Try Again
        </button>
      </div>
    </div>
  );
};
export default Result;
