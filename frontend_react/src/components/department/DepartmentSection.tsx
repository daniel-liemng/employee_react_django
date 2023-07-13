import { useState, ChangeEvent } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import DepartmentList from './DepartmentList';
import Input from '../shared/Input';
import { useCreateDepartmentMutation } from '../../hooks/departmentHooks';
import { toast } from 'react-hot-toast';

const DepartmentSection = () => {
  const [name, setName] = useState('');

  const { mutateAsync: createDepartment } = useCreateDepartmentMutation();

  const handleCreateDepartment = async () => {
    await createDepartment({ name });
    setName('');
    toast.success('Department Created');
  };

  return (
    <section className='border border-gray-200 p-3 rounded-lg w-[300px]'>
      <h2 className='text-3xl text-center mt-5 mb-8'>Department</h2>
      <div className='mb-4 flex gap-2'>
        <Input
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder='Department Name'
        />

        <div
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleCreateDepartment}
          className='bg-teal-300 rounded-full w-12 h-10 flex justify-center items-center cursor-pointer'
        >
          <AiOutlinePlus className='text-gray-700 font-bold text-center text-2xl' />
        </div>
      </div>

      <DepartmentList />
    </section>
  );
};

export default DepartmentSection;
