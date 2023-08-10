import { forwardRef } from "react";

export const Dropdown = forwardRef(
  (
    { name, options, classes, value, onChange = null, disabled },
    ref = null
  ) => {
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
          <option key={crypto.randomUUID()} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
);
