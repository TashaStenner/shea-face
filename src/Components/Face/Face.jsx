import React from "react";
import styles from "./Face.module.scss";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";
import Eye from "../Eye";
import { useState } from "react";

const Face = props => {
  const { angle } = props;

  const rotateAngle = {
    transform: `rotate(${angle}deg)`
  };

  const originalAngle = {
    transform: 'rotate(0deg)'
  }

  const [isRotated, rotate] = useState(true);
  const rotateClass = isRotated ? originalAngle : rotateAngle;

  return (
    <>
      <section className={styles.shea} onClick={() => rotate(!isRotated)}>
        <section className={styles.flexy}>
          <div className={styles.lEye} style={rotateClass}>
            <Eye eye={left} whichEye={"left"} />
          </div>
          <div className={styles.rEye} style={rotateClass}>
            <Eye eye={right} whichEye={"right"} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Face;
