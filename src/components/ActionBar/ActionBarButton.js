export function ActionBarButton({ action }) {
  return (
    <button onClick={action.onClick} className="btn btn--quick-action">
      {action.action}
    </button>
  );
}
