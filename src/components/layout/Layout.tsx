import { useState } from 'react';
import Child from './child/Child';
import './Layout.css'
import Modal from './modal/Modal';
import PortalButton from './portal-button/PortalButton';

export default function Layout() {

  const [isOpen, setIsOpen] = useState(false);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <section className="layout">
      { /*<Child/> */}

      <h1>My App</h1>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <hr/>

      <div className="event-bubbling-example" onClick={() => {setCount1(c => c + 1)}}>
        <h2>Div Clicked: {count1}</h2>
        <h2>Button Clicked: {count2}</h2>
        <p>The floating button is rendered outside this box using a portal,
          but its clicks still bubble up to this parent div!</p>
        <p>Try to click the div element as well, to see the count increase</p>

        <PortalButton onClick={(e) => {setCount2(c => c + 1)}}>
          Floating Button
        </PortalButton>
      </div>

      {/* Modal */}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal content</h2>
        <p>This content is rendered outside this component</p>
      </Modal>


    </section>
  );
}