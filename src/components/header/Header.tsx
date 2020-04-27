import React from 'react';
import Search from './Search';
import logo from '../../assets/logo.svg';
import {styles} from '../../styles/header';
import AddStudent from './AddStudent';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img className={styles.logo} src={logo} alt="Seventy Five Logo" />
      </div>
      <div className={styles.headerRight}>
        <Search />
        <AddStudent />
      </div>
    </div>
  );
};

export default Header;
