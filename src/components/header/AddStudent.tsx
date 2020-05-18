import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import Joi from '@hapi/joi';
import AddModal from '../modals/AddModal';
import Input from '../common/Input';
import {StudentProps} from '../../types/index';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';

type AddStudentProps = {
  students: StudentProps[];
  setStudents: React.Dispatch<React.SetStateAction<StudentProps[]>>;
};

interface ErrorsProps {
  [key: string]: string | {};
}

const AddStudent: React.FC<AddStudentProps> = ({students, setStudents}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  const [errors, setErrors] = useState<ErrorsProps>({});

  useEffect(() => {
    setErrors(errors);
  }, [errors]);

  const schema = Joi.object({
    _id: Joi.string(),
    firstName: Joi.string().required().label('First Name').min(2),
    middleName: Joi.string().required().label('Middle Name').min(2),
    lastName: Joi.string().required().label('Last Name').min(2),
    section: Joi.string()
      .required()
      .pattern(new RegExp('\\d\\s[-]\\s[A-Z|a-z]'), {name: '"4 - Galilee"'}),
    firstQuarter: Joi.object({
      quizzes: Joi.array().items(Joi.number),
      average: Joi.number(),
    }),
    secondQuarter: Joi.object({
      quizzes: Joi.array().items(Joi.number),
      average: Joi.number(),
    }),
    thirdQuarter: Joi.object({
      quizzes: Joi.array().items(Joi.number()),
      average: Joi.number(),
    }),
    fourthQuarter: Joi.object({
      quizzes: Joi.array().items(Joi.number()),
      average: Joi.number(),
    }),
    quarterAverages: Joi.array().items(Joi.number()),
    finalGrade: Joi.number(),
    passed: Joi.boolean(),
  });

  const validate = (): object | null => {
    const options = {abortEarly: false};
    const {error} = schema.validate(formState, options);
    if (!error) return null;

    const errors: ErrorsProps = {};
    for (const item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const initialFormState = {
    _id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    section: '',
    firstQuarter: {
      quizzes: [],
      average: 0,
    },
    secondQuarter: {
      quizzes: [],
      average: 0,
    },
    thirdQuarter: {
      quizzes: [],
      average: 0,
    },
    fourthQuarter: {
      quizzes: [],
      average: 0,
    },
    quarterAverages: [],
    finalGrade: 0,
    passed: false,
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

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const errors = validate();
    setErrors({...errors} || {});
    if (errors) return;

    setStudents([...students, formState]);
    setFormState(initialFormState);
    closeModal();
  }

  return (
    <React.Fragment>
      <button className={btn.secondary} onClick={openModal}>
        <Icon className={btn.secondaryIcon} icon={userPlus}></Icon>
        <span className={btn.secondaryText}>Add Student</span>
      </button>
      <AddModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
      >
        <Input
          value={formState.firstName}
          name="firstName"
          label="First Name"
          placeholder="Juan"
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          value={formState.middleName}
          name="middleName"
          label="Middle Name"
          placeholder="Mercado"
          onChange={handleChange}
          error={errors.middleName}
        />
        <Input
          value={formState.lastName}
          name="lastName"
          label="Last Name"
          placeholder="Dela Cruz"
          onChange={handleChange}
          error={errors.lastName}
        />
        <Input
          value={formState.section}
          name="section"
          label="Section"
          placeholder="3 - Wisdom"
          onChange={handleChange}
          error={errors.section}
        />
      </AddModal>
    </React.Fragment>
  );
};

export default AddStudent;
