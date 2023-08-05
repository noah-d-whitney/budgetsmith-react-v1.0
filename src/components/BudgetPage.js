import { FullBudgetTable } from "./FullBudgetTable";
import { BudgetTableTaskBar } from "./BudgetTableTaskBar";
import { useState } from "react";

export function BudgetPage({ categories }) {
  const [typeFilter, setTypeFilter] = useState("All");

  return (
    <div className="container--view page__budget">
      <h1 className="page-title">Budget</h1>
      <BudgetTableTaskBar
        typeFilter={typeFilter}
        onTypeFilter={setTypeFilter}
      />
      <FullBudgetTable categories={categories} typeFilter={typeFilter} />
    </div>
  );
}
