import React from 'react';
import {Icon} from '@iconify/react';
import penIcon from '@iconify/icons-uil/pen';

const List: React.FC = () => {
  const styles = {
    list: `
      w-4/5
      h-full
      border-r
      border-l
      border-gray-300`,
    table: `
      table-fixed
      w-full`,
    thead: `
      border-b
      border-gray-300`,
    theadTr: `
      text-left
      text-xl`,
    th: `
      py-3
      font-normal
      text-gray-500`,
    thName: `
      w-5/12
      pl-6`,
    thQuarter: `
      w-3/12
      text-center`,
    thFinal: `
      w-2/12
      text-center`,
    thAction: `
      w-2/12
      pr-6
      text-center`,
    td: `py-4`,
    tdName: `
      pl-6`,
    tdSubject: ``,
    tdFinal: ``,
    tdAction: `pr-6`,
    tbodyTr: `
      border-b
      border-gray-300
      even:bg-gray-100`,
    name: `
      text-xl
      font-semibold
      text-gray-900`,
    status: `
      ml-2
      px-2
      py-1
      rounded-md
      text-xs
      font-semibold
      uppercase
      text-white`,
    statusPassed: `bg-green-500`,
    statusFailed: `bg-red-500`,
    section: `
      text-gray-600`,
    quarter: `
      flex
      justify-around`,
    grade: `
      px-2
      py-1
      rounded-md
      text-2xl
      font-bold`,
    gradePass: `text-green-500`,
    gradeFail: `text-red-500`,
    final: `text-center`,
    finalGrade: `
      px-2
      py-1
      border-2
      rounded-md
      text-2xl
      font-bold`,
    finalPassed: `
      text-green-500
      border-green-500`,
    finalFailed: `
      text-red-500
      border-red-500`,
    action: `
      flex
      justify-center`,
    actionBtn: `
      flex
      items-center
      px-3
      py-2
      rounded-md
      font-medium
      text-xl
      text-white
      bg-green-400
      transition
      duration-150
      ease-in-out
      hover:bg-green-500`,
    actionBtnText: `
      ml-2`,
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
          <tr className={styles.tbodyTr}>
            <td className={`${styles.td} ${styles.tdName}`}>
              <div>
                <span className={styles.name}>Dela Cruz, Juan</span>
                <span className={`${styles.status} ${styles.statusPassed}`}>
                  Passed
                </span>
              </div>
              <div>
                <span className={styles.section}>3 - Humility</span>
              </div>
            </td>
            <td>
              <div className={styles.quarter}>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  74
                </span>
                <span className={`${styles.grade} ${styles.gradeFail}`}>
                  75
                </span>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  75
                </span>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  75
                </span>
              </div>
            </td>
            <td className={`${styles.td} ${styles.tdFinal}`}>
              <div className={styles.final}>
                <span className={`${styles.finalGrade} ${styles.finalPassed}`}>
                  75
                </span>
              </div>
            </td>
            <td className={`${styles.td} ${styles.tdAction}`}>
              <div className={styles.action}>
                <button className={styles.actionBtn}>
                  <Icon icon={penIcon} />
                  <span className={styles.actionBtnText}>Update</span>
                </button>
              </div>
            </td>
          </tr>
          <tr className={styles.tbodyTr}>
            <td className={`${styles.td} ${styles.tdName}`}>
              <div>
                <span className={styles.name}>Dela Cruz, Juan</span>
                <span className={`${styles.status} ${styles.statusFailed}`}>
                  Failed
                </span>
              </div>
              <div>
                <span className={styles.section}>3 - Humility</span>
              </div>
            </td>
            <td>
              <div className={styles.quarter}>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  74
                </span>
                <span className={`${styles.grade} ${styles.gradeFail}`}>
                  75
                </span>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  75
                </span>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  75
                </span>
              </div>
            </td>
            <td className={`${styles.td} ${styles.tdFinal}`}>
              <div className={styles.final}>
                <span className={`${styles.finalGrade} ${styles.finalFailed}`}>
                  74
                </span>
              </div>
            </td>
            <td className={`${styles.td} ${styles.tdAction}`}>
              <div className={styles.action}>
                <button className={styles.actionBtn}>
                  <Icon icon={penIcon} />
                  <span className={styles.actionBtnText}>Update</span>
                </button>
              </div>
            </td>
          </tr>
          <tr className={styles.tbodyTr}>
            <td className={`${styles.td} ${styles.tdName}`}>
              <div>
                <span className={styles.name}>Dela Cruz, Juan</span>
                <span className={`${styles.status} ${styles.statusFailed}`}>
                  Failed
                </span>
              </div>
              <div>
                <span className={styles.section}>3 - Humility</span>
              </div>
            </td>
            <td>
              <div className={styles.quarter}>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  74
                </span>
                <span className={`${styles.grade} ${styles.gradeFail}`}>
                  75
                </span>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  75
                </span>
                <span className={`${styles.grade} ${styles.gradePass}`}>
                  75
                </span>
              </div>
            </td>
            <td className={`${styles.td} ${styles.tdFinal}`}>
              <div className={styles.final}>
                <span className={`${styles.finalGrade} ${styles.finalFailed}`}>
                  74
                </span>
              </div>
            </td>
            <td className={`${styles.td} ${styles.tdAction}`}>
              <div className={styles.action}>
                <button className={styles.actionBtn}>
                  <Icon icon={penIcon} />
                  <span className={styles.actionBtnText}>Update</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
