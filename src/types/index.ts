export interface StudentProps {
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

export interface StudentNameProps {
  firstName: string;
  lastName: string;
  section: string;
  finalGrade: number;
  passed: boolean;
}

export interface QuarterProps {
  firstQuarter: number;
  secondQuarter: number;
  thirdQuarter: number;
  fourthQuarter: number;
}

export interface InputProps {
  value: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  className: string;
  label: string | React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export interface MenuLinkProps {
  icon: object;
  label: string;
}
