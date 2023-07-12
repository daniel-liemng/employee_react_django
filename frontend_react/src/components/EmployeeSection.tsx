import { AiOutlineSearch } from 'react-icons/ai';
import EmployeeList from './EmployeeList';

const EmployeeSection = () => {
  return (
    <section className='border border-gray-200 p-3 rounded-lg flex-1'>
      <h2 className='text-3xl text-center mb-8'>Employee</h2>
      <div className='mb-4 flex gap-2'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Employee Name'
        />
        <div className='bg-teal-300 rounded-full w-11 h-10 flex justify-center items-center cursor-pointer'>
          <AiOutlineSearch className='text-gray-700 font-bold text-center text-2xl' />
        </div>
      </div>

      <EmployeeList />
    </section>
  );
};

export default EmployeeSection;
