import { Link } from "react-router-dom";
import { SpendingSummaryTableRow } from "./SpendingSummaryTableRow";

export function SpendingSummaryTable({ budgetTableData }) {
  return (
    <div className="container container--table-w-header">
      <h1>
        Spending Summary
        <Link to="/budget">
          <svg
            className="heading-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path d="M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>
          </svg>
        </Link>
      </h1>
      <div className="table table--budget-sum table--large-4-cols">
        <div className="table__row table__row--header">
          <div className="table__cell table__cell--heading"></div>
          <div className="table__cell table__cell--heading">Budget</div>
          <div className="table__cell table__cell--heading">Spent</div>
          <div className="table__cell table__cell--heading">Diff.</div>
        </div>
        <div className="table__body">
          {budgetTableData.map((cat) =>
            cat.type === "expense" ? (
              <SpendingSummaryTableRow key={cat.id} data={cat} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
