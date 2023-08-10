export function Modal({ children, closeModal }) {
  function handleCloseModal(e) {
    if (e.target !== document.querySelector(".modal")) return;
    closeModal();
  }
  return (
    <div onClick={handleCloseModal} className="modal">
      {children}
    </div>
  );
}
