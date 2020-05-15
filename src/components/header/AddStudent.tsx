import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import AddModal from '../modals/AddModal';
import {Student} from '../../types/index';
import {saveStudent} from '../../services/students';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';

type AddStudentProps = {
  data: Array<Student>;
};

const AddStudent: React.FC<AddStudentProps> = ({data}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  const [student, setStudent] = useState<Student>({
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
  });

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const input = e.currentTarget;
    setStudent(student => ({
      ...student,
      _id: uuid(),
      [input.name]: input.value,
    }));
  };

  function doSubmit(e: React.FormEvent): void {
    e.preventDefault();
    saveStudent(student);
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
        handleInput={handleInput}
        doSubmit={doSubmit}
        student={student}
      />
    </React.Fragment>
  );
};

export default AddStudent;
