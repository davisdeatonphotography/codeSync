import React from 'react';

function LivePreview({ content }) {
  return (
    <div>
      <h3>Live Preview</h3>
      <div>{content}</div>
    </div>
  );
}

export default LivePreview;