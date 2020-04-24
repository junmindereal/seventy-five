import React from 'react';
import {styles} from '../../styles/table';

type FinalGradeProps = {
  finalGrade: number;
};

const FinalGrade: React.SFC<FinalGradeProps> = ({finalGrade}) => {
  const failingGrade = 74;
  return (
    <td className={`${styles.td} ${styles.tdFinal}`}>
      <div className={styles.final}>
        <span
          className={`${styles.finalGrade} ${
            finalGrade > failingGrade ? styles.finalPassed : styles.finalFailed
          }`}
        >
          {finalGrade}
        </span>
      </div>
    </td>
  );
};

export default FinalGrade;
