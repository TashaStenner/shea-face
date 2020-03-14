import React from "react";
import styles from "./InputFace.module.scss";
import Face from "../../Components/Face";
import InputField from "../../Components/InputField";

const InputFace = () => {
  return (
    <>
      <Face />
      <InputField handleInput={getAngle} />
    </>
  );
};

export default InputFace;
