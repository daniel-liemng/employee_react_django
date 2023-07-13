/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEdit } from 'react-icons/ai';
import { TbTrashX } from 'react-icons/tb';

import { useGetAllEmployeesQuery } from '../../hooks/employeeHooks';
import Loading from '../shared/Loading';
import { Employee } from '../../types/employee';
import DeleteEmployeeModal from './DeleteEmployeeModal';
import EmployeeFormModal from './EmployeeFormModal';

interface EmployeeListProps {
  searchText: string;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ searchText }) => {
  const { data, isLoading, error } = useGetAllEmployeesQuery();

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleDeleteClose = () => {
    setIsDeleteOpen(false);
  };

  console.log('BBB', data);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error('Something went wrong');
  }

  return (
    <div className='mt-8'>
      <table className='w-full table-auto border-collapse border border-slate-700'>
        <thead>
          <tr>
            <th className='border border-slate-600 p-3 bg-slate-700'>Name</th>
            <th className='border border-slate-600 p-3 bg-slate-700'>Email</th>
            <th className='border border-slate-600 p-3 bg-slate-700'>
              Department
            </th>
            <th className='border border-slate-600 p-3 bg-slate-700'>
              Location
            </th>
            <th className='border border-slate-600 p-3 bg-slate-700'>Status</th>
            <th className='border border-slate-600 p-3 bg-slate-700'>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {!data && <tr>No data</tr>} */}
          {data
            .filter((employee: Employee) =>
              employee.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((employee: Employee) => (
              <tr key={employee.id}>
                <td className='border border-slate-700 p-3'>{employee.name}</td>
                <td className='border border-slate-700 p-3'>
                  {employee.email}
                </td>
                <td className='border border-slate-700 p-3'>
                  {employee.depName}
                </td>
                <td className='border border-slate-700 p-3'>
                  {employee.location}
                </td>
                <td className='border border-slate-700 border-b-0 p-3 flex justify-center'>
                  {employee.status ? (
                    <div className='w-fit h-fit px-3 py-1 bg-teal-300 text-gray-700 text-sm font-medium rounded-full flex justify-center items-center border-b-0'>
                      Active
                    </div>
                  ) : (
                    <div className='w-fit h-fit px-3 py-1 bg-red-400 text-gray-700 text-sm font-medium rounded-full flex justify-center items-center'>
                      Inactive
                    </div>
                  )}
                </td>
                <td className='border border-slate-700 p-3'>
                  <div className='flex justify-center gap-2'>
                    <div
                      onClick={() => {
                        setSelectedEmployee(employee);
                        setIsFormOpen(true);
                      }}
                      className='bg-teal-300 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'
                    >
                      <AiOutlineEdit className='text-gray-700 font-bold text-center text-xl' />
                    </div>
                    <div
                      onClick={() => {
                        setSelectedEmployee(employee);
                        setIsDeleteOpen(true);
                      }}
                      className='bg-red-400 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'
                    >
                      <TbTrashX className='text-gray-700 font-bold text-center text-xl' />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <EmployeeFormModal
        employee={selectedEmployee}
        isOpen={isFormOpen}
        handleClose={handleFormClose}
      />
      <DeleteEmployeeModal
        employee={selectedEmployee}
        isOpen={isDeleteOpen}
        handleClose={handleDeleteClose}
      />
    </div>
  );
};

export default EmployeeList;
