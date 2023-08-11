import React from "react";

export const FormInput = React.forwardRef((props, ref) => {
  const { label, placeholder, type, required = false, maxLength } = props;
  return (
    <div id="new-category--budget" className="form-container">
      <p className="label label--form">{label}</p>
      <input
        required={required}
        className="text-field text-field--form"
        placeholder={placeholder}
        type={type}
        ref={ref}
        maxLength={maxLength}
      />
    </div>
  );
});
