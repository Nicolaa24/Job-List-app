import Moment from 'react-moment';
import { v4 as uuidv4 } from 'uuid';

import { Props } from './ContactInfo';



export const About: React.FC<Props> = ({ details }) => {
  return (
    <div className='sm:relative'>
      <span className='text-[18px] mb-2 font-normal align-bottom table-cell text-descriptionColor sm:absolute sm:top-[-55px]'>
        Posted: <Moment fromNow>{details?.createdAt}</Moment>
      </span>
      <h3 className='text-[18px] text-titleColor font-normal mb-5 sm:mb-[43px] sm:mr-[31px] tracking-wider'>
        At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.
      </h3>

      <h2 className='mb-3  text-titleColor font-bold text-[20px]'>Responsibilities</h2>

      <h3 className='text-[18px] text-titleColor font-normal mb-5 tracking-wider sm:mr-[31px]'>{details?.description}</h3>

      <h2 className='text-titleColor font-bold text-[20px] mb-2'>Compensation & Benefits:</h2>

      <p className='text-titleColor font-normal text-[18px]'>Our physicians enjoy a wide range of benefits including:</p>
      
      <ul>
        {details?.benefits.map(item => (
          <div key={uuidv4()} className='flex items-center text-center'>
            <div className='w-[10px] h-[10px] bg-gray-500  mr-3'></div>
            <li className='text-[18px] text-titleColor font-normal'>{item}</li>
          </div>
        ))}
      </ul>

    </div>
  )
};
