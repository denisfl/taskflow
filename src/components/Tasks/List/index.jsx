import React from "react";
import "./styles.css";

import Task from "../Task";

export default ({ tasks, onTaskClick }) => (
  <div className="Tasks">
    {tasks.map(task => (
      <Task key={task.id} {...task} onClick={() => onTaskClick(task.id)} />
    ))}
  </div>
);
