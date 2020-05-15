import React from 'react';
import {menu} from '../styles/menu';
import {Icon} from '@iconify/react';
import userCircle from '@iconify/icons-uil/user-circle';
import usersAlt from '@iconify/icons-uil/users-alt';

const Menu: React.FC = () => {
  return (
    <div className={menu.menu}>
      <div className={menu.link}>
        <Icon className={menu.icon} icon={userCircle} />
        <span className={menu.linkText}>My profile</span>
      </div>
      <div className={menu.link}>
        <Icon className={menu.icon} icon={usersAlt} />
        <span className={menu.linkText}>All Students</span>
      </div>
    </div>
  );
};

export default Menu;
