import React from "react";
import "./styles.css";

export default ({ checked, disabled }) => (
  <button className="Checkbox">
    {!checked &&
      <svg className="Checkbox-icon">
        <use xlinkHref="#icon-checkbox-unchecked" />
      </svg>}
    {checked &&
      <svg className="Checkbox-icon">
        <use xlinkHref="#icon-checkbox-checked" />
      </svg>}
  </button>
);
