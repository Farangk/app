import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/home");
  };
  return (
    <div className={styles.back}>
      <div className={styles.pContainer}>
        <p className={styles.parrafo}>Welcome to Anime App!</p>
      </div>

      <div className={styles.btnContainer}>
        <button onClick={handleOnClick} className={styles.btn}>
          Click Me!
        </button>

        <img className={styles.img} src="https://gifimage.net/wp-content/uploads/2017/08/transparent-anime-gif-13.gif" alt="Logo anime " />
      </div>
    </div>
  );
};

export default Landing;
