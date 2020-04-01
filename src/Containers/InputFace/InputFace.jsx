import React, { useState } from "react";
import styles from "./InputFace.module.scss";
import Face from "../../Components/Face";
import InputField from "../../Components/InputField";

const InputFace = () => {
  const [currentAngle, updateAngle] = useState(0);

  return (
    <section className={styles.container}>
      <Face angle={currentAngle} />
      <div className={styles.input}>
        <InputField handleInput={value => updateAngle(value)} />
      </div>
    </section>
  );
};

export default InputFace;
