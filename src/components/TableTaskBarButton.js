export function TableTaskBarButton({ text, callback }) {
  return (
    <button onClick={callback} className="btn btn--task action--newCat">
      <span>{text}</span>
      <svg
        className="btn--task-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM168,136H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>
      </svg>
    </button>
  );
}
