import { Props } from './ContactInfo';


export const Description: React.FC<Props> = ({ details }) => {
  return (
    <div className='flex mb-2 sm:flex-col sm:mb-[5px]'>
      <h1 className='w-[500px] mr-[60px] text-2xl font-bold text-titleColor sm:w-full'>{details?.title}</h1>
      <div className='sm:flex sm:justify-end sm:relative sm:h-[80px]'>
        <h3 className='text-[20px] font-bold text-titleColor sm:absolute sm:top-8 sm:right-3'>€ {details?.salary}</h3>
        <h4 className='text-titleColor font-normal sm:absolute sm:top-3 sm:right-3 sm:pb-2'>Brutto, per year</h4>
      </div>
    </div>
  )
};
