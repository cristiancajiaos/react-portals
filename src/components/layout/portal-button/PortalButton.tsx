import { createPortal } from 'react-dom';
import './PortalButton.css'

export default function PortalButton({onClick, children}) {
  return createPortal(
    <button onClick={onClick}>
      {children}
    </button>,
    document.body
  );
}