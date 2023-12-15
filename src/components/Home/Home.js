import React, { useState } from "react";
import styles from "./Home.module.css";
import chair from "./raw.png";
import { useNavigate } from "react-router-dom";



function Home() {
 const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formValues, setFormValues] = useState({
    firstName: "",
    school: "",
    class: "",
    Age: "",
    Gender: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormVisible(false);
   
  };

  return (
    <>
      {isFormVisible ? (
        <div className={styles.bod}>
          <div className={styles.page}>
            <div className={styles.list}>
              <h3>WELCOME TO THE HOT SEAT</h3>
              <p>
                A Quiz App Designed to help Junior High School Students to Test
                their Knowledge in Various Subject Areas
              </p>
              <img src={chair} alt="" />
            </div>
            <div className={styles.list}>
              <h3>REGISTER</h3>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <label>
                    <label>FIRST NAME: </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </label>
                  <br></br>
                  <label>
                    <label>SCHOOL: </label>
                    <input
                      type="text"
                      placeholder="SCHOOL"
                      name="school"
                      value={formValues.school}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </label>
                  <br></br>
                  <label>
                    <label> CLASS: </label>
                    <input
                      type="text"
                      placeholder="CLASS"
                      name="class"
                      value={formValues.class}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </label>
                  <br></br>
                  <label>
                    <label> AGE: </label>
                    <input
                      type="text"
                      placeholder="AGE"
                      name="Age"
                      value={formValues.Age}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </label>
                  <br></br>
                  <label>
                    <label>GENDER: </label>
                    <select
                      name="Gender"
                      value={formValues.Gender}
                      onChange={handleChange}
                    >
                      <option>MALES</option>
                      <option>FEMALE</option>
                    </select>
                  </label>
                  <br></br>
                </fieldset>
                <br></br>

                <button className={styles.but}>REGISTER</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        navigate('./Profile')
      )}
    </>
  );
}

export default Home;
