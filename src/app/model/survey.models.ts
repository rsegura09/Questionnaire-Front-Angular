export interface ISurvey {
  personId: string;
  title: string;
  description: string;
  startDate: Date;
}

export interface SurveyResponse {
  value: Value;
  errors: any[];
  success: boolean;
}

export interface Value {
  items: Survey[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface Survey {
  title: string;
  description: string;
  startDate: Date;
  personId: string;
  questions: Question[];
  created: Date;
  createdBy: null;
  lastModified: Date;
  lastModifiedBy: null;
  id: string;
}

export interface Question {
  surveyId: string;
  questionText: string;
  questionType: string;
  created: Date;
  options: any[];
  survey: null;
  id: string;
}
