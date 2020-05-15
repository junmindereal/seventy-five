import React from 'react';
import {FormButton} from '../../types/index';

const Button: React.FC<FormButton> = ({
  className,
  label,
  onClick,
  type = 'button',
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
