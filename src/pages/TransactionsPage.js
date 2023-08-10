export function TransactionsPage({ children, onDeleteTransaction, openModal }) {
  return (
    <div className="container--view page__budget">
      <h1 className="page-title">Transactions</h1>
      {children}
    </div>
  );
}
