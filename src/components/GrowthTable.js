export function GrowthTable() {
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
          <div className="table__cell table__cell--body">$100</div>
        </div>
        <div className="table__row table__row--body">
          <div className="table__cell table__cell--heading heading-vertical">
            Increase
          </div>
          <div className="table__cell table__cell--body">10%</div>
        </div>
      </div>
    </div>
  );
}
