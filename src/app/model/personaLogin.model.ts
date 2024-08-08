export interface PersonResponseLogin {
  value: Value;
  errors: any[];
  success: boolean;
}

export interface Value {
  id:      string;
  isAdmin: boolean;
  name: string;
}

export interface Personlogin {
  Email: string;
  Password: string;
}
