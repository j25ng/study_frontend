import { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen((p) => !p);
  };

  return (
    <div className="relative">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, minima?
        Adipisci sunt exercitationem tenetur accusantium earum ducimus corporis
        deleniti quasi, vel minima reprehenderit hic praesentium ut eos officiis
        ex eligendi?
      </p>
      <button
        onClick={handleModalOpen}
        className="mt-4 p-2 rounded-sm bg-gray-100 hover:bg-gray-300 relative z-10"
      >
        MODAL OPEN
      </button>
      <Modal isOpen={isOpen} onClose={handleModalOpen} />
    </div>
  );
};

export default App;
