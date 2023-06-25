// Types
import { InputHTMLAttributes } from 'react';

export interface InputDefaultProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}
