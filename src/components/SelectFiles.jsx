import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

function SelectFiles() {
  const [files, setFiles] = useState([]);

  const [, ref] = useDrop({
    accept: NativeTypes.FILE,
    drop(item) {
      setFiles(item.files);
    },
  });

  return (
    <form className="page" id="page4">
      <div className="claymorphic-container">
        <h1>Code Sync - Step 4: Select Files</h1>
        <p>Select the files you want to include in the documentation.</p>
        <div ref={ref} id="drag-and-drop-zone" className="drag-and-drop-zone glassmorphic-form">
          <label htmlFor="fileInput">Drag and drop your directories or files here</label>
          <input type="file" id="fileInput" name="fileInput" multiple webkitdirectory />
        </div>
        <div id="file-preview-container">
          {files.map((file, index) => (
            <div key={index}>
              <p>{file.name}</p>
            </div>
          ))}
        </div>
        <button type="button" id="backButton" className="claymorphic-button">Back</button>
        <button type="submit" id="nextButton" className="claymorphic-button">Next</button>
      </div>
    </form>
  );
}

export default SelectFiles;
