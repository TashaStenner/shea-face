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
      </section>
 
  );
};

export default InputFace;
