/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from 'react';

interface InputProps {
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 bg-slate-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline'
      type='text'
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
