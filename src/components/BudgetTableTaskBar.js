import { Dropdown } from "./Dropdown";
import { TableTaskBarButton } from "./TableTaskBarButton";

export function BudgetTableTaskBar({ typeFilter, onTypeFilter, openModal }) {
  return (
    <div className="taskbar margin-small">
      <div className="taskbar-itemcontainer">
        <label htmlFor="typeFilterSelect" className="label label--action">
          Type
        </label>
        <Dropdown
          options={["All", "Income", "Expense"]}
          value={typeFilter}
          onChange={onTypeFilter}
          name="typeFilterSelect"
          classes="dropdown"
        />
      </div>
      <TableTaskBarButton
        text="New Category"
        callback={() => openModal("new-category")}
      />

      <div className="taskbar-itemcontainer">
        <label className="label label--action">Bulk Task</label>
        <Dropdown options={["All", "Income", "Expenses"]} />
      </div>
      <div className="taskbar-itemcontainer">
        <label className="label label--action">Bulk Task</label>
        <Dropdown options={["All", "Income", "Expenses"]} />
      </div>
    </div>
  );
}
