import React from "react";
import styles from "./InputField.module.scss";

const InputField = (props) => {
  const {handleInput} = props;
  return (
    <>
     <input className="userInput" type="text" name="Rotate" id="Rotate" placeholder="Angle" onChange={e => handleInput(e.target.value)}/>
    </>
  );
};

export default InputField;
