export function SummaryTable({ balances }) {
  const {
    plannedExpenses,
    actualExpenses,
    plannedIncome,
    actualIncome,
    incomeDifference,
    expensesDifference,
  } = balances;

  return (
    <div className="table table--summary">
      <div className="table__row table__row--header">
        <div className="table__cell table__cell--heading"></div>
        <div className="table__cell table__cell--heading">EXPENSES</div>
        <div className="table__cell table__cell--heading">INCOME</div>
      </div>
      <div className="table__body">
        <div className="table__row table__row--body">
          <div className="table__cell table__cell--heading heading-vertical">
            Planned
          </div>
          <div
            id="summary-table__planned-expenses"
            className="table__cell table__cell--body"
          >
            ${plannedExpenses}
          </div>
          <div
            id="summary-table__planned-income"
            className="table__cell table__cell--body"
          >
            ${plannedIncome}
          </div>
        </div>
        <div className="table__row table__row--body">
          <div className="table__cell table__cell--heading heading-vertical">
            Actual
          </div>
          <div
            id="summary-table__actual-expenses"
            className="table__cell table__cell--body"
          >
            ${actualExpenses}
          </div>
          <div
            id="summary-table__actual-income"
            className="table__cell table__cell--body"
          >
            ${actualIncome}
          </div>
        </div>
        <div className="table__row table__row--body">
          <div className="table__cell table__cell--heading heading-vertical">
            Difference
          </div>
          <div
            id="summary-table__expenses-diff"
            className={`table__cell table__cell--body ${
              expensesDifference < 0 ? "red" : "green"
            }`}
          >
            ${expensesDifference}
          </div>
          <div
            id="summary-table__income-diff"
            className={`table__cell table__cell--body ${
              incomeDifference < 0 ? "red" : "green"
            }`}
          >
            ${incomeDifference}
          </div>
        </div>
      </div>
    </div>
  );
}
