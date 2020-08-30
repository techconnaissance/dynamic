import { FormGroup,ValidatorFn } from '@angular/forms';

export interface Field {
  label: string;
  id?: string;
  name: string;
  icon?: string;
  customConfig?: any;
  disabled?: boolean;
  dependent?: any;
  placeholder?: string;
  type: string;
  value?: any;
  options?: any;
  option?: any;
  method?: string;
  class?: string;
  validation?: Validation;
}

export interface Form {
  name: string; 
  field: Field[];
}

export interface Validation {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: string;
  IsDuplicate?: boolean;
}