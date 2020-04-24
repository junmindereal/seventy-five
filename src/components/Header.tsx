import React from 'react';
import Search from './Search';
import logo from '../assets/logo.svg';
import {styles} from '../styles/header';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img className={styles.logo} src={logo} alt="Seventy Five Logo" />
      </div>
      <div className={styles.headerRight}>
        <Search />
        <button className={styles.button}>
          <Icon className={styles.buttonIcon} icon={userPlus}></Icon>
          <span className={styles.buttonText}>Add Student</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
