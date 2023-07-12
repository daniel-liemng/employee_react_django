import DepartmentSection from './components/DepartmentSection';
import EmployeeSection from './components/EmployeeSection';

const App = () => {
  return (
    <div className='flex gap-3 h-full w-full min-h-screen p-5 flex-wrap'>
      <DepartmentSection />
      <EmployeeSection />
    </div>
  );
};

export default App;
