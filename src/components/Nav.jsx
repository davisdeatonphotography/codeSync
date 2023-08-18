import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/select-directory">Select Directory</Link>
      <Link to="/select-options">Select Options</Link>
      <Link to="/filter-files">Filter Files</Link>
      <Link to="/select-files">Select Files</Link>
      <Link to="/generate-documentation">Generate Documentation</Link>
    </nav>
  );
}

export default Nav;
