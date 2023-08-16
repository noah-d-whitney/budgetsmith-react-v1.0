import { TableCheckbox } from "./TableCheckbox";
import { TableFlag } from "./TableFlag";

export function FullTransactionTableRow({
  data,
  setSelected,
  selectedIDs,
  onDeleteTransaction,
  onFlagTransaction,
  readOnly,
}) {
  return (
    <div className="fullpage-table__row fullpage-table__row--body">
      <div className="fullpage-table__cell--body value--checkbox">
        {readOnly ? null : (
          <TableCheckbox
            setSelected={() => setSelected(data.id)}
            selected={selectedIDs.includes(data.id) ? true : false}
          />
        )}
      </div>
      <div className="fullpage-table__cell--body value--flag">
        {readOnly ? (
          <TableFlag isFlagged={data.flagged} />
        ) : (
          <TableFlag
            isFlagged={data.flagged}
            onFlagged={() => onFlagTransaction(data.id)}
          />
        )}
      </div>
      <div className="fullpage-table__cell--body value--amount">
        ${Math.abs(data.amount)}
      </div>
      <div className="fullpage-table__cell--body value--date">
        {`${new Date(data.date).getMonth() + 1}/${new Date(
          data.date
        ).getDate()}/${new Date(data.date).getFullYear()}`}
      </div>
      <div className="fullpage-table__cell--body value--type">
        <div
          className={`fullpage-table__type-card ${
            data.type === "expense" ? "bg-red" : "bg-green"
          }`}
        >
          {data.type}
        </div>
      </div>
      <div className="fullpage-table__cell--body value--category">
        {data.category}
      </div>
      <div className="fullpage-table__cell--body value--note">{data.note}</div>
      <div className="fullpage-table__cell--body value--delete">
        {readOnly ? null : (
          <svg
            className="fullpage-table__delete-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            onClick={() => onDeleteTransaction([data.id])}
          >
            <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path>
          </svg>
        )}
      </div>
    </div>
  );
}
