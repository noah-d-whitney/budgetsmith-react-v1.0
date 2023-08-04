import { FullBudgetTable } from "./FullBudgetTable";
import { TableTaskBar } from "./TableTaskBar";

export function BudgetPage({ categories }) {
  return (
    <div className="container--view page__budget">
      <h1 className="page-title">Budget</h1>
      <TableTaskBar />
      <FullBudgetTable categories={categories} />
    </div>
  );
}
