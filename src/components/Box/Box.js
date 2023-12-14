import React from "react";
import styles from "./Box.module.css";
import Question from "../Questions/Question";
import Timer from "./Timer";

function Box() {

  return (
    <div className={styles.container}>
      <div className={styles.cons}>
        <h4 className={styles.time}> <Timer/></h4>
        <Question />
      </div>
    </div>
  );
}

export default Box;
