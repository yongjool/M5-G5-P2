import React from "react";
import styles from "./QuestionsAnswers.module.css";

import questionsAnswers from "../../assets/questionsAnswersPH.svg";

const QuestionsAnswers: React.FC = () => {
  return (
    <div className={styles.questionsAnswers}>
      {/* <h2>Questions & answers (1)</h2>
      <div>
        Q&A Chat box goes here if nothing has been asked display ask the seller
        a question
      </div>
      <textarea placeholder="Ask the seller a question"></textarea>
      <button className={styles.blue}>Ask a question</button> */}
      <img
        className={styles.questionsAnswers}
        src={questionsAnswers}
        alt="Questions & Answers"
      />
    </div>
  );
};

export default QuestionsAnswers;
