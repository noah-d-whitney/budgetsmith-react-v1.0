import { Dropdown } from "./Dropdown";

export function BudgetTableTaskBar({ typeFilter, onTypeFilter }) {
  return (
    <div className="taskbar margin-small">
      <div class="taskbar-itemcontainer">
        <label class="label label--action">Type</label>
        <Dropdown
          options={["All", "Income", "Expense"]}
          typeFilter={typeFilter}
          onTypeFilter={onTypeFilter}
        />
      </div>
      <div class="taskbar-itemcontainer">
        <label class="label label--action">Bulk Task</label>
        <Dropdown options={["All", "Income", "Expenses"]} />
      </div>
      <div class="taskbar-itemcontainer">
        <label class="label label--action">Bulk Task</label>
        <Dropdown options={["All", "Income", "Expenses"]} />
      </div>
    </div>
  );
}
