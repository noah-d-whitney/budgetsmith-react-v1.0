export function SpendingSummaryTableRow({ data }) {
  function colorDifference(value) {
    let returnValue;
    if (value === 0) returnValue = "grey";
    if (value > 0) returnValue = "red";
    if (value < 0) returnValue = "green";

    return returnValue;
  }

  return (
    <div className="table__row table__row--body">
      <div className="table__cell table__cell--heading heading-vertical">
        {data.name}
      </div>
      <div className="table__cell table__cell--body">${data.budget}</div>
      <div className="table__cell table__cell--body">${data.actual}</div>
      <div
        className={`table__cell table__cell--body ${colorDifference(
          data.difference
        )}`}
      >
        ${data.difference}
      </div>
    </div>
  );
}
