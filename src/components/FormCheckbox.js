import { forwardRef } from "react";

export const FormCheckbox = forwardRef(({ label, name }, ref) => {
  return (
    <>
      <label htmlFor={name} className="label label--form">
        {label}
      </label>
      <input
        ref={ref}
        name={name}
        type="checkbox"
        className="checkbox checkbox--form"
      />
    </>
  );
});
