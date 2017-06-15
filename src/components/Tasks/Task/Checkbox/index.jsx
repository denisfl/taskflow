import React from "react";
import "./styles.css";

export default ({ completed, disabled }) => (
  <button className="Checkbox">
    <svg className="Checkbox-icon">
      {completed
        ? <use xlinkHref="#icon-checkbox-checked" />
        : <use xlinkHref="#icon-checkbox-unchecked" />}
    </svg>
  </button>
);
