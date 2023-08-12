import { ArchiveItem } from "../components/ArchiveItem";
import uniqid from "uniqid";

export function ArchivePage({ budgetArchive, onBudgetPeriod, readOnly }) {
  console.log(budgetArchive);
  return (
    <div className="container--view page--archive">
      <h1 className="page-title">Archive</h1>
      <p className="subtitle">View previous budget periods in read-only mode</p>
      <div className="archive__item-container">
        {budgetArchive.length > 0 ? (
          budgetArchive.map((item) => (
            <ArchiveItem
              data={item}
              key={uniqid()}
              onBudgetPeriod={onBudgetPeriod}
              readOnly={readOnly}
            />
          ))
        ) : (
          <p className="archive__empty-text">
            No past budget periods to display. When you start a new period, your
            old ones will be available here to view in read-only mode
          </p>
        )}
      </div>
    </div>
  );
}
