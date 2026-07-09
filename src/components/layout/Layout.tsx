import { useState } from 'react';
import Child from './child/Child';
import './Layout.css'
import Modal from './modal/Modal';

export default function Layout() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="layout">
      { /*<Child/> */}

      <h1>My App</h1>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal content</h2>
        <p>This content is rendered outside this component</p>
      </Modal>


    </section>
  );
}