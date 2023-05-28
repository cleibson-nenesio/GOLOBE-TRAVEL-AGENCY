import { InputHTMLAttributes } from "react";

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
}
