import React from 'react';
import {table} from '../../styles/table';

type FinalGradeProps = {
  finalGrade: number;
};

const FinalGrade: React.SFC<FinalGradeProps> = ({finalGrade}) => {
  const failingGrade = 74;
  return (
    <td className={`${table.td} ${table.tdFinal}`}>
      <div className={table.final}>
        <span
          className={`${table.finalGrade} ${
            finalGrade > failingGrade && table.finalPassed
          } ${
            finalGrade <= failingGrade && finalGrade > 0 && table.finalFailed
          }`}
        >
          {finalGrade > 0 && finalGrade}
        </span>
      </div>
    </td>
  );
};

export default FinalGrade;
