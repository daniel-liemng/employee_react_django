import { ScaleLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='w-full h-1/4 flex justify-center items-center'>
      <ScaleLoader color='#2dd4bf' height={40} width={8} />
    </div>
  );
};

export default Loading;
