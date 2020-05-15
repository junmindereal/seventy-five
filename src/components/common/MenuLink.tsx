import React from 'react';
import {Icon} from '@iconify/react';
import {menu} from '../../styles/menu';
import {MenuItem} from '../../types/index';

const MenuLink: React.FC<MenuItem> = ({icon, label}) => {
  return (
    <div className={menu.link}>
      <Icon className={menu.icon} icon={icon} />
      <span className={menu.linkText}>{label}</span>
    </div>
  );
};

export default MenuLink;
