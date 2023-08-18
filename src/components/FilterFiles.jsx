import React, { useState } from 'react';

function FilterFiles() {
  const [ignorePatterns, setIgnorePatterns] = useState('');
  const [dateFiltering, setDateFiltering] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  function validateForm() {
    const errors = {};

    if (!ignorePatterns) {
      errors.ignorePatterns = 'Ignore Patterns is required';
    }

    if (!dateFiltering) {
      errors.dateFiltering = 'Date Filtering is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);

        const response = await fetch('/api/filter-files', {
          method: 'POST',
          body: JSON.stringify({ ignorePatterns, dateFiltering }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Handle successful response
        } else {
          const errorData = await response.json();
          setApiError(errorData.message);
        }
      } catch (error) {
        setApiError('An error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="page" id="page3">
      <div className="claymorphic-container">
        <h1>Code Sync - Step 3: Filter Files</h1>
        <p>Filter the files based on ignore patterns and date filtering.</p>
        <form id="syncForm3" className="glassmorphic-form" onSubmit={handleSubmit}>
          <label htmlFor="ignorePatterns">Ignore Patterns:</label>
          <input
            type="text"
            id="ignorePatterns"
            name="ignorePatterns"
            value={ignorePatterns}
            onChange={(e) => setIgnorePatterns(e.target.value)}
          />
          {errors.ignorePatterns && <p className="error">{errors.ignorePatterns}</p>}
          <label htmlFor="dateFiltering">Date Filtering:</label>
          <input
            type="date"
            id="dateFiltering"
            name="dateFilter"
            value={dateFiltering}
            onChange={(e) => setDateFiltering(e.target.value)}
          />
          {errors.dateFiltering && <p className="error">{errors.dateFiltering}</p>}
          {apiError && <p className="error">{apiError}</p>}
          <button type="submit" className="claymorphic-button" disabled={loading}>
            {loading ? 'Loading...' : 'Next'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FilterFiles;
