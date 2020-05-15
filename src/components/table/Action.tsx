import React, {useState} from 'react';
import {table} from '../../styles/table';
import penIcon from '@iconify/icons-uil/pen';
import {Icon} from '@iconify/react';

type StudentProp = {
  studentInfo: object;
};

const Action: React.FC<StudentProp> = ({studentInfo}) => {
  const [student] = useState(studentInfo);
  const updateStudentGrade = (student: object) => {
    console.log(student);
  };

  return (
    <td className={`${table.td} ${table.tdAction}`}>
      <div
        className={table.action}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
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
