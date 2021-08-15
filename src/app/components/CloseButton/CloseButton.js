import React from "react";
import "./closebutton.css";

export const CloseButton = (props) => {
  const { onClick } = props;
  return (
    <button
      data-testid="closeButton"
      className="close-button"
      type="submit"
      onClick={(data) => onClick(data)}
    >
      {props.children}
    </button>
  );
};
