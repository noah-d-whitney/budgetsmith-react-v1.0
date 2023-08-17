import { calcDateDiff, formatDate } from "../../helpers";

export function BudgetPeriod({
  readOnly,
  navitageTo,
  budgetPeriodStart,
  budgetPeriodEnd,
}) {
  return (
    <>
      <p className="status-bar__budget-period">
        Budget Period Start: {formatDate(budgetPeriodStart)} | Period Length:{" "}
        {readOnly
          ? calcDateDiff(budgetPeriodStart, budgetPeriodEnd).totalDays
          : calcDateDiff(budgetPeriodStart).totalDays}{" "}
        Days
      </p>
      <svg
        onClick={() => navitageTo("/settings")}
        className="status-bar__edit-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role="button"
      >
        <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
      </svg>
    </>
  );
}
