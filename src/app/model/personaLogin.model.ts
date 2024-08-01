export interface PersonResponse {
  value: Value;
  errors: any[];
  success: boolean;
}

export interface Value {
  id:      string;
  isAdmin: boolean;
}

export interface Personlogin {
  Email: string;
  Password: string;
}
