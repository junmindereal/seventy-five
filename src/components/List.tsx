import React, {useState} from 'react';
import Name from './table/Name';
import Quarter from './table/Quarter';
import FinalGrade from './table/FinalGrade';
import Action from './table/Action';
import {Students} from '../types/index';
import {table} from '../styles/table';

type StudentProps = {
  studentsInfo: Array<Students>;
};

const List: React.FC<StudentProps> = ({studentsInfo}) => {
  const [students] = useState(studentsInfo);

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
          {students.map((student: Students) => (
            <tr className={table.tbodyTr} key={student._id}>
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
