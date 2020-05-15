import React from 'react';
import Search from './Search';
import AddStudent from './AddStudent';
import logo from '../../assets/logo.svg';
import {header} from '../../styles/header';

const Header: React.FC = () => {
  return (
    <div className={header.container}>
      <div className={header.left}>
        <img className={header.logo} src={logo} alt="Seventy Five Logo" />
      </div>
      <div className={header.right}>
        <Search />
        <AddStudent />
      </div>
    </div>
  );
};

export default Header;
