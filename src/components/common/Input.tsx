import React from 'react';
import {form} from '../../styles/form';
import {FormInput} from '../../types/index';

const Input: React.FC<FormInput> = ({
  name,
  label,
  placeholder,
  type = 'text',
}) => {
  return (
    <div className={form.group}>
      <label className={form.label} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={form.input}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
