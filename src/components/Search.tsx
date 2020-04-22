import React from 'react';
import {Icon} from '@iconify/react';
import searchIcon from '@iconify/icons-uil/search';

const Search: React.FC = () => {
  const styles = {
    searchBar: `
      flex-1
      relative
      mr-6`,
    icon: `
      flex
      items-center
      absolute
      inset-y-0
      left-0
      pl-4
      text-gray-600
      pointer-events-none `,
    input: `
      w-full
      py-3
      pl-12
      pr-4
      text-xl
      text-gray-600
      placeholder-gray-600
      bg-gray-100
      border-2
      border-gray-100
      rounded-md
      focus:bg-white
      focus:outline-none
      focus:border-green-400
      transition
      duration-150
      ease-in-out`,
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <Icon icon={searchIcon} width="1.5rem" />
      </div>
      <input className={styles.input} type="text" placeholder="Search"></input>
    </div>
  );
};

export default Search;
