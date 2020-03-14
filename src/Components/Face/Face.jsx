import React from "react";
import styles from "./Face.module.scss";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";
import Eye from "../Eye";

const Face = props => {
  const { angle } = props;

  const divStyle = {
    transform: `rotate(${angle}deg)`
  };

  return (
    <>
      <section className={styles.shea}>
        <section className={styles.flexy}>
          <div className={styles.lEye} style={divStyle}>
            <Eye eye={left} whichEye={"left"} />
          </div>
          <div className={styles.rEye} style={divStyle}>
            <Eye eye={right} whichEye={"right"} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Face;
