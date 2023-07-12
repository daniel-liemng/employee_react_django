import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { TbTrashX } from 'react-icons/tb';

import { Department } from '../../types/department';
import EditDepartmentModal from './EditDepartmentModal';

interface DepartmentItemProps {
  department: Department;
}

const DepartmentItem: React.FC<DepartmentItemProps> = ({ department }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [name, setName] = useState('');

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className='w-full mb-5'>
      <div className='flex justify-between items-center'>
        <h3>{department.name}</h3>
        <div className='flex gap-2'>
          <div className='bg-teal-300 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'>
            <AiOutlineEdit
              onClick={() => setIsOpen(true)}
              className='text-gray-700 font-bold text-center text-xl'
            />
          </div>
          <div className='bg-red-400 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'>
            <TbTrashX className='text-gray-700 font-bold text-center text-xl' />
          </div>
        </div>
      </div>
      <EditDepartmentModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default DepartmentItem;
