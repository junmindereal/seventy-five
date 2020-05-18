import React from 'react';
import {Icon} from '@iconify/react';
import {menu} from '../../styles/menu';
import {MenuLinkProps} from '../../types/index';

const MenuLink: React.FC<MenuLinkProps> = ({icon, label}) => {
  return (
    <div className={menu.link}>
      <Icon className={menu.icon} icon={icon} />
      <span className={menu.linkText}>{label}</span>
    </div>
  );
};

export default MenuLink;
