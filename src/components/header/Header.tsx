import React from 'react';
import logo from '../../assets/logo.svg';
import {header} from '../../styles/header';

const Header: React.FC = ({children}) => {
  return (
    <div className={header.container}>
      <div className={header.left}>
        <img className={header.logo} src={logo} alt="Seventy Five Logo" />
      </div>
      <div className={header.right}>{children}</div>
    </div>
  );
};

export default Header;
