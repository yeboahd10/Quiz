import React from "react";
import styles from "./Content.module.css";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();

  return (
    <div className={styles.whole}>
      <div className={styles.con}>
        <h2>WELCOME TO THE HOT SEAT</h2>
        <br></br>
        <p>Please Select A Category</p>
      </div>
      <div className={styles.but}>
        <button onClick={()=> navigate('Maths')}>MATHEMATICS</button>
        <button onClick={()=> navigate('Science')}>SCIENCE</button>
        <button onClick={()=> navigate('English')}>ENGLISH</button>
        <button onClick={()=> navigate('Affairs')}>CURRENT AFFAIRS</button>

        <h2>RULES</h2>
        <p>
          1. Each Question Answered correctly attracts a point
          <br />
          2. Your have 30 secs to answer each question
          <br />
          3. Your score will be Displayed at the end of each sessions
        </p>
        <p>@P-Dan Tech 2023</p>
      </div>
    </div>
  );
}

export default Content;
