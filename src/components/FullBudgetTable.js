import { useState } from "react";
import { FullBudgetTableRow } from "./FullBudgetTableRow";

export function FullBudgetTable({ categories, typeFilter }) {
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [sorted, setSorted] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const data = sorted ? sortBy(categories, sorted, sortOrder) : categories;
  const filteredData = data.filter(
    (item) => item.type === typeFilter.toLowerCase()
  );

  function sortBy(data, sortProp, order) {
    if (order === "asc") {
      return data.toSorted((a, b) => (a[sortProp] > b[sortProp] ? 1 : -1));
    }
    if (sortOrder === "des") {
      return data.toSorted((a, b) => (a[sortProp] < b[sortProp] ? 1 : -1));
    }
  }

  function handleClickSort(sortProp) {
    if (sorted !== sortProp) {
      setSorted(sortProp);
      setSortOrder("asc");
    }
    if (sorted === sortProp && sortOrder === "asc") {
      setSortOrder("des");
    }
    if (sorted === sortProp && sortOrder === "des") {
      setSorted(null);
      setSortOrder(null);
    }
  }

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
            onClick={() => handleClickSort("name")}
            className="fullpage-table__cell--heading__sort-icon"
          ></div>
        </div>
        <div className="fullpage-table__cell--heading">
          <span>budget</span>
          <div
            onClick={() => handleClickSort("budget")}
            className="fullpage-table__cell--heading__sort-icon"
          ></div>
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
        {typeFilter !== "All"
          ? filteredData.map((cat) => (
              <FullBudgetTableRow
                data={cat}
                setSelected={toggleSelectedID}
                selectedIDs={selectedIDs}
                key={cat.id}
              />
            ))
          : data.map((cat) => (
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
