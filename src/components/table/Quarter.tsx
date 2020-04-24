import React from 'react';
import {styles} from '../../styles/table';

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
      <div className={styles.quarter}>
        <span
          className={`${styles.grade} ${
            firstQuarter > failingGrade ? styles.gradePass : styles.gradeFail
          }`}
        >
          {firstQuarter}
        </span>
        <span
          className={`${styles.grade} ${
            secondQuarter > failingGrade ? styles.gradePass : styles.gradeFail
          }`}
        >
          {secondQuarter}
        </span>
        <span
          className={`${styles.grade} ${
            thirdQuarter > failingGrade ? styles.gradePass : styles.gradeFail
          }`}
        >
          {thirdQuarter}
        </span>
        <span
          className={`${styles.grade} ${
            fourthQuarter > failingGrade ? styles.gradePass : styles.gradeFail
          }`}
        >
          {fourthQuarter}
        </span>
      </div>
    </td>
  );
};

export default Quarter;
