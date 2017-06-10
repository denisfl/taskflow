import React from "react";
import "./styles.css";

import ToggleMenu from "./ToggleMenu";
import AddTask from "./AddTask";

export default () => (
  <div className="AppHeader">
    <ToggleMenu />
    <AddTask />
  </div>
);
