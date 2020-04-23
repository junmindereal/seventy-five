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
    status: 'passed',
  },
];

export function getStudents(): Array<object> {
  return students;
}
