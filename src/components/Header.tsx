import React from 'react';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const styles = {
    header: `flex`,
    headerLeft: `
      flex
      w-3/12
      py-6`,
    headerRight: `
      flex
      items-center
      w-9/12
      pr-6
      border-r
      border-b
      border-l
      border-gray-300`,
    logo: `
      w-20
      pl-4`,
    button: `
      flex
      items-center
      ml-auto
      px-4
      py-3
      border-2
      border-green-400
      rounded-md
      font-semibold
      text-xl
      text-green-700
      hover:bg-green-400
      hover:text-white`,
    buttonIcon: `w-6 h-6`,
    buttonText: `ml-2`,
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img className={styles.logo} src={logo} alt="Seventy Five Logo" />
      </div>
      <div className={styles.headerRight}>
        <button className={styles.button}>
          <Icon className={styles.buttonIcon} icon={userPlus}></Icon>
          <span className={styles.buttonText}>Add Student</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
