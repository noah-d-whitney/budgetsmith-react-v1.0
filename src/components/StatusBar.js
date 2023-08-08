import { useDate } from "../hooks/useDate";

export function StatusBar() {
  const { date } = useDate(null);

  return (
    <div className="status-bar">
      <p className="status-bar__date">{date}</p>

      <div className="status-bar__budget-period-container">
        <p className="status-bar__budget-period">
          Current Budget Period: 06/15/2023 — 07/15/2023
        </p>
        <svg
          className="status-bar__edit-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          role="button"
        >
          <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
        </svg>
      </div>
    </div>
  );
}
