import React, { Component } from "react";
import "./styles.css";

import Header from "../Header";
import SVGSprite from "../SVGSprite";
// import Tasks from "../Tasks/List";
import VisibleTasks from "../Tasks/VisibleTasks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SVGSprite />
        <Header />
        <div className="AppMain">
          <VisibleTasks />
        </div>
      </div>
    );
  }
}

export default App;
