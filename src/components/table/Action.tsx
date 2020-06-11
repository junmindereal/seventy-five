import React, {useState} from 'react';
import UpdateStudentModal from '../modals/UpdateModal';
import {ActionProps} from '../../types/index';
import {ErrorsProps} from '../../types/index';
import {table} from '../../styles/table';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import penIcon from '@iconify/icons-uil/pen';

const Action: React.FC<ActionProps> = ({student}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const initialQuizState = student.quarters;

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const [quizState, setQuizState] = useState(initialQuizState);

  const [errors, setErrors] = useState<ErrorsProps>({
    name: '',
  });

  const handleReset = (): void => {
    setQuizState(initialQuizState);
    setErrors({});
  };

  const handleCancel = (): void => {
    setQuizState(initialQuizState);
    setErrors({});
    closeModal();
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
        closeModal={handleCancel}
        lastName={student.lastName}
        firstName={student.firstName}
        quarters={quizState}
        handleReset={handleReset}
        error={errors}
      />
    </React.Fragment>
  );
};

export default Action;
