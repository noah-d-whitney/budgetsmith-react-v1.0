export function BudgetPeriodBtn({
  readOnly,
  onNewBudgetPeriod,
  onReturnToCurrent,
}) {
  return !readOnly ? (
    <button onClick={onNewBudgetPeriod} className="btn--status">
      NEW PERIOD
    </button>
  ) : (
    <button onClick={onReturnToCurrent} className="btn--status">
      BACK TO CURRENT PERIOD
    </button>
  );
}
