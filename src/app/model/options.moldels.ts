export interface Option {
  optionText: string;
  id: string;
}

export interface OptionsResponse {
  value: {
    options: Option[];
  };
  errors: any[];
  success: boolean;
}
