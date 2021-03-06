/**
 * Student
 **/
export interface StudentProps {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  section: string;
  quarters: {
    name: string;
    label: string;
    quizzes: string[];
    average: number;
  }[];
  quarterAverages: number[];
  finalGrade: number;
  passed: boolean;
}

export interface StudentNameProps {
  firstName: string;
  lastName: string;
  section: string;
  finalGrade: number;
  passed: boolean;
}

export interface AddStudentProps {
  students: StudentProps[];
  setStudents: React.Dispatch<React.SetStateAction<StudentProps[]>>;
}

/**
 * Grades
 **/
export interface QuarterProps {
  firstQuarter: number;
  secondQuarter: number;
  thirdQuarter: number;
  fourthQuarter: number;
}

export interface FinalGradeProps {
  finalGrade: number;
}

/**
 * Form
 **/
export interface InputProps {
  value?: string | number;
  name: string;
  label: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  error: string | {};
  type?: string;
  pattern?: string;
  step?: string;
}

export interface ButtonProps {
  id?: string;
  className: string;
  label: string | React.ReactNode;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export interface ErrorsProps {
  [key: string]: string | {};
}

export interface ActionProps {
  student: StudentProps;
}

/**
 * Modal
 **/
export interface AddModalProps {
  modalIsOpen: boolean;
  formState: StudentProps;
  closeModal: () => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleReset: () => void;
  error: {[key: string]: string | {}};
}

export interface UpdateModalProps {
  modalIsOpen: boolean;
  lastName: string;
  firstName: string;
  closeModal: () => void;
  quarters: {
    name: string;
    label: string;
    quizzes: string[];
    average: number;
  }[];
  handleReset: () => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleAddQuiz: (e: React.FormEvent<HTMLButtonElement>) => void;
  error: {[key: string]: string | {}};
}

/**
 * Menu
 **/
export interface MenuLinkProps {
  icon: object;
  label: string;
}
