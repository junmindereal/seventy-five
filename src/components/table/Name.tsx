import React from 'react';
import {styles} from '../../styles/table';

type NameProps = {
  firstName: string;
  lastName: string;
  section: string;
  finalGrade: number;
  passed: boolean;
};

const Name: React.SFC<NameProps> = ({
  firstName,
  lastName,
  section,
  finalGrade,
  passed,
}) => {
  return (
    <td className={`${styles.td} ${styles.tdName}`}>
      <div>
        <span className={styles.name}>{`${lastName}, ${firstName}`}</span>
        {finalGrade > 0 && passed && (
          <span className={`${styles.status} ${styles.statusPassed}`}>
            Passed
          </span>
        )}
        {finalGrade > 0 && passed === false && (
          <span className={`${styles.status} ${styles.statusFailed}`}>
            Failed
          </span>
        )}
      </div>
      <div>
        <span className={section}>{section}</span>
      </div>
    </td>
  );
};

export default Name;
