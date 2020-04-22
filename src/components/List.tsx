import React from 'react';

const List: React.FC = () => {
  const styles = {
    list: `
      w-9/12
      border-r
      border-l
      border-gray-300`,
  };

  return <div className={styles.list}></div>;
};

export default List;
