import React from 'react';
import FormInput from './Form/FormInput';
import FormSelect from './Form/FormSelect';
import FormCheckbox from './Form/FormCheckbox';

function Form({ action, step }) {
  return (
    <form id={`syncForm${step}`} action={action} method="post">
      {/* Render form fields based on step */}
      <button type="submit">Next</button>
    </form>
  );
}

export default Form;