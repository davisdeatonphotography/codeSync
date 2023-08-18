import React from 'react';

function FormSelect({ name, options }) {
  return (
    <select name={name}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default FormSelect;
