import Joi from '@hapi/joi';

/**
 * Forms
 **/
export const initialAddStudentFormState = {
  _id: '',
  firstName: '',
  middleName: '',
  lastName: '',
  section: '',
  quarters: [
    {
      name: 'firstQuarter',
      quizzes: [0],
      average: 0,
    },
    {
      name: 'secondQuarter',
      quizzes: [0],
      average: 0,
    },
    {
      name: 'thirdQuarter',
      quizzes: [0],
      average: 0,
    },
    {
      name: 'fourthQuarter',
      quizzes: [0],
      average: 0,
    },
  ],
  quarterAverages: [0],
  finalGrade: 0,
  passed: false,
};

export const initialQuizStatePerQuarter = [
  {
    quarter: {
      title: '1st Quarter',
      name: 'firstQuarter',
      quizzes: [0],
    },
  },
  {
    quarter: {
      title: '2nd Quarter',
      name: 'secondQuarter',
      quizzes: [0],
    },
  },
  {
    quarter: {
      title: '3rd Quarter',
      name: 'thirdQuarter',
      quizzes: [0],
    },
  },
  {
    quarter: {
      title: '4th Quarter',
      name: 'fourthQuarter',
      quizzes: [0],
    },
  },
];

/**
 * Schemas
 **/
export const AddStudentFormSchema = Joi.object({
  _id: Joi.string(),
  firstName: Joi.string().required().label('First Name').min(2),
  middleName: Joi.string().required().label('Middle Name').min(2),
  lastName: Joi.string().required().label('Last Name').min(2),
  section: Joi.string()
    .required()
    .pattern(new RegExp('\\d\\s[-]\\s[A-Z|a-z]'), {name: '"4 - Galilee"'}),
  quarters: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      quizzes: Joi.array().items(Joi.number()).required(),
      average: Joi.number().required(),
    }),
  ),
  quarterAverages: Joi.array().items(Joi.number().required()),
  finalGrade: Joi.number(),
  passed: Joi.boolean(),
});
