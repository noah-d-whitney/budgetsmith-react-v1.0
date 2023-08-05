import { useState } from "react";

export function Dropdown({ options, typeFilter, onTypeFilter }) {
  const [selected, setSelected] = useState();

  return (
    <select
      value={typeFilter}
      onChange={(e) => onTypeFilter(e.target.value)}
      name=""
      id=""
      className="dropdown"
    >
      {options.map((option) => (
        <option key={crypto.randomUUID()} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
