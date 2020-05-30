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

export const quarters = [
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
