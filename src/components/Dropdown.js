import { forwardRef } from "react";

export const Dropdown = forwardRef(
  ({ name, options, classes, value, onChange = null }, ref) => {
    return (
      <select
        value={value}
        // onChange={(e) => onChange(e.target.value)}
        name={name}
        id={name}
        className={classes}
        ref={ref}
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
