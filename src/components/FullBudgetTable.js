import { useState } from "react";
import { FullBudgetTableRow } from "./FullBudgetTableRow";

export function FullBudgetTable({ categories }) {
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [sorted, setSorted] = useState(null);

  function toggleSelectedID(id) {
    setSelectedIDs((selected) =>
      selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    );
  }

  function deselectAll() {
    setSelectedIDs([]);
  }

  console.log(selectedIDs);
  return (
    <div className="fullpage-table fullpage-table--categories">
      <div className="fullpage-table__row fullpage-table__row--header">
        <div className="fullpage-table__cell--heading">
          {selectedIDs.length > 0 ? (
            <div
              onClick={deselectAll}
              className="checkbox checkbox--table checkbox--table--bulk"
            >
              <div className="checkbox--table--bulk__icon"></div>
            </div>
          ) : null}
        </div>
        <div className="fullpage-table__cell--heading">
          <span>name</span>
          <div
            onClick={() => setSorted("name")}
            className="fullpage-table__cell--heading__sort-icon"
          ></div>
        </div>
        <div className="fullpage-table__cell--heading">
          <span>budget</span>
          <div className="fullpage-table__cell--heading__sort-icon"></div>
        </div>
        <div className="fullpage-table__cell--heading">
          <span>spent</span>
          <div className="fullpage-table__cell--heading__sort-icon"></div>
        </div>
        <div className="fullpage-table__cell--heading">
          <span>difference</span>
        </div>
        <div className="fullpage-table__cell--heading">type</div>
        <div className="fullpage-table__cell--heading">priority</div>
        <div className="fullpage-table__cell--heading"></div>
        <div className="fullpage-table__cell--heading"></div>
        <div className="fullpage-table__cell--heading"></div>
      </div>
      <div id="budget-table-body" className="fullpage-table__body">
        {categories.map((cat) => (
          <FullBudgetTableRow
            data={cat}
            setSelected={toggleSelectedID}
            selectedIDs={selectedIDs}
            key={cat.id}
          />
        ))}
      </div>
    </div>
  );
}
