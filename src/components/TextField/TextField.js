import React from "react";
import './TextField.scss';

const TextField = ({
  label = "Text Field: ",
  type = "text",
  name = "textField",
  value,
  placeholder = "Text Field",
  pattern = undefined,
  required = null,
  onChange = () => {},
  onError = () => {},
  maxLength = 255,
  minLength = 0,
  id = (Date.now() + Date.now()).toString()
}) => {
  return (
    <div className="TextField">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        onError={onError}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        {...required}
      />
    </div>
  );
};

export default TextField;
