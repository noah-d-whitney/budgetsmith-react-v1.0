import { FullBudgetTable } from "../components/FullBudgetTable";
import { BudgetTableTaskBar } from "../components/BudgetTableTaskBar";
import { useState } from "react";

export function BudgetPage({ tableData, onDeleteCategory, openModal }) {
  const [typeFilter, setTypeFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");
  const [selectedIDs, setSelectedIDs] = useState([]);

  function handleBulkDelete() {
    if (selectedIDs.length === 0) return;
    selectedIDs.forEach((x) => onDeleteCategory(x));
    setSelectedIDs([]);
  }

  return (
    <div className="container--view page__budget">
      <h1 className="page-title">Budget</h1>
      <BudgetTableTaskBar
        typeFilter={typeFilter}
        onTypeFilter={setTypeFilter}
        openModal={openModal}
        tagFilter={tagFilter}
        onTagFilter={setTagFilter}
        onBulkDelete={handleBulkDelete}
        selectedIDs={selectedIDs}
      />
      <FullBudgetTable
        tableData={tableData}
        typeFilter={typeFilter}
        tagFilter={tagFilter}
        onDeleteCategory={onDeleteCategory}
        selectedIDs={selectedIDs}
        setSelectedIDs={setSelectedIDs}
      />
    </div>
  );
}
