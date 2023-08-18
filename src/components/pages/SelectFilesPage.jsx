import React from 'react';
import Form from '../Form';

function SelectFilesPage() {
  return (
    <div className="page" id="page4">
      <div className="claymorphic-container">
        <h1>Code Sync - Step 4: Select Files</h1>
        <Form action="/submit-files" step={4} />
      </div>
    </div>
  );
}

export default SelectFilesPage;
