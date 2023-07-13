import { useState, ChangeEvent } from 'react';
import { toast } from 'react-hot-toast';

import Input from '../shared/Input';
import Modal from '../shared/Modal';
import { useEditDepartmentMutation } from '../../hooks/departmentHooks';
import { Department } from '../../types/department';

interface EditDepartmentModalProps {
  department: Department;
  isOpen: boolean;
  handleClose: () => void;
}

const EditDepartmentModal: React.FC<EditDepartmentModalProps> = ({
  department,
  isOpen,
  handleClose,
}) => {
  const { mutateAsync: editDepartment, error } = useEditDepartmentMutation();

  const [name, setName] = useState(department.name);

  const handleEditDepartment = async () => {
    await editDepartment({ id: department.id, name });

    toast.success('Department Edited');
    handleClose();
  };

  if (error) {
    toast.error('Something went wrong');
  }

  return (
    <Modal title='Edit Department' isOpen={isOpen} handleClose={handleClose}>
      <div className='mt-6 w-full'>
        <Input
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder='Department Name'
        />
      </div>

      <div className='bg-[#192734] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-3'>
        <button
          type='button'
          className='inline-flex w-full justify-center rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-teal-200 sm:ml-3 sm:w-auto'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleEditDepartment}
        >
          Edit
        </button>
        <button
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
          onClick={handleClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default EditDepartmentModal;
