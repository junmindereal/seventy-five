import React from 'react';
import {styles} from '../styles/menu';
import {Icon} from '@iconify/react';
import userCircle from '@iconify/icons-uil/user-circle';
import usersAlt from '@iconify/icons-uil/users-alt';

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.link}>
        <Icon className={styles.icon} icon={userCircle} />
        <span className={styles.linkText}>My profile</span>
      </div>
      <div className={styles.link}>
        <Icon className={styles.icon} icon={usersAlt} />
        <span className={styles.linkText}>All Students</span>
      </div>
    </div>
  );
};

export default Menu;
