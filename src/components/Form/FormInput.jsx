import React from 'react';

function FormInput({ type, name, placeholder }) {
  return <input type={type} name={name} placeholder={placeholder} required />;
}

export default FormInput;