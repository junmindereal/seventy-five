import React, {useState} from 'react';
import UpdateStudentModal from '../modals/UpdateModal';
import {quizFormSchema as schema} from '../../utils/constants';
import {ActionProps} from '../../types/index';
import {ErrorsProps} from '../../types/index';
import {table} from '../../styles/table';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import penIcon from '@iconify/icons-uil/pen';

interface SplitInputNameProps {
  [key: string]: string;
}

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

  const validate = (): object | null => {
    const options = {abortEarly: false};
    const {error} = schema.validate(quizState, options);
    if (!error) return null;

    const errors: ErrorsProps = {};
    for (const item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const splitInputName = (name: string): SplitInputNameProps => {
    const names = name.split('-');
    return {
      quarter: names[0],
      type: names[1],
      quizNumber: names[2],
    };
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const input = e.currentTarget;
    const name = splitInputName(input.name);
    const newQuizState = [...quizState];

    newQuizState.map(quarter => {
      if (quarter.name === name.quarter) {
        const newQuizzes = quarter.quizzes.map((quiz, index) => {
          const quizNumber = parseInt(name.quizNumber);
          if (index === quizNumber) {
            quiz = input.value;
          }
          return quiz;
        });
        quarter.quizzes = newQuizzes;
      }
      return quarter;
    });

    setQuizState(newQuizState);
  };

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
        handleChange={handleChange}
        error={errors}
      />
    </React.Fragment>
  );
};

export default Action;
