import React from 'react';
import {search} from '../../styles/search';
import {Icon} from '@iconify/react';
import searchIcon from '@iconify/icons-uil/search';

const Search: React.FC = () => {
  return (
    <div className={search.searchBar}>
      <div className={search.icon}>
        <Icon icon={searchIcon} width="1.5rem" />
      </div>
      <input className={search.input} type="text" placeholder="Search"></input>
    </div>
  );
};

export default Search;
