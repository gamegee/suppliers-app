import * as React from "react";

const Textfield = ({
  label,
  value,
  onChange,
  placeholder,
  highlightDanger,
  requiredMessage,
  errorMessage
}) => {
  return (
    <div className="textfield">
      <label className="textfield__label">{label}</label>
      <input
        {...(highlightDanger && { className: "textfield__input--danger" })}
        type="text"
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
      {highlightDanger && (
        <div className="textfield__error-notification">
          {!value.length && requiredMessage}
          {!!value.length && errorMessage}
        </div>
      )}
    </div>
  );
};

export default Textfield;
