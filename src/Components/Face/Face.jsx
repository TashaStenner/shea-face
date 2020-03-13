import React from "react";
import styles from "./Face.module.scss";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";
import Eye from "../Eye";

const Face = () => {
  return (
    <>
    <div className={styles.eyes}>
    <Eye eye={left} whichEye={"left"}/> 
    </div>
    <div className={styles.eyes}>
    <Eye eye={right} whichEye={"right"}/> 
    </div>
    </>
  );
};

export default Face;
