export interface IQuestion {
  value: Value;
  errors: any[];
  success: boolean;
}

export interface Value {
  items: Item[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface Item {
  surveyId: string;
  questionText: string;
  questionType: string;
  created: Date;
  options: Option[];
  id: string;
}

export interface Option {
  questionId: string;
  optionText: string;
  question: null;
  id: string;
}
