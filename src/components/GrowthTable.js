export function GrowthTable({ balances }) {
  const { saved, increase } = balances;

  return (
    <div className="table table--growth">
      <div className="table__row table__row--header">
        <div className="table__cell table__cell--heading">Growth</div>
      </div>
      <div className="table__body">
        <div className="table__row table__row--body">
          <div className="table__cell table__cell--heading heading-vertical">
            Saved
          </div>
          <div className="table__cell table__cell--body">${saved}</div>
        </div>
        <div className="table__row table__row--body">
          <div className="table__cell table__cell--heading heading-vertical">
            Increase
          </div>
          <div
            className={`table__cell table__cell--body ${
              increase > 0 ? "green" : "red"
            }`}
          >
            {increase ? Math.round(increase) : 0}%
          </div>
        </div>
      </div>
    </div>
  );
}
