import React from 'react';
import {form} from '../../styles/form';
import {InputProps} from '../../types/index';

const Input: React.FC<InputProps> = ({
  value,
  name,
  label,
  placeholder,
  type = 'text',
  onChange,
  error,
}) => {
  return (
    <div className={form.group}>
      <label className={form.label} htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        type={type}
        className={form.input}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;
