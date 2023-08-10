export function TableFlag({ isFlagged, onFlagged }) {
  return (
    <div className="fullpage-table__cell--body value--flag">
      {!isFlagged ? (
        <svg
          onClick={onFlagged}
          className="fullpage-table__flag-btn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <path d="M34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,210.76,42c-28,24.23-51.72,12.49-79.21-1.12C103.07,26.76,70.78,10.79,34.76,42ZM208,164.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path>
        </svg>
      ) : null}
      {isFlagged ? (
        <svg
          onClick={onFlagged}
          className="fullpage-table__flag-btn filled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <path d="M224,48V168a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C97.87,162,74.79,150.61,48,171.77V216a8,8,0,0,1-16,0V48a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C159,54.46,182.79,66.2,210.76,42A8,8,0,0,1,224,48Z"></path>
        </svg>
      ) : null}
    </div>
  );
}
