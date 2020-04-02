import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import InputFace from "./Containers/InputFace/InputFace";

function App() {
  const [faces, setFaces] = useState([]);
  let randomNum;

  useEffect(() => {
    getFaceNum();
  }, []);

  const getFaceNum = () => {
    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=15&col=1&base=10&format=plain&rnd=new"
    )
      .then(result => result.json())
      .then(result => {
        let faceArray = [];
        randomNum = result;
        console.log(randomNum);
        for (let index = 0; index <= randomNum; index++) {
          faceArray.push(<InputFace />);
        }

        setFaces(faceArray);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <section className={styles.faces}>
        <p>
          Input a angle into the box above, click on Shea's face to transform
          his eyes to that angle. <br /> Click his face to reset
        </p>
        {faces}
      </section>
    </>
  );
}

export default App;
