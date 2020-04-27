import React from 'react';
import {styles} from '../../styles/header';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';

const AddStudent: React.SFC = () => {
  return (
    <button className={styles.button}>
      <Icon className={styles.buttonIcon} icon={userPlus}></Icon>
      <span className={styles.buttonText}>Add Student</span>
    </button>
  );
};

export default AddStudent;
