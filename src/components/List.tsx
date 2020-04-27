import React, {useState} from 'react';
import Name from './table/Name';
import Quarter from './table/Quarter';
import FinalGrade from './table/FinalGrade';
import Action from './table/Action';
import {Students} from '../types/index';
import {styles} from '../styles/table';

type StudentProps = {
  studentsInfo: Array<Students>;
};

const List: React.FC<StudentProps> = ({studentsInfo}) => {
  const [students] = useState(studentsInfo);

  return (
    <div className={styles.list}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.theadTr}>
            <th className={`${styles.th} ${styles.thName}`}>Name</th>
            <th className={`${styles.th} ${styles.thQuarter}`}>Quarter</th>
            <th className={`${styles.th} ${styles.thFinal}`}>Final</th>
            <th className={`${styles.th} ${styles.thAction}`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: Students) => (
            <tr className={styles.tbodyTr} key={student._id}>
              <Name
                firstName={student.firstName}
                lastName={student.lastName}
                section={student.section}
                finalGrade={student.finalGrade}
                passed={student.passed}
              />
              <Quarter
                firstQuarter={student.firstQuarter.average}
                secondQuarter={student.secondQuarter.average}
                thirdQuarter={student.thirdQuarter.average}
                fourthQuarter={student.fourthQuarter.average}
              />
              <FinalGrade finalGrade={student.finalGrade} />
              <Action studentInfo={student} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
