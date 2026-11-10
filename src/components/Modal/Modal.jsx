import { useEffect } from "react";
import "./Modal.css";

function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="forma-modal-overlay"
      onMouseDown={onClose}
    >
      <section
        className="forma-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="forma-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="forma-modal__header">
          <h2 id="forma-modal-title">{title}</h2>

          <button
            className="forma-modal__close"
            type="button"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </header>

        <div className="forma-modal__body">
          {children}
        </div>

        {footer && (
          <footer className="forma-modal__footer">
            {footer}
          </footer>
        )}
      </section>
    </div>
  );
}

export default Modal;