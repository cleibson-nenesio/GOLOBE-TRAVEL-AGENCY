export interface SelectProps {
  label: string;
  placeholder?: string;
  options: IOption[];
  getCurrentValue: (value: IOption) => void;
}

export interface IOption {
  value: string;
  label: string;
}
