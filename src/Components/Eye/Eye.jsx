import React from "react";
import styles from "./Eye.module.scss";

const Eye = props => {
  const { eye, whichEye } = props;

  return (
    <div className={styles.eye}>
      <img src={eye} alt={whichEye} />
    </div>
  );
};

export default Eye;
