import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import SVGSprite from "./SVGSprite";
import Tasks from "./Tasks/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SVGSprite />
        <Header />
        <div className="AppMain">
          <Tasks />
        </div>
      </div>
    );
  }
}

export default App;
