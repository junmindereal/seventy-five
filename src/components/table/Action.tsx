import React, {useState} from 'react';
import {styles} from '../../styles/table';
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
    <td className={`${styles.td} ${styles.tdAction}`}>
      <div
        className={styles.action}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          updateStudentGrade(student)
        }
      >
        <button className={styles.actionBtn}>
          <Icon icon={penIcon} />
          <span className={styles.actionBtnText}>Update</span>
        </button>
      </div>
    </td>
  );
};

export default Action;
