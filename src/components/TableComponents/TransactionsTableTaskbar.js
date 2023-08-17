import { Dropdown } from "../FormComponents/Dropdown";
import { TableTaskBarButton } from "./TableTaskBarButton";

export function TransactionsTableTaskbar({
  taskbarState,
  categoryNames,
  onBulkDelete,
  openModal,
  readOnly,
}) {
  const {
    typeFilter,
    setTypeFilter,
    categoryFilter,
    setCategoryFilter,
    flagFilter,
    setFlagFilter,
    selectedIDs,
  } = taskbarState;
  return (
    <div className="taskbar margin-small">
      {selectedIDs.length !== 0 ? (
        <TableTaskBarButton
          text="Bulk Delete"
          callback={onBulkDelete}
          disabled={readOnly}
        />
      ) : null}
      <div className="taskbar-itemcontainer">
        <label htmlFor="typeFilterSelect" className="label label--action">
          Type
        </label>
        <Dropdown
          options={["All", "Income", "Expense"]}
          value={typeFilter}
          onChange={setTypeFilter}
          name="typeFilterSelect"
          classes="dropdown"
          disabled={categoryFilter !== "All" || flagFilter !== "All"}
        />
      </div>
      <div className="taskbar-itemcontainer">
        <label htmlFor="typeFilterSelect" className="label label--action">
          Flagged
        </label>
        <Dropdown
          options={["All", "Flagged", "Unflagged"]}
          value={flagFilter}
          onChange={setFlagFilter}
          name="flagFilterSelect"
          classes="dropdown"
          disabled={categoryFilter !== "All" || typeFilter !== "All"}
        />
      </div>
      <div className="taskbar-itemcontainer">
        <label htmlFor="tagFilterSelect" className="label label--action">
          Category
        </label>
        <Dropdown
          options={[
            "All",
            ...categoryNames.map(
              (name) => name[0].toUpperCase() + name.slice(1)
            ),
          ]}
          value={categoryFilter}
          onChange={setCategoryFilter}
          name="categoryFilterSelect"
          classes="dropdown"
          disabled={typeFilter !== "All" || flagFilter !== "All"}
        />
      </div>
      <TableTaskBarButton
        text="New Transaction"
        callback={() => openModal("new-transaction")}
        disabled={readOnly}
      />
    </div>
  );
}
