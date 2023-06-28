export interface CalendarRangeHeaderProps {
	date: Date;
	changeYear: (year: number) => void;
	changeMonth: (month: number) => void;
	decreaseMonth: () => void;
	increaseMonth: () => void;
	prevMonthButtonDisabled: boolean;
	nextMonthButtonDisabled: boolean;
}
