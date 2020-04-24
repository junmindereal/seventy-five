import React from 'react';
import {styles} from '../../styles/table';
import penIcon from '@iconify/icons-uil/pen';
import {Icon} from '@iconify/react';

type ActionProps = {
  onUpdateGrade: (event: React.MouseEvent<HTMLElement>) => void;
};

const Action: React.SFC<ActionProps> = ({onUpdateGrade}) => {
  return (
    <td className={`${styles.td} ${styles.tdAction}`}>
      <div className={styles.action}>
        <button className={styles.actionBtn} onClick={onUpdateGrade}>
          <Icon icon={penIcon} />
          <span className={styles.actionBtnText}>Update</span>
        </button>
      </div>
    </td>
  );
};

export default Action;
