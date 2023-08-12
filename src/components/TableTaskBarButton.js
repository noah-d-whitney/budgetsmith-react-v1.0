export function TableTaskBarButton({ text, callback, disabled }) {
  return (
    <button
      onClick={disabled ? null : callback}
      className={`btn btn--task action--newCat ${
        disabled ? "btn--disabled" : null
      }`}
    >
      <span>{text}</span>
    </button>
  );
}
