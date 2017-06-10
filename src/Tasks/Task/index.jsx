import React from "react";
import "./styles.css";

import Checkbox from "./Checkbox";

export default ({ checked, isEdit, title }) => (
  <div className={isEdit ? "Task is-active" : "Task"} tabIndex="0">
    <Checkbox checked={checked} />
    <div className="Task-content">
      {isEdit && <input type="text" className="Task-contentInput" />}
      {!isEdit && <div className="Task-contentText">{title}</div>}
    </div>
    <div className="Task-controls">
      {isEdit && <button className="Task-saveBtn">Сохранить</button>}
    </div>
  </div>
);
