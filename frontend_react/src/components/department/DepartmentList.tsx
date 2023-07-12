/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetAllDepartmentsQuery } from '../../hooks/departmentHooks';
import { Department } from '../../types/department';
import DepartmentItem from './DepartmentItem';

const DepartmentList = () => {
  const { data, isLoading, error } = useGetAllDepartmentsQuery();

  console.log(data);

  return (
    <div className='mt-8 w-full'>
      {data?.map((dep: Department) => (
        <DepartmentItem key={dep?.id} department={dep} />
      ))}
    </div>
  );
};

export default DepartmentList;
