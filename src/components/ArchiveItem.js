import { formatDate } from "../helpers";
import { TableTaskBarButton } from "./TableTaskBarButton";

export function ArchiveItem({ data, onBudgetPeriod, readOnly }) {
  return (
    <div className="archive__item">
      <span className="archive__item-text bold">
        {formatDate(new Date(data.budgetPeriodStart))}&#8212;
        {formatDate(new Date(data.budgetPeriodEnd))}
      </span>
      <span className="archive__item-text">
        Starting Balance: <strong>${data.startingBalance}</strong>
      </span>
      <span className="archive__item-text">
        Ending Balance: ${data.endingBalance}
      </span>
      <TableTaskBarButton
        callback={() => onBudgetPeriod(data.id)}
        text="View Period"
        disabled={readOnly}
      />
    </div>
  );
}
