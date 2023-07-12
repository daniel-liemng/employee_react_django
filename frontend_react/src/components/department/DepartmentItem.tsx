import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { TbTrashX } from 'react-icons/tb';

import { Department } from '../types/department';

interface DepartmentItemProps {
  department: Department;
}

const DepartmentItem: React.FC<DepartmentItemProps> = ({ department }) => {
  return (
    <div className='w-full mb-5'>
      <div className='flex justify-between items-center'>
        <h3>{department.name}</h3>
        <div className='flex gap-2'>
          <div className='bg-teal-300 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'>
            <AiOutlineEdit className='text-gray-700 font-bold text-center text-xl' />
          </div>
          <div className='bg-red-400 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'>
            <TbTrashX className='text-gray-700 font-bold text-center text-xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentItem;
