import { FullBudgetTable } from "./FullBudgetTable";
import { BudgetTableTaskBar } from "./BudgetTableTaskBar";
import { useState } from "react";

export function BudgetPage({ tableData, onDeleteCategory, openModal }) {
  const [typeFilter, setTypeFilter] = useState("All");

  return (
    <div className="container--view page__budget">
      <h1 className="page-title">Budget</h1>
      <BudgetTableTaskBar
        typeFilter={typeFilter}
        onTypeFilter={setTypeFilter}
        openModal={openModal}
      />
      <FullBudgetTable
        tableData={tableData}
        typeFilter={typeFilter}
        onDeleteCategory={onDeleteCategory}
      />
    </div>
  );
}
