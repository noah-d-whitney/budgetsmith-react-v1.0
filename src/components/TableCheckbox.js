export function TableCheckbox({ setSelected, selected }) {
  return (
    <div
      onClick={setSelected}
      className={`checkbox checkbox--table ${selected ? "filled" : null}`}
    >
      <svg
        className="checkbox__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
      </svg>
    </div>
  );
}
