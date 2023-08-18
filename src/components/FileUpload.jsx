import React from 'react';

function FileUpload({ onChange }) {
  return (
    <div>
      <input type="file" onChange={onChange} />
    </div>
  );
}

export default FileUpload;
