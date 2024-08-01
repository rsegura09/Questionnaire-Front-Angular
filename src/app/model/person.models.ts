export interface Cuestionario {
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
  userName: string;
  name: string;
  email: string;
  isAdmin: boolean;
  surveys: Survey[];
  created: Date;
  createdBy: null;
  lastModified: Date;
  lastModifiedBy: null;
  id: string;
}

export interface Survey {
  personId: string;
  tittle: string;
  description: string;
  startDate: Date;
  questions: any[];
  person: null;
  created: Date;
  createdBy: null;
  lastModified: Date;
  lastModifiedBy: null;
  id: string;
}
