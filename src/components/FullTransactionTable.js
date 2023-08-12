import { useState } from "react";
import { FullTransactionTableRow } from "./FullTransactionTableRow";

export function FullTransactionTable({
  tableData,
  onDeleteTransaction,
  onFlagTransaction,
  selectedIDs,
  toggleSelectedID,
  deselectAll,
  typeFilter,
  categoryFilter,
  flagFilter,
  readOnly,
}) {
  const [sort, setSort] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const isFiltered =
    typeFilter !== "All" || categoryFilter !== "All" || flagFilter !== "All";

  const data = !isFiltered ? tableData : filterData(tableData);
  const renderData = sortBy(data, sort, sortOrder);
  console.log(renderData);

  function filterData(data) {
    if (typeFilter !== "All") {
      return data.filter((x) => x.type === typeFilter.toLowerCase());
    }
    if (categoryFilter !== "All") {
      return data.filter((x) => x.category === categoryFilter.toLowerCase());
    }
    if (flagFilter !== "All") {
      const flagged = flagFilter === "Flagged" ? true : false;
      return data.filter((x) => x.flagged === flagged);
    }
  }

  function sortBy(data, sortProp, order) {
    if (!sort) return data;
    if (order === "asc") {
      return data.toSorted((a, b) => (a[sortProp] > b[sortProp] ? 1 : -1));
    }
    if (order === "des") {
      return data.toSorted((a, b) => (a[sortProp] < b[sortProp] ? 1 : -1));
    }
  }

  function handleClickSort(sortProp) {
    if (sort !== sortProp) {
      setSort(sortProp);
      setSortOrder("asc");
    }
    if (sort === sortProp && sortOrder === "asc") {
      setSortOrder("des");
    }
    if (sort === sortProp && sortOrder === "des") {
      setSort(null);
      setSortOrder(null);
    }
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
          <div
            onClick={() => handleClickSort("amount")}
            className="fullpage-table__cell--heading__sort-icon"
          ></div>
        </div>
        <div className="fullpage-table__cell--heading">
          <span>date</span>
          <div
            onClick={() => handleClickSort("date")}
            className="fullpage-table__cell--heading__sort-icon"
          ></div>
        </div>
        <div className="fullpage-table__cell--heading">type</div>
        <div className="fullpage-table__cell--heading">
          <span>category</span>
          <div
            onClick={() => handleClickSort("category")}
            className="fullpage-table__cell--heading__sort-icon"
          ></div>
        </div>
        <div className="fullpage-table__cell--heading">note</div>
        <div className="fullpage-table__cell--heading"></div>
      </div>
      <div id="transactions-table-body" className="fullpage-table__body">
        {renderData.map((item) => (
          <FullTransactionTableRow
            key={item.id}
            data={item}
            setSelected={toggleSelectedID}
            selectedIDs={selectedIDs}
            onDeleteTransaction={onDeleteTransaction}
            onFlagTransaction={onFlagTransaction}
            readOnly={readOnly}
          />
        ))}
      </div>
    </div>
  );
}
