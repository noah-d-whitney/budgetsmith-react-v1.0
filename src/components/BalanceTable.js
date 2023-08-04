export function BalanceTable() {
  return (
    <div className="table table--balance">
      <div className="table__row table__row--header">
        <div className="table__cell table__cell--heading">Balance</div>
      </div>
      <div className="table__body">
        <div className="table__row table__row--body">
          <div className="table__cell table__cell--heading heading-vertical">
            Starting
          </div>
          <div className="table__cell table__cell--body">$100</div>
        </div>
        <div className="table__row table__row--body">
          <div className="table__cell table__cell--heading heading-vertical">
            Current
          </div>
          <div className="table__cell table__cell--body">$200</div>
        </div>
      </div>
    </div>
  );
}
