import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Welcome = props => {
  return <h1>Welcome{props.name}</h1>;
};
const friends = ["David", "Sahil", "Gordon"];
class App extends Component {
  render() {
    return (
      <div className="App">
        {friends.map((element, i) => {
          <Welcome key={i} name={element} />;
        })}
      </div>
    );
  }
}

export default App;
