import React, {useState} from 'react';
import UpdateStudentModal from '../modals/UpdateModal';
import {ActionProps} from '../../types/index';
import {table} from '../../styles/table';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import penIcon from '@iconify/icons-uil/pen';

interface FilterQuizProps {
  [key: string]: string;
}

const Action: React.FC<ActionProps> = ({student}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <td className={`${table.td} ${table.tdAction}`}>
        <div className={table.action}>
          <button
            className={`${btn.primary} ${btn.actionBtn}`}
            onClick={openModal}
          >
            <Icon icon={penIcon} />
            <span className={btn.actionBtnText}>Update</span>
          </button>
        </div>
      </td>
      <UpdateStudentModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        lastName={student.lastName}
        firstName={student.firstName}
      />
    </React.Fragment>
  );
};

export default Action;
