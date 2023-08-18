import React from 'react';

function SuccessModal({ message, onClose }) {
  return (
    <div className="modal success-modal">
      <h2>Success</h2>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default SuccessModal;
