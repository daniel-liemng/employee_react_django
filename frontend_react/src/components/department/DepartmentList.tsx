/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { toast } from 'react-hot-toast';
import { useGetAllDepartmentsQuery } from '../../hooks/departmentHooks';
import { Department } from '../../types/department';
import DepartmentItem from './DepartmentItem';
import Loading from '../shared/Loading';

const DepartmentList = () => {
  const { data, isLoading, error } = useGetAllDepartmentsQuery();

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error('Something went wrong');
  }

  return (
    <div className='mt-8 w-full'>
      {data?.map((dep: Department) => (
        <DepartmentItem key={dep?.id} department={dep} />
      ))}
    </div>
  );
};

export default DepartmentList;
