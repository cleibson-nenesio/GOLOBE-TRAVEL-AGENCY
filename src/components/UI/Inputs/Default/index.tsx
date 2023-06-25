// React
import React from 'react';

// Types
import * as T from './types';

const InputDefault: React.FC<T.InputDefaultProps> = ({
  label,
  icon,
  ...rest
}) => {
  return (
    <div className='relative py-4 px-3 border border-black rounded cursor-pointer w-full'>
      <label htmlFor={label} className='absolute -top-4 p-1 bg-white'>
        {label}
      </label>
      <input
        type=''
        id={label}
        className='w-full h-full appearance-none outline-none'
        {...rest}
      />
      {icon && (
        <div className='absolute right-5 top-1/2 -translate-y-1/2'>{icon}</div>
      )}
    </div>
  );
};

export default InputDefault;
