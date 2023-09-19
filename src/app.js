import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { useModal } from 'react-simple-hook-modal';

import './app.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [Modal, open, close, isOpen] = useModal(Modal, {
    preventScroll: true,
    disableBackdrop: true,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  });

  return (
    <div>
      <p>Modal is Open? {isOpen ? 'Yes' : 'No'}</p>
      <button onClick={open}>OPEN</button>
      {isOpen && Modal}
    </div>
  );
};

export default App;
