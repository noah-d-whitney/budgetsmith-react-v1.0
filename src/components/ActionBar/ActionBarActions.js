import { ActionBarAction } from "../../dataClasses";
import { formatDate } from "../../helpers";
import { ActionBarButton } from "./ActionBarButton";

export function ActionBarActions({
  actions,
  readOnly,
  returnToCurrent,
  budgetPeriodStart,
  budgetPeriodEnd,
}) {
  return (
    <>
      {!readOnly ? (
        <>
          <p className="action-bar__actions-label">Quick Actions</p>

          {actions.map((action) => (
            <ActionBarButton action={action} key={crypto.randomUUID()} />
          ))}
        </>
      ) : (
        <>
          <h2 className="action-bar__message">
            Read-Only | {formatDate(budgetPeriodStart)}&#8212;
            {formatDate(budgetPeriodEnd)}
          </h2>
          <ActionBarButton
            action={new ActionBarAction("Back to Current", returnToCurrent)}
          />
        </>
      )}
    </>
  );
}
