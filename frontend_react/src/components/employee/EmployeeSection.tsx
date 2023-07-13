import { useState, ChangeEvent } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import EmployeeList from './EmployeeList';
import Input from '../shared/Input';
import EmployeeFormModal from './EmployeeFormModal';

const EmployeeSection = () => {
  const [searchText, setSearchText] = useState<string>('');

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <section className='border border-gray-200 p-3 rounded-lg flex-1'>
      <h2 className='text-3xl text-center mt-5 mb-8'>Employee</h2>
      <div className='mb-4 flex gap-2'>
        <Input
          value={searchText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
          placeholder='Search employee name'
        />
        <div
          onClick={() => setIsFormOpen(true)}
          className='bg-teal-300 rounded-full w-11 h-10 flex justify-center items-center cursor-pointer'
        >
          <AiOutlinePlus className='text-gray-700 font-bold text-center text-2xl' />
        </div>
      </div>

      <EmployeeFormModal isOpen={isFormOpen} handleClose={handleFormClose} />

      <EmployeeList searchText={searchText} />
    </section>
  );
};

export default EmployeeSection;
