export interface InputProps {
  label: string;
  id: string;
  error: string;
  type: string;
  name: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface SignUpFormDataType {
  [k: string]: FormDataEntryValue | FormDataEntryValue[];
}
