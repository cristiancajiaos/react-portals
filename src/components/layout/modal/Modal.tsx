import { createPortal } from 'react-dom';
import './Modal.css'

export default function Modal({isOpen, onClose, children}) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">
      <div className="modal-body">
        {children}
        <button className="btn btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>, 
    document.body
  );
}