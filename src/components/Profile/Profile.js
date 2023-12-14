import React from "react";
import styles from './Profile.module.css'

function Profile({data}) {
    
  return (
    
    <div className={styles.container}>
      <div className={styles.cons}>
  <h1>Name: {data.firstName}</h1>
  <h1>SCHOOL:</h1>
  <h1>CLASS:</h1>
  <h1>AGE:</h1>
  <h1>GENDER:</h1>
      </div>
    </div>
  );
}

export default Profile;
