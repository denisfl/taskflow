import React from "react";
import "./styles.css";

import Checkbox from "./Checkbox";

export default ({ completed, isEdit, text, onClick }) => (
  <div
    className={isEdit ? "Task is-active" : "Task"}
    tabIndex="0"
    onClick={onClick}
  >
    <Checkbox completed={completed} />
    <div className="Task-content">
      {isEdit
        ? <input type="text" className="Task-contentInput" />
        : <div className="Task-contentText">{text}</div>}
    </div>
    <div className="Task-controls">
      {isEdit && <button className="Task-saveBtn">Сохранить</button>}
    </div>
  </div>
);
