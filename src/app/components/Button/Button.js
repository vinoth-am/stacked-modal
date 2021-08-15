import React from "react";
import "./buttonstyles.css";

export const Button = (props) => {
  const { onClick, color, style } = props;

  return (
    <button
      data-testid="actionButton"
      style={style}
      className={`${"button"} ${color}`}
      onClick={(data) => onClick(data)}
    >
      {props.children}
    </button>
  );
};
