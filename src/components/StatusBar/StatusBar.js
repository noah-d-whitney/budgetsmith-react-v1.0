import { Date } from "./Date";

export function StatusBar({ children }) {
  return (
    <div className="status-bar">
      <Date />

      <div className="status-bar__budget-period-container">{children}</div>
    </div>
  );
}
