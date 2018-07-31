import React from "react";
import "./Button.scss";

const Button = ({
  label = "Button",
  style = "primary",
  onClick = () => {}
}) => {
  return (
    <button className={"Button " + style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
