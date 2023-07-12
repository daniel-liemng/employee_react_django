import { AiOutlinePlus } from 'react-icons/ai';

const DepartmentSection = () => {
  return (
    <section className='border border-gray-200 p-3 rounded-lg w-[300px]'>
      <h2 className='text-3xl text-center mb-8'>Department</h2>
      <div className='mb-4 flex gap-2'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='department'
          type='text'
          placeholder='Department'
        />
        <div className='bg-teal-300 rounded-full w-12 h-10 flex justify-center items-center cursor-pointer'>
          <AiOutlinePlus className='text-gray-700 font-bold text-center text-2xl' />
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
