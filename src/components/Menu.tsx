import React from 'react';
import {Icon} from '@iconify/react';
import userCircle from '@iconify/icons-uil/user-circle';
import usersAlt from '@iconify/icons-uil/users-alt';

const Menu: React.FC = () => {
  const styles = {
    menu: `
      flex
      flex-col
      w-1/5
      mt-3
      pr-12`,
    icon: `
      w-8
      h-8
      p-1
      bg-gray-200
      rounded-full
      group-hover:bg-green-300
      transition
      duration-150
      ease-in-out`,
    link: `
      group
      flex
      w-full
      mb-3
      px-4
      py-2
      font-medium
      text-xl
      text-gray-700
      rounded-md
      hover:bg-green-200
      hover:text-green-900
      transition
      duration-150
      ease-in-out`,
    linkText: `
      ml-4
      capitalize`,
  };

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
