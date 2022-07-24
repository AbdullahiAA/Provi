import { useEffect, useRef } from "react";

function Modal({ showModal, closeModal, children }) {
  const overlay = useRef();
  const modal = useRef();

  useEffect(() => {
    if (showModal) {
      modal.current.classList.remove("hidden");

      setTimeout(() => {
        overlay.current.classList.remove("hidden");
        modal.current.classList.remove("opacity-0", "scale-50");
      }, 50);
    } else {
      overlay.current.classList.add("hidden");
      modal.current.classList.add("hidden");
      modal.current.classList.add("opacity-0", "scale-50");
    }
  }, [showModal]);

  useEffect(() => {
    const keyPress = document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    return () => document.removeEventListener("keydown", keyPress);
  }, [closeModal]);

  return (
    <>
      <div
        ref={overlay}
        className="hidden z-50 fixed w-screen h-screen top-0 bg-smokyBlack bg-opacity-50 transition"
        onClick={closeModal}
      />

      <div
        ref={modal}
        className="hidden z-50 fixed top-0 right-0 left-0 bottom-0 m-auto max-w-md w-full h-fit transition duration-500 opdacity-0 scale-50"
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
