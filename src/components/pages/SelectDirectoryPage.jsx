import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

function SelectDirectoryPage() {
  const [directory, setDirectory] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const handleDirectoryChange = (event) => {
    setDirectory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch the selected directory to the global state
    dispatch({ type: 'SET_SELECTED_DIRECTORY', payload: directory });
    // Navigate to the next step
    navigate('/select-options');
  };

  return (
    <div className="page" id="page1">
      <div className="claymorphic-container">
        <h1>Code Sync - Step 1: Select Code Directory</h1>
        <p>Please select the directory where your code files are located.</p>
        <form onSubmit={handleSubmit}>
          <div dangerouslySetInnerHTML={{ __html: '<input type="file" webkitdirectory />' }} />
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default SelectDirectoryPage;
