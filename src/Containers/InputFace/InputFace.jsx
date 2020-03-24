import React, { useState } from "react";
import styles from "./InputFace.module.scss";
import Face from "../../Components/Face";
import InputField from "../../Components/InputField";

const InputFace = () => {
  const [currentAngle, updateAngle] = useState(0);

  return (
    <section>
      <Face angle={currentAngle} />
      <InputField handleInput={value => updateAngle(value)} />
      <h3>
        Input a angle into the box above, click on Shea's face to transform his
        eyes to that angle. Click on his face to reset
      </h3>
    </section>
  );
};

export default InputFace;
