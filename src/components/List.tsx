import React from 'react';
import StudentName from './table/StudentName';
import Quarter from './table/Quarter';
import FinalGrade from './table/FinalGrade';
import Action from './table/Action';
import {StudentProps} from '../types/index';
import {table} from '../styles/table';

type StudentsProps = {
  students: Array<StudentProps>;
};

const List: React.FC<StudentsProps> = ({students}) => {
  return (
    <div className={table.list}>
      <table className={table.table}>
        <thead className={table.thead}>
          <tr className={table.theadTr}>
            <th className={`${table.th} ${table.thName}`}>Name</th>
            <th className={`${table.th} ${table.thQuarter}`}>Quarter</th>
            <th className={`${table.th} ${table.thFinal}`}>Final</th>
            <th className={`${table.th} ${table.thAction}`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: StudentProps) => (
            <tr className={table.tbodyTr} key={student._id}>
              <StudentName
                firstName={student.firstName}
                lastName={student.lastName}
                section={student.section}
                finalGrade={student.finalGrade}
                passed={student.passed}
              />
              <Quarter
                firstQuarter={student.quarters[0].average}
                secondQuarter={student.quarters[1].average}
                thirdQuarter={student.quarters[2].average}
                fourthQuarter={student.quarters[3].average}
              />
              <FinalGrade finalGrade={student.finalGrade} />
              <Action student={student} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
