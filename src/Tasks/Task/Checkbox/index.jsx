import React from "react";
import "./styles.css";

export default ({ checked, disabled }) => (
  <button className="Checkbox">
    <svg className="Checkbox-icon">
      {checked
        ? <use xlinkHref="#icon-checkbox-checked" />
        : <use xlinkHref="#icon-checkbox-unchecked" />}
    </svg>
  </button>
);
