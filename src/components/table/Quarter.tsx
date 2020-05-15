import React from 'react';
import {table} from '../../styles/table';

type QuarterProps = {
  firstQuarter: number;
  secondQuarter: number;
  thirdQuarter: number;
  fourthQuarter: number;
};

const Quarter: React.SFC<QuarterProps> = ({
  firstQuarter,
  secondQuarter,
  thirdQuarter,
  fourthQuarter,
}) => {
  const failingGrade = 74;

  return (
    <td>
      <div className={table.quarter}>
        <span
          className={`${table.grade} ${
            firstQuarter > failingGrade ? table.gradePass : table.gradeFail
          }`}
        >
          {firstQuarter}
        </span>
        <span
          className={`${table.grade} ${
            secondQuarter > failingGrade ? table.gradePass : table.gradeFail
          }`}
        >
          {secondQuarter}
        </span>
        <span
          className={`${table.grade} ${
            thirdQuarter > failingGrade ? table.gradePass : table.gradeFail
          }`}
        >
          {thirdQuarter}
        </span>
        <span
          className={`${table.grade} ${
            fourthQuarter > failingGrade ? table.gradePass : table.gradeFail
          }`}
        >
          {fourthQuarter}
        </span>
      </div>
    </td>
  );
};

export default Quarter;
