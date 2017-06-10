import React from "react";
import "./styles.css";

import Task from "../Task";

export default () => (
  <div className="Tasks">
    <Task title="Написать реферат" />
    <Task title="Пользоваться совершенно бесплатно" checked isEdit />
  </div>
);
