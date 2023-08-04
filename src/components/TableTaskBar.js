import { Dropdown } from "./Dropdown";

export function TableTaskBar() {
  return (
    <div className="taskbar margin-small">
      <div class="taskbar-itemcontainer">
        <label class="label label--action">Bulk Task</label>
        <Dropdown options={["All", "Income", "Expenses"]} />
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
