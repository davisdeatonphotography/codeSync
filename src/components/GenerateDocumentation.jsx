import React from 'react';
import LivePreview from './LivePreview';

function GenerateDocumentation() {
  return (
    <form className="page" id="page5">
      <div className="claymorphic-container">
        <h1>Code Sync - Final Step: Generate Documentation</h1>
        <p>Select the format and generate the documentation.</p>
        <label htmlFor="outputFormat">Format:</label>
        <select id="outputFormat" name="outputFormat">
          <option value="docx">DOCX</option>
          <option value="pdf">PDF</option>
          <option value="markdown">Markdown</option>
          <option value="html">HTML</option>
        </select>
        <LivePreview content="" />
        <button type="button" id="backButton" className="claymorphic-button">Back</button>
        <button type="submit" id="generateButton" className="claymorphic-button">Generate Documentation</button>
      </div>
    </form>
  );
}

export default GenerateDocumentation;
