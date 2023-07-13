/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Modal from '../shared/Modal';
import { Employee } from '../../types/employee';
import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
} from '../../hooks/employeeHooks';
import { Department } from '../../types/department';
import { useGetAllDepartmentsQuery } from '../../hooks/departmentHooks';

const empSchema = yup
  .object({
    empName: yup.string().required(),
    email: yup.string().email().required(),
    location: yup.string().required(),
    department: yup.number().required(),
    status: yup.boolean(),
  })
  .required();

type FormData = yup.InferType<typeof empSchema>;

// type FormData = {
//   empName: string;
//   email: string;
//   location: string;
//   department: number;
//   status?: boolean;
// };

interface EmployeeFormModalProps {
  employee?: Employee;
  isOpen: boolean;
  handleClose: () => void;
}

const EmployeeFormModal: React.FC<EmployeeFormModalProps> = ({
  employee,
  isOpen,
  handleClose,
}) => {
  const { data } = useGetAllDepartmentsQuery();

  const { mutateAsync: createEmployee, error: createError } =
    useCreateEmployeeMutation();
  const { mutateAsync: editEmployee, error: editError } =
    useEditEmployeeMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(empSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);

    await createEmployee({
      name: data.empName,
      email: data.email,
      location: data.location,
      department: Number(data.department),
    });

    toast.success('Employee Created');
    reset();
    handleClose();
  };

  if (createError || editError) {
    toast.error('Something went wrong');
  }

  console.log('8888', employee);

  return (
    <Modal
      title={`${employee ? 'Edit' : 'Create New'} Employee`}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-6 w-full'>
          <div className='mb-3'>
            <label
              htmlFor='empName'
              className='block mb-2 text-sm font-medium text-gray-400 '
            >
              Name
            </label>
            <input
              className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 bg-slate-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline'
              id='empName'
              type='text'
              {...register('empName')}
              defaultValue={employee?.name || ''}
              placeholder='Name'
            />
            <p className='my-1 text-red-400 text-sm capitalize'>
              {errors.empName && 'Name Is A Required Field'}
            </p>
          </div>

          <div className='mb-3'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-400 '
            >
              Email address
            </label>
            <input
              className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 bg-slate-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              {...register('email')}
              defaultValue={employee?.email || ''}
              placeholder='Email'
            />
            <p className='my-1 text-red-400 text-sm capitalize'>
              {errors.email?.message}
            </p>
          </div>

          <div className='mb-3'>
            <label
              htmlFor='location'
              className='block mb-2 text-sm font-medium text-gray-400 '
            >
              Location
            </label>
            <input
              className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 bg-slate-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline'
              id='location'
              type='text'
              {...register('location')}
              defaultValue={employee?.location || ''}
              placeholder='Location'
            />
            <p className='my-1 text-red-400 text-sm capitalize'>
              {errors.location?.message}
            </p>
          </div>
        </div>

        <div className='mb-3'>
          <label
            htmlFor='department'
            className='block mb-2 text-sm font-medium text-gray-400 '
          >
            Select a department
          </label>
          <select
            id='countries'
            className='bg-slate-700 border border-gray-400 text-gray-400 rounded shadow focus:outline-none focus:ring-gray-300 focus:border-gray-500 w-full py-1.5 px-3'
            {...register('department')}
          >
            <option>Choose a department</option>
            {data?.map((department: Department) => (
              <option value={department.id} key={department.id}>
                {department.name}
              </option>
            ))}
          </select>
          <p className='my-1 text-red-400 text-sm capitalize'>
            {errors.department && 'Department Is A Required Field'}
          </p>
        </div>

        <div className='bg-[#192734] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-3'>
          <button
            type='submit'
            className='inline-flex w-full justify-center rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-teal-200 sm:ml-3 sm:w-auto'
          >
            {employee ? 'Edit' : 'Create'}
          </button>
          <button
            type='button'
            className='mt-3 inline-flex w-full justify-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EmployeeFormModal;
