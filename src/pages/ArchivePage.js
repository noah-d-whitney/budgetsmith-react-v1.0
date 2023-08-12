import { ArchiveItem } from "../components/ArchiveItem";

export function ArchivePage({ budgetArchive, onBudgetPeriod, readOnly }) {
  console.log(budgetArchive);
  return (
    <div className="container--view page--archive">
      <h1>Archive</h1>
      <p className="subtitle">View previous budget periods in read-only mode</p>
      <div className="archive__item-container">
        {budgetArchive?.map((item) => (
          <ArchiveItem
            data={item}
            onBudgetPeriod={onBudgetPeriod}
            readOnly={readOnly}
          />
        ))}
      </div>
    </div>
  );
}
