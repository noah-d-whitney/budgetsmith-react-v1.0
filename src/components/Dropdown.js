export function Dropdown({ name, options, classes, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      name={name}
      id={name}
      className={classes}
    >
      {options.map((option) => (
        <option key={crypto.randomUUID()} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
