export function Modal({ children, closeModal, open }) {
  function handleCloseModal(e) {
    if (e.target !== document.querySelector(".modal")) return;
    closeModal();
  }
  return (
    <div onClick={handleCloseModal} className={open ? "modal" : "hidden"}>
      {children}
    </div>
  );
}
