import React from 'react';
import {ActionProps} from '../../types/index';
import {table} from '../../styles/table';
import penIcon from '@iconify/icons-uil/pen';
import {Icon} from '@iconify/react';

const Action: React.FC<ActionProps> = ({student}) => {
  const updateStudentGrade = (student: object): void => {
    console.log(student);
  };

  return (
    <td className={`${table.td} ${table.tdAction}`}>
      <div
        className={table.action}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void =>
          updateStudentGrade(student)
        }
      >
        <button className={table.actionBtn}>
          <Icon icon={penIcon} />
          <span className={table.actionBtnText}>Update</span>
        </button>
      </div>
    </td>
  );
};

export default Action;
