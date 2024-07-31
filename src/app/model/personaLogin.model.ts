export interface Personalogin {
  Email: string;
  Password: string;
}

export interface UserResponse {
  value: User;
  errors: any[]; // Ajusta el tipo de `errors` según la estructura real de errores que esperas.
  success: boolean;
}

export interface Questionnaire {
  QuestionnaireId: string;
  executionDate: string;
  title: string;
}


export interface User {
  nameUser?: string;
  name?: string;
  email?: string;
  rol?: boolean;
  questionnaires?: Questionnaire[]; // Ajusta el tipo de `questionnaires` según la estructura real de los cuestionarios.
  created?: string; // Puede ser `Date` si prefieres manipular fechas.
  createdBy?: string | null;
  lastModified?: string; // Puede ser `Date` si prefieres manipular fechas.
  lastModifiedBy?: string | null;
  id?: string;
}


