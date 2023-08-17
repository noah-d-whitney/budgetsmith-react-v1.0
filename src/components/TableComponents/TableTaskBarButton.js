export function TableTaskBarButton({
  text,
  callback,
  disabled,
  formAction,
  required,
}) {
  return (
    <button
      formAction={formAction}
      onClick={disabled ? null : callback}
      className={`btn btn--task action--newCat ${
        disabled ? "btn--disabled" : null
      }`}
    >
      <span>{text}</span>
    </button>
  );
}
