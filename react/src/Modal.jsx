import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="bg-black/50 absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
        <div className="flex justify-center items-center w-[400px] h-[300px] bg-white rounded-md shadow-md relative">
          <p>안뇽~~~~</p>
          <button onClick={onClose} className="absolute right-2 top-2">
            X
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
