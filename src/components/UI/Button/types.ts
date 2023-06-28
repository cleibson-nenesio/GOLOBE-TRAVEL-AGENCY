// React
import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	backgroundColor?: string;
	styles?: string;
	icon?: React.ReactNode;
}
