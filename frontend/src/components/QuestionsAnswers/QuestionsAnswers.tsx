import React from "react";
import styles from "./QuestionsAnswers.module.css";

const QuestionsAnswers: React.FC = () => {
  return (
    <div className={styles.questionsAnswers}>
      <h2>Questions & answers (1)</h2>
      <div>
        Q&A Chat box goes here if nothing has been asked display ask the seller
        a question
      </div>
      <textarea placeholder="Ask the seller a question"></textarea>
      <button className={styles.blue}>Ask a question</button>
    </div>
  );
};

export default QuestionsAnswers;
