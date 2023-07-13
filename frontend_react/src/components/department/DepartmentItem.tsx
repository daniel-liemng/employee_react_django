import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { TbTrashX } from 'react-icons/tb';

import { Department } from '../../types/department';
import EditDepartmentModal from './EditDepartmentModal';
import DeleteDepartmentModal from './DeleteDepartmentModal';

interface DepartmentItemProps {
  department: Department;
}

const DepartmentItem: React.FC<DepartmentItemProps> = ({ department }) => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const handleEditClose = () => {
    setIsEditOpen(false);
  };

  const handleDeleteClose = () => {
    setIsDeleteOpen(false);
  };

  return (
    <div className='w-full mb-5'>
      <div className='flex justify-between items-center'>
        <h3>{department.name}</h3>
        <div className='flex gap-2'>
          <div
            onClick={() => setIsEditOpen(true)}
            className='bg-teal-300 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'
          >
            <AiOutlineEdit className='text-gray-700 font-bold text-center text-xl' />
          </div>
          <div
            onClick={() => setIsDeleteOpen(true)}
            className='bg-red-400 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'
          >
            <TbTrashX className='text-gray-700 font-bold text-center text-xl' />
          </div>
        </div>
      </div>
      <EditDepartmentModal
        department={department}
        isOpen={isEditOpen}
        handleClose={handleEditClose}
      />
      <DeleteDepartmentModal
        department={department}
        isOpen={isDeleteOpen}
        handleClose={handleDeleteClose}
      />
    </div>
  );
};

export default DepartmentItem;
