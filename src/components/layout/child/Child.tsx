import { createPortal } from "react-dom";

export default function Child() {
  return createPortal (
    <div>
      <p>Child</p>
    </div>,
    document.body
  );
}