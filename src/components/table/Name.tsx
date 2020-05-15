import React from 'react';
import {table} from '../../styles/table';

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
    <td className={`${table.td} ${table.tdName}`}>
      <div>
        <span className={table.name}>{`${lastName}, ${firstName}`}</span>
        {finalGrade > 0 && passed && (
          <span className={`${table.status} ${table.statusPassed}`}>
            Passed
          </span>
        )}
        {finalGrade > 0 && passed === false && (
          <span className={`${table.status} ${table.statusFailed}`}>
            Failed
          </span>
        )}
      </div>
      <div>
        <span className={table.section}>{section}</span>
      </div>
    </td>
  );
};

export default Name;
