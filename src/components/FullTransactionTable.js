import { useState } from "react";
import { FullTransactionTableRow } from "./FullTransactionTableRow";

export function FullTransactionTable({
  tableData,
  onDeleteTransaction,
  onFlagTransaction,
}) {
  const [selectedIDs, setSelectedIDs] = useState([]);

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

  return (
    <div className="fullpage-table fullpage-table--transactions">
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
        <div className="fullpage-table__cell--heading"></div>
        <div className="fullpage-table__cell--heading">
          <span>amount</span>
          <div className="fullpage-table__cell--heading__sort-icon"></div>
        </div>
        <div className="fullpage-table__cell--heading">
          <span>date</span>
          <div className="fullpage-table__cell--heading__sort-icon"></div>
        </div>
        <div className="fullpage-table__cell--heading">type</div>
        <div className="fullpage-table__cell--heading">
          <span>category</span>
          <div className="fullpage-table__cell--heading__sort-icon"></div>
        </div>
        <div className="fullpage-table__cell--heading">note</div>
        <div className="fullpage-table__cell--heading"></div>
      </div>
      <div id="transactions-table-body" className="fullpage-table__body">
        {tableData.map((item) => (
          <FullTransactionTableRow
            key={item.id}
            data={item}
            setSelected={toggleSelectedID}
            selectedIDs={selectedIDs}
            onDeleteTransaction={onDeleteTransaction}
            onFlagTransaction={onFlagTransaction}
          />
        ))}
      </div>
    </div>
  );
}
