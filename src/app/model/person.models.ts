export interface Result {
  value:   Person;
  errors:  Error[];
  success: boolean;
}
export interface Error {
  message:   string;
  errorCode: string;
}

export interface Person {
  id:             string;
  created:        Date;
  createdBy:      string;
  lastModified:   Date;
  lastModifiedBy: string;
  userName:       string;
  name:           string;
  email:          string;
  isAdmin:        boolean;
  surveys:        Survey[];
}

export interface Survey {
  id:             string;
  created:        Date;
  createdBy:      string;
  lastModified:   Date;
  lastModifiedBy: string;
  personId:       string;
  tittle:         string;
  description:    string;
  startDate:      Date;
}
