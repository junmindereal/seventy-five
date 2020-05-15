import React, {useState} from 'react';
import {Student} from '../../types/index';
import {table} from '../../styles/table';
import penIcon from '@iconify/icons-uil/pen';
import {Icon} from '@iconify/react';

type StudentProp = {
  studentInfo: Student;
};

const Action: React.FC<StudentProp> = ({studentInfo}) => {
  const [student] = useState(studentInfo);
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
