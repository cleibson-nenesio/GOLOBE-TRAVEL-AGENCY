// React
import React, { useEffect, useState } from 'react';

// Types
import * as T from './types';

// Libraries
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Components
import { CustomInput } from './Customs/Input';
import Header from './Customs/Header';

// Styles
import './styles.css';

const InputCalendarRange: React.FC<T.CalendarRangeProps> = ({
  label,
  ...rest
}) => {
  const [dates, setDates] = useState<T.IDateRange>({
    startDate: new Date(),
    endDate: new Date('2023-07-01'),
  });

  function handleDateChange(rangeDates: [start: Date, end: Date]) {
    const [start, end] = rangeDates;

    setDates({
      startDate: start,
      endDate: end,
    });
  }

  return (
    <div className='relative w-full'>
      <div
        className='relative rounded border border-black w-full px-3 py-4 cursor-pointer'
        {...rest}
      >
        <label htmlFor={label} className='absolute -top-4 p-1 bg-white'>
          {label}
        </label>
        <div id={label} className='w-full h-full'>
          24 Jun 23 - 01 Jul 23
        </div>
      </div>

      {/* Calendar Range */}
      <div className='absolute left-3 top-1/2 -translate-y-1/2 p-1 w-3/4 bg-white'>
        <DataPicker
          startDate={dates?.startDate}
          endDate={dates?.endDate}
          onChange={handleDateChange}
          dateFormat={'dd MMM yy'}
          selectsRange
          customInput={<CustomInput />}
          renderCustomHeader={({
            changeMonth,
            changeYear,
            date,
            decreaseMonth,
            increaseMonth,
            nextMonthButtonDisabled,
            prevMonthButtonDisabled,
          }) => (
            <Header
              changeMonth={changeMonth}
              changeYear={changeYear}
              date={date}
              decreaseMonth={decreaseMonth}
              increaseMonth={increaseMonth}
              nextMonthButtonDisabled={nextMonthButtonDisabled}
              prevMonthButtonDisabled={prevMonthButtonDisabled}
            />
          )}
        />
      </div>
    </div>
  );
};

export default InputCalendarRange;
