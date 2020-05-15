export interface Student {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  section: string;
  firstQuarter: {
    quizzes: number[];
    average: number;
  };
  secondQuarter: {
    quizzes: number[];
    average: number;
  };
  thirdQuarter: {
    quizzes: number[];
    average: number;
  };
  fourthQuarter: {
    quizzes: number[];
    average: number;
  };
  quarterAverages: number[];
  finalGrade: number;
  passed: boolean;
}

export interface StudentOnList {
  firstName: string;
  lastName: string;
  section: string;
  finalGrade: number;
  passed: boolean;
}

export interface GradesPerQuarter {
  firstQuarter: number;
  secondQuarter: number;
  thirdQuarter: number;
  fourthQuarter: number;
}
