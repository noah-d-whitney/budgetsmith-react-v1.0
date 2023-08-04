import { useState } from "react";

export function Dropdown({ options }) {
  const [selected, setSelected] = useState();

  return (
    <select name="" id="" className="dropdown">
      {options.map((option) => (
        <option key={crypto.randomUUID()} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
