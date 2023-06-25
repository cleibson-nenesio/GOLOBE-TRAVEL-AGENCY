import { InputHTMLAttributes } from 'react';

export interface IEmailInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
}
