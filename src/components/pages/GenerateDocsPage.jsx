import React from 'react';
import Form from '../Form';

function GenerateDocsPage() {
  return (
    <div className="page" id="page5">
      <div className="claymorphic-container">
        <h1>Code Sync - Final Step: Generate Documentation</h1>
        <Form action="/submit-generate" step={5} />
      </div>
    </div>
  );
}

export default GenerateDocsPage;
