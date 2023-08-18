import React from 'react';

function FormCheckbox({ name, label }) {
  return (
    <label>
      <input type="checkbox" name={name} />
      {label}
    </label>
  );
}

export default FormCheckbox;