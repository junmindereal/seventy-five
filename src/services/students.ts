const students: Array<object> = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    firstName: 'Juan',
    middleName: 'Mercado',
    lastName: 'Dela Cruz',
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
    _id: '5b21ca3eeb7f6fbccd471818',
    firstName: 'Rodrigo',
    middleName: 'Roa',
    lastName: 'Duterte',
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

export function getStudents(): Array<object> {
  return students;
}
