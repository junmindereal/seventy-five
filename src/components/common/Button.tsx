import React from 'react';
import {ButtonProps} from '../../types/index';

const Button: React.FC<ButtonProps> = ({
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
