import { useState } from "react";
import { FullTransactionTable } from "../components/FullTransactionTable";
import { TransactionsTableTaskbar } from "../components/TransactionsTableTaskbar";

export function TransactionsPage({
  transactions,
  onFlagTransaction,
  onDeleteTransaction,
  categoryNames,
  openModal,
  readOnly,
}) {
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [flagFilter, setFlagFilter] = useState("All");
  const [selectedIDs, setSelectedIDs] = useState([]);

  function toggleSelectedID(id) {
    setSelectedIDs((selected) =>
      selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    );
  }

  function deselectAll() {
    setSelectedIDs([]);
  }

  const taskbarState = {
    typeFilter,
    setTypeFilter,
    categoryFilter,
    setCategoryFilter,
    selectedIDs,
    flagFilter,
    setFlagFilter,
  };

  function handleBulkDelete() {
    if (selectedIDs.length === 0) return;
    onDeleteTransaction(selectedIDs);
    setSelectedIDs([]);
  }

  return (
    <div className="container--view page__transactions">
      <h1 className="page-title">Transactions</h1>
      <TransactionsTableTaskbar
        taskbarState={taskbarState}
        categoryNames={categoryNames}
        onBulkDelete={handleBulkDelete}
        openModal={openModal}
        readOnly={readOnly}
      />
      <FullTransactionTable
        tableData={transactions}
        onDeleteTransaction={onDeleteTransaction}
        onFlagTransaction={onFlagTransaction}
        selectedIDs={selectedIDs}
        toggleSelectedID={toggleSelectedID}
        deselectAll={deselectAll}
        typeFilter={typeFilter}
        categoryFilter={categoryFilter}
        flagFilter={flagFilter}
        readOnly={readOnly}
      />
    </div>
  );
}
