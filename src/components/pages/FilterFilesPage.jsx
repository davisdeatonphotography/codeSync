import React from 'react';
import Form from '../Form';

function FilterFilesPage() {
  return (
    <div className="page" id="page3">
      <div className="claymorphic-container">
        <h1>Code Sync - Step 3: Filter Files</h1>
        <Form action="/submit-filter" step={3} />
      </div>
    </div>
  );
}

export default FilterFilesPage;
