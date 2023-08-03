import { ActionBarButton } from "./ActionBarButton";

export function ActionBarActions({ actions }) {
  return (
    <>
      <p className="action-bar__actions-label">Quick Actions</p>

      {actions.map((action) => (
        <ActionBarButton action={action} key={crypto.randomUUID()} />
      ))}
    </>
  );
}
