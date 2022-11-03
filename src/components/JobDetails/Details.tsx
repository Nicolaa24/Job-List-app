import { v4 as uuidv4 } from 'uuid';

import { Props } from './ContactInfo';


export const Details: React.FC<Props> = ({ details }) => {
  return (
    <div className='sm:relative sm:h-[550px]'>
      <div className='sm:absolute sm:top-[230px]'>
        <h1 className='text-titleColor text-[28px] font-bold border-b-[1px] border-titleColor border-opacity-[0.13] mb-[15px]'>
          Additional info
        </h1>

        <div>
          <h3 className='text-buttonDetail py-[18px] font-normal mb-[10px]'>Employment type</h3>
          <div className='flex'>
            {details?.employment_type.map(item => (
              <div key={uuidv4()} className='w-[222px] h-[49px] bg-employmentType border-[1px] border-blueBorder   font-bold text-blue text-base text-center rounded-lg mr-2 mb-[23px] py-3'>{item}</div>
            ))}
          </div>
           
        </div>

        <div className=''>
          <h3 className='text-buttonDetail py-[18px] font-normal mb-[10px]'>Benefits</h3>
          <div className='flex'>
            {details?.benefits.map(item => (
              <div key={uuidv4()} className='w-[222px] h-[49px] sm:w-[200px] bg-benefits border-[1px] border-yellowBorder font-bold text-benefitsYellow  text-base text-center rounded-lg mr-2 mb-[23px] py-3'>{item}</div>
            ))}
          </div>
        </div>

      </div>
         
      <div className='sm:absolute sm:top-0 sm:w-screen '>
        <h1 className='text-titleColor text-[28px] font-bold border-b-[1px] border-titleColor border-opacity-[0.13] mb-[15px]'>
          Attached Images
        </h1>
        <div className='flex flex-row mb-[89px] overflow-y-auto sm:w-full'>
          {details?.pictures.map(image => (
            <div key={uuidv4()} className='ml-2  sm:w-[220px]' >
              <img src={image} className='w-[250px] sm:w-[220px] h-[150px] rounded-lg' alt='/' />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
};
