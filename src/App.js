import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SelectDirectoryPage from './components/pages/SelectDirectoryPage';
import SelectOptionsPage from './components/pages/SelectOptionsPage';
import FilterFilesPage from './components/pages/FilterFilesPage';
import SelectFilesPage from './components/pages/SelectFilesPage';
import GenerateDocsPage from './components/pages/GenerateDocsPage';

function App() {
  return (
    <div>
      <h1>Code Sync</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/select-directory" />} />
        <Route path="/select-directory" element={<SelectDirectoryPage />} />
        <Route path="/select-options" element={<SelectOptionsPage />} />
        <Route path="/filter-files" element={<FilterFilesPage />} />
        <Route path="/select-files" element={<SelectFilesPage />} />
        <Route path="/generate-documentation" element={<GenerateDocsPage />} />
      </Routes>
    </div>
  );
}

export default App;