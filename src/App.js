import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Containers/Routes";
import Face from "./Components/Face/Face";
import InputField from "./Components/InputField/InputField";
import InputFace from "./Containers/InputFace/InputFace";

function App() {
  return (
    <>
      <Routes />
      <InputFace />
    </>
  );
}

export default App;
