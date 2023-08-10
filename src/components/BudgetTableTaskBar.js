import { Dropdown } from "./Dropdown";
import { TableTaskBarButton } from "./TableTaskBarButton";

export function BudgetTableTaskBar({
  typeFilter,
  onTypeFilter,
  tagFilter,
  onTagFilter,
  openModal,
}) {
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
          disabled={tagFilter !== "All"}
        />
      </div>
      <div className="taskbar-itemcontainer">
        <label htmlFor="tagFilterSelect" className="label label--action">
          Tag
        </label>
        <Dropdown
          options={["All", "Income", "Bill", "Necessity", "Discretionary"]}
          value={tagFilter}
          onChange={onTagFilter}
          name="tagFilterSelect"
          classes="dropdown"
          disabled={typeFilter !== "All"}
        />
      </div>
      <TableTaskBarButton
        text="New Category"
        callback={() => openModal("new-category")}
      />
    </div>
  );
}
