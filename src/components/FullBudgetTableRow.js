import { TableCheckbox } from "./TableCheckbox";

export function FullBudgetTableRow({ setSelected, selectedIDs, data }) {
  return (
    <div className="fullpage-table__row fullpage-table__row--body">
      <div className="fullpage-table__cell--body value--checkbox">
        <TableCheckbox
          setSelected={() => setSelected(data.id)}
          selected={selectedIDs.includes(data.id) ? true : false}
        />
      </div>

      <div className="fullpage-table__cell--body value--category">
        {data.name}
      </div>

      <div className="fullpage-table__cell--body value--budget">
        ${Math.abs(data.budget)}
      </div>

      <div className="fullpage-table__cell--body value--spent">$FIX</div>
      <div className="fullpage-table__cell--body value--difference">$FIX</div>

      <div className="fullpage-table__cell--body value--type">
        <div
          className={`fullpage-table__type-card ${
            data.type === "expense" ? "bg-red" : "bg-green"
          }`}
        >
          {data.type}
        </div>
      </div>

      <div className="fullpage-table__cell--body value--tag">
        <div>{data.tag}</div>
      </div>

      <div className="fullpage-table__cell--body value--view-activity">
        <a className="fullpage-table__view-activity" href="#">
          View activity
        </a>
      </div>

      <div className="fullpage-table__cell--body value--edit">
        <svg
          className="fullpage-table__edit-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM192,108.69,147.32,64l24-24L216,84.69Z"></path>
        </svg>
      </div>
      <div className="fullpage-table__cell--body value--delete">
        <svg
          className="fullpage-table__delete-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path>
        </svg>
      </div>
    </div>
  );
}
