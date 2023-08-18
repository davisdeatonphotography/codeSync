import React from 'react'; 
import Form from '../Form';

function SelectOptionsPage() {
  return (
    <div className="page" id="page2">
      <div className="claymorphic-container">
        <h1>Code Sync - Step 2: Select Options</h1>
        <Form action="/submit-options" step={2} />
      </div>
    </div>
  );
}

export default SelectOptionsPage;