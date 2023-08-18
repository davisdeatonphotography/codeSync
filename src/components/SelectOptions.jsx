import React, { useState } from 'react';

function SelectOptions() {
  const [includeTOC, setIncludeTOC] = useState(false);
  const [pathFormat, setPathFormat] = useState('');
  const [format, setFormat] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Process form values here
    console.log(`Include TOC: ${includeTOC}`);
    console.log(`Path format: ${pathFormat}`);
    console.log(`Format: ${format}`);
  };

  return (
    <div className="page" id="page2">
      <div className="claymorphic-container">
        <h1>Code Sync - Step 2: Select Options</h1>
        <form id="syncForm2" className="glassmorphic-form" onSubmit={handleSubmit}>
          <label htmlFor="toc">Include Table of Contents:</label>
          <input
            type="checkbox"
            id="toc"
            name="toc"
            checked={includeTOC}
            onChange={() => setIncludeTOC(!includeTOC)}
          />

          <label htmlFor="pathFormat">Path Format:</label>
          <select
            id="pathFormat"
            name="pathFormat"
            value={pathFormat}
            onChange={e => setPathFormat(e.target.value)}
          >
            <option value="">Select a path format</option>
            <option value="full">Full path</option>
            <option value="relative">Relative path</option>
            <option value="file">File name only</option>
          </select>

          <label htmlFor="format">Output Format:</label>
          <select
            id="format"
            name="format"
            value={format}
            onChange={e => setFormat(e.target.value)}
          >
            <option value="">Select a format</option>
            <option value="pdf">PDF</option>
            <option value="docx">DOCX</option>
            <option value="html">HTML</option>
            <option value="markdown">Markdown</option>
          </select>

          <button type="submit" className="claymorphic-button">Next</button>
        </form>
      </div>
    </div>
  );
}

export default SelectOptions;