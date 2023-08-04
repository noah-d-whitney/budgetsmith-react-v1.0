import { BalanceTable } from "./BalanceTable";
import { GrowthTable } from "./GrowthTable";
import { SpendingSummaryTable } from "./SpendingSummaryTable";
import { SummaryTable } from "./SummaryTable";

export function HomePage() {
  return (
    <div className="container--view page__home">
      <div className="container--3-cols">
        <SummaryTable />
        <BalanceTable />
        <GrowthTable />
      </div>
      <div className="container--2-cols">
        <SpendingSummaryTable />
      </div>
    </div>
  );
}