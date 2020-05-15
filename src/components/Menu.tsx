import React from 'react';
import Menulink from './common/MenuLink';
import {menu} from '../styles/menu';
import userCircle from '@iconify/icons-uil/user-circle';
import usersAlt from '@iconify/icons-uil/users-alt';

const Menu: React.FC = () => {
  return (
    <div className={menu.menu}>
      <Menulink icon={userCircle} label="My profile" />
      <Menulink icon={usersAlt} label="All Students" />
    </div>
  );
};

export default Menu;
