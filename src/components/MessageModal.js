export function MessageModal({
  heading,
  message,
  buttonText,
  callback,
  continueButton,
  closeModal,
}) {
  return (
    <div>
      <h1 className="page-title">{heading}</h1>
      <p className="modal__message">{message}</p>
      <div className="form__btns">
        {continueButton ? (
          <button onClick={callback} className="btn btn--task">
            <span>{buttonText}</span>
            <svg
              className="btn--task-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM168,136H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>
            </svg>
          </button>
        ) : null}
        <button
          onClick={() => closeModal()}
          className="btn btn--task btn--task--cancel"
        >
          <span>Go Back</span>
          <svg
            className="btn--task-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
