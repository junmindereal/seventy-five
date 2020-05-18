import {Student} from './../types/index';

const students: Student[] = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    firstName: 'Juan',
    middleName: 'Mercado',
    lastName: 'Dela Cruz',
    section: '2 - Patience',
    firstQuarter: {
      quizzes: [75, 80, 86, 90],
      average: 83,
    },
    secondQuarter: {
      quizzes: [75, 80, 86, 90],
      average: 83,
    },
    thirdQuarter: {
      quizzes: [75, 80, 86, 90],
      average: 83,
    },
    fourthQuarter: {
      quizzes: [75, 80, 86, 90],
      average: 83,
    },
    quarterAverages: [83, 83, 83, 83],
    finalGrade: 83,
    passed: true,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    firstName: 'Jose',
    middleName: 'Protacio',
    lastName: 'Rizal',
    section: '4 - Galilee',
    firstQuarter: {
      quizzes: [74, 74, 74, 74],
      average: 74,
    },
    secondQuarter: {
      quizzes: [74, 74, 74, 74],
      average: 74,
    },
    thirdQuarter: {
      quizzes: [74, 74, 74, 74],
      average: 74,
    },
    fourthQuarter: {
      quizzes: [74, 74, 74, 74],
      average: 74,
    },
    quarterAverages: [74, 74, 74, 74],
    finalGrade: 74,
    passed: false,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    firstName: 'Emilio',
    middleName: 'Famy',
    lastName: 'Aguinaldo',
    section: '3 - Humility',
    firstQuarter: {
      quizzes: [74, 74],
      average: 74,
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
  },
  {
    _id: '5b21ca3eeb7f6fbccd471818',
    firstName: 'Manuel',
    middleName: 'Luis',
    lastName: 'Quezon',
    section: '2 - Hope',
    firstQuarter: {
      quizzes: [80, 80, 80],
      average: 80,
    },
    secondQuarter: {
      quizzes: [70, 70, 70],
      average: 70,
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
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    firstName: 'Rodrigo',
    middleName: 'Roa',
    lastName: 'Duterte',
    section: '1 - Love',
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
  },
];

export function getStudents(): Student[] {
  return students;
}

export function getStudent(id: string): object | undefined {
  return students.find(s => s._id === id);
}

export function saveStudent(student: Student): Student {
  const studentInDb: Student = {
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

  studentInDb._id = student._id;
  studentInDb.firstName = student.firstName;
  studentInDb.middleName = student.middleName;
  studentInDb.lastName = student.lastName;
  studentInDb.section = student.section;
  studentInDb.firstQuarter = student.firstQuarter;
  studentInDb.secondQuarter = student.secondQuarter;
  studentInDb.thirdQuarter = student.thirdQuarter;
  studentInDb.fourthQuarter = student.fourthQuarter;
  studentInDb.quarterAverages = student.quarterAverages;
  studentInDb.finalGrade = student.finalGrade;
  studentInDb.passed = student.passed;

  students.push(studentInDb);

  return studentInDb;
}
