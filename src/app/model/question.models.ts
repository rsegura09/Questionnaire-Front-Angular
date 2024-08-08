export interface QuestionRequest {
  surveyId: string;
  questionText: string;
  questionType: string;
}

export interface QuestionResponse {
  value: Value;
  errors: any[];
  success: boolean;
}

export interface Value {
  items: Question[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface Question {
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
