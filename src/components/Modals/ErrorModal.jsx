import React from 'react';

function ErrorModal({ message, onClose }) {
  return (
    <div className="modal error-modal">
      <h2>Error</h2>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ErrorModal;