import React from "react";

export const FormInput = React.forwardRef((props, ref) => {
  const { label, placeholder, type } = props;
  return (
    <div id="new-category--budget" className="form-container">
      <p className="label label--form">{label}</p>
      <input
        className="text-field text-field--form"
        placeholder={placeholder}
        type={type}
        ref={ref}
      />
    </div>
  );
});
