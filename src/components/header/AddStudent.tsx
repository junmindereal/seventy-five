import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import AddModal from '../modals/AddModal';
import {initialAddStudentFormState as initialFormState} from '../../utils/constants';
import {AddStudentFormSchema as schema} from '../../utils/constants';
import {StudentProps} from '../../types/index';
import {AddStudentProps} from '../../types/index';
import {ErrorsProps} from '../../types/index';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';

const AddStudent: React.FC<AddStudentProps> = ({students, setStudents}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const [errors, setErrors] = useState<ErrorsProps>({});

  const validate = (): object | null => {
    const options = {abortEarly: false};
    const {error} = schema.validate(formState, options);
    if (!error) return null;

    const errors: ErrorsProps = {};
    for (const item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const [formState, setFormState] = useState<StudentProps>(initialFormState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const input = e.currentTarget;
    setFormState({
      ...formState,
      _id: uuid(),
      [input.name]: input.value,
    });
  };

  const handleReset = (): void => {
    setFormState(initialFormState);
    setErrors({});
  };

  const handleCancel = (): void => {
    setFormState(initialFormState);
    setErrors({});
    closeModal();
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const errors = validate();
    setErrors({...errors} || {});
    if (errors) return;

    setStudents([...students, formState]);
    setFormState(initialFormState);
    closeModal();
  };

  return (
    <React.Fragment>
      <button
        className={`${btn.secondary}  ${btn.AddStudent}`}
        onClick={openModal}
      >
        <Icon className={btn.secondaryIcon} icon={userPlus}></Icon>
        <span className={btn.secondaryText}>Add Student</span>
      </button>
      <AddModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCancel}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        formState={formState}
        error={errors}
      ></AddModal>
    </React.Fragment>
  );
};

export default AddStudent;
