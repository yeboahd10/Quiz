import React from "react";
import styles from "./Top.module.css";
import { useNavigate } from "react-router-dom";
import chair from './ch.png'



function Top() {
const navigate = useNavigate()

  return (
    <div>
      <div className={styles.background}>
        <div className={styles.content}>
          <h2>THE HOT SEAT</h2>
          
          <div className={styles.links}>
            <ul>
              <li onClick={() => navigate('/')}>Home</li>
              <li onClick={() => navigate('Cat')}>Categories</li>
              <li onClick={() => navigate('Profile')}>Your Profile</li>
            </ul>

           
          </div>
          
       
      </div>
    </div>
    </div>
  );
}

export default Top;
