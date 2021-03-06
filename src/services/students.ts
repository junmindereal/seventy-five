import {StudentProps} from './../types/index';

const students: StudentProps[] = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    firstName: 'Juan',
    middleName: 'Mercado',
    lastName: 'Dela Cruz',
    section: '2 - Patience',
    quarters: [
      {
        name: 'firstQuarter',
        label: 'First Quarter',
        quizzes: ['75', '80', '86', '90'],
        average: 83,
      },
      {
        name: 'secondQuarter',
        label: 'Second Quarter',
        quizzes: ['75', '80', '86', '90'],
        average: 83,
      },
      {
        name: 'thirdQuarter',
        label: 'Third Quarter',
        quizzes: ['75', '80', '86', '90'],
        average: 83,
      },
      {
        name: 'fourthQuarter',
        label: 'Fourth Quarter',
        quizzes: ['75', '80', '86', '90'],
        average: 83,
      },
    ],
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
    quarters: [
      {
        name: 'firstQuarter',
        label: 'First Quarter',
        quizzes: ['74', '74', '74', '74'],
        average: 74,
      },
      {
        name: 'secondQuarter',
        label: 'Second Quarter',
        quizzes: ['74', '74', '74', '74'],
        average: 74,
      },
      {
        name: 'thirdQuarter',
        label: 'Third Quarter',
        quizzes: ['74', '74', '74', '74'],
        average: 74,
      },
      {
        name: 'fourthQuarter',
        label: 'Fourth Quarter',
        quizzes: ['74', '74', '74', '74'],
        average: 74,
      },
    ],
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
    quarters: [
      {
        name: 'firstQuarter',
        label: 'First Quarter',
        quizzes: ['74', '74'],
        average: 74,
      },
      {
        name: 'secondQuarter',
        label: 'Second Quarter',
        quizzes: ['0'],
        average: 0,
      },
      {
        name: 'thirdQuarter',
        label: 'Third Quarter',
        quizzes: ['0'],
        average: 0,
      },
      {
        name: 'fourthQuarter',
        label: 'Fourth Quarter',
        quizzes: ['0'],
        average: 0,
      },
    ],
    quarterAverages: [74],
    finalGrade: 0,
    passed: false,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471818',
    firstName: 'Manuel',
    middleName: 'Luis',
    lastName: 'Quezon',
    section: '2 - Hope',
    quarters: [
      {
        name: 'firstQuarter',
        label: 'First Quarter',
        quizzes: ['80', '80', '80'],
        average: 80,
      },
      {
        name: 'secondQuarter',
        label: 'Second Quarter',
        quizzes: ['70', '70', '70'],
        average: 70,
      },
      {
        name: 'thirdQuarter',
        label: 'Third Quarter',
        quizzes: ['0'],
        average: 0,
      },
      {
        name: 'fourthQuarter',
        label: 'Fourth Quarter',
        quizzes: ['0'],
        average: 0,
      },
    ],
    quarterAverages: [80, 70],
    finalGrade: 0,
    passed: false,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    firstName: 'Rodrigo',
    middleName: 'Roa',
    lastName: 'Duterte',
    section: '1 - Love',
    quarters: [
      {
        name: 'firstQuarter',
        label: 'First Quarter',
        quizzes: ['0'],
        average: 0,
      },
      {
        name: 'secondQuarter',
        label: 'Second Quarter',
        quizzes: ['0'],
        average: 0,
      },
      {
        name: 'thirdQuarter',
        label: 'Third Quarter',
        quizzes: ['0'],
        average: 0,
      },
      {
        name: 'fourthQuarter',
        label: 'Fourth Quarter',
        quizzes: ['0'],
        average: 0,
      },
    ],
    quarterAverages: [0],
    finalGrade: 0,
    passed: false,
  },
];

export function getStudents(): StudentProps[] {
  return students;
}

export function getStudent(id: string): object | undefined {
  return students.find(s => s._id === id);
}
