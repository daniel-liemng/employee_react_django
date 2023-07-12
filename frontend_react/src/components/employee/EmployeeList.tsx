const EmployeeList = () => {
  return (
    <div className='mt-8'>
      <table className='w-full table-auto border-collapse border border-slate-500'>
        <thead>
          <tr>
            <th className='border border-slate-600 p-3'>Song</th>
            <th className='border border-slate-600'>Artist</th>
            <th className='border border-slate-600'>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-slate-700 p-2'>
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className='border border-slate-700'>Malcolm Lockyer</td>
            <td className='border border-slate-700'>1961</td>
          </tr>
          <tr>
            <td className='border border-slate-700'>Witchy Woman</td>
            <td className='border border-slate-700'>The Eagles</td>
            <td className='border border-slate-700'>1972</td>
          </tr>
          <tr>
            <td className='border border-slate-700'>Shining Star</td>
            <td className='border border-slate-700'>Earth, Wind, and Fire</td>
            <td className='border border-slate-700'>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
