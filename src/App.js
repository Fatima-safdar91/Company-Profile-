import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
import Comp from "./Components/Comp";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>HELLO !!</h1>
        <Comp name = "Fatima Safdar"/>
      </>
    );
  }
}

export default App;
