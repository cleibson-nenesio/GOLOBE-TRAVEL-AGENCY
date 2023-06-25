// React
import React, { useState } from 'react';

// Types
import * as T from './types';

// Icons
import * as I from '@/assets/icons';

const SelectDefault: React.FC<T.SelectProps> = ({
  label,
  placeholder,
  options,
  getCurrentValue,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<T.IOption>(options[0]);

  function handleShowOptions(): void {
    setIsOpen(!isOpen);
  }

  function handleSelectedOption(option: T.IOption): void {
    setSelectedOption(option);
    getCurrentValue(option);
  }

  return (
    <div
      className='relative py-4 px-3 border border-black rounded w-full cursor-pointer'
      onClick={handleShowOptions}
      {...rest}
    >
      <label htmlFor={label} className='absolute -top-4 p-1 bg-white'>
        {label}
      </label>
      <div className='font-medium'>{selectedOption?.label}</div>
      <div
        className={`${
          isOpen ? 'h-32 p-1 border' : 'h-0 p-0 border-0'
        } absolute flex flex-col justify-center top-16 left-0 rounded transition-all border border-black shadow-primary-shadow w-full overflow-hidden`}
      >
        {options?.map((option) => (
          <div
            key={option.value}
            className='flex items-center gap-2 h-full px-2 py-1 transition-all rounded hover:bg-slate-200'
            onClick={() => handleSelectedOption(option)}
          >
            <span className='font-medium'>{option.label}</span>
          </div>
        ))}
      </div>
      <div className='absolute right-5 top-1/2 -translate-y-1/2'>
        <I.ChevronDownIcon />
      </div>
    </div>
  );
};

export default SelectDefault;
