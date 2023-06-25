// React
import React, { useState } from 'react';

// Types
import * as T from './types';

// Libraries
import moment from 'moment';

// Icons
import * as I from '@/assets/icons';

const InputCalendarRange: React.FC<T.CalendarRangeProps> = ({
  label,
  ...rest
}) => {
  const [selectedDates, setSelectedDates] = useState<T.IDateRange>(
    {} as T.IDateRange
  );

  function generateDaysInMonth() {
    const lastMonth = moment()?.subtract(1, 'month')?.format('DD-MM-YYYY');

    const initialMonthDayWeek = parseInt(
      moment()?.startOf('month')?.format('DD')
    );

    const lastMonthAllDays = getAllDaysInMonth(
      moment()?.subtract(1, 'month')?.startOf('month')?.format('DD-MM-YYYY')
    );

    console.log(lastMonthAllDays);

    const currentMonthAllDays = getAllDaysInMonth(
      moment()?.format('DD-MM-YYYY')
    );

    console.log(currentMonthAllDays);

    // console.log(monthDays);

    // return monthDays;
  }

  generateDaysInMonth();

  function getAllDaysInMonth(month: string): string[] {
    const monthFormat = /^\d{2}-\d{2}-\d{4}$/; // DD-MM-YYYY

    if (!monthFormat.test(month)) {
      return [''];
    }

    const monthDays = [];

    const allDays = moment(month, 'DD-MM-YYYY')?.daysInMonth();

    for (let day = 1; day <= allDays; day++) {
      monthDays.push(moment()?.date(day)?.format('DD-MM-YYYY'));
    }

    return monthDays;
  }

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
      <div className='absolute left-0 top-full p-1 bg-white rounded border border-black flex flex-col items-center'>
        {/* <div className='flex justify-between py-2 px-4 w-full'>
          <div className='p-1 bg-blacklish-green rounded cursor-pointer rotate-180'>
            <I.ChevronRightIcon color={'#fff'} />
          </div>

          <span className=''>{moment()?.format('MMMM - YYYY')}</span>

          <div className='p-1 bg-blacklish-green rounded cursor-pointer'>
            <I.ChevronRightIcon color={'#fff'} />
          </div>
        </div> */}

        <div className='grid grid-cols-7 gap-1'>
          {weekDays?.map((weekDay) => (
            <span key={weekDay} className='text-center'>
              {weekDay}
            </span>
          ))}
          {/* {generateDaysInMonth()?.map((day, index) => (
            <span
              key={index}
              className={`p-2 hover:bg-slate-200 flex justify-center items-center rounded transition-all`}
              onMouseEnter={() => console.log(day)}
            >
              {day}
            </span>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default InputCalendarRange;
