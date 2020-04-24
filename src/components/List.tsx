import React, {useState} from 'react';
import {getStudents} from '../services/students';
import Name from './table/Name';
import Quarter from './table/Quarter';
import FinalGrade from './table/FinalGrade';
import Action from './table/Action';
import {styles} from '../styles/table';

const List: React.FC = () => {
  const [students] = useState(getStudents());

  const updateGrade: (event: React.MouseEvent<HTMLElement>) => void = () => {
    console.log('hello');
  };

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
          {students.map(student => (
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
              <Action onUpdateGrade={updateGrade} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
