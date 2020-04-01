import React from "react";
import styles from "./App.module.scss";
import InputFace from "./Containers/InputFace/InputFace";

function App() {
  return (
    <>
    <section className={styles.faces}>
      <InputFace />
      <InputFace />
      <InputFace />
      <p>
        Input a angle into the box above, click on Shea's face to transform his
        eyes to that angle. <br/> Click his face to reset 
      </p>
      </section>
    </>
  );
}

export default App;
