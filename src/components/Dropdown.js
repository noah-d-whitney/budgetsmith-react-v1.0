import { forwardRef } from "react";
import uniqid from "uniqid";

export const Dropdown = forwardRef(
  ({ name, options, classes, value, onChange = null, disabled }, ref) => {
    function handleChange(e) {
      if (!onChange) return;
      onChange(e.target.value);
    }
    return (
      <select
        value={value}
        onChange={handleChange}
        name={name}
        id={name}
        className={classes}
        ref={ref}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={uniqid()} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
);
