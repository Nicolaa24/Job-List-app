import React from 'react';

import { MdLocationOn } from 'react-icons/md';

import { JobDetail } from '../../types/interface';
import mapImage from '../../assets/images/mapD.png';

export interface Props {
  details: JobDetail | null;
}

export const ContactInfo: React.FC<Props> = ({ details }) => {
  return (
    <div className='w-[402px] h-[436px] sm:w-max-[372px] mt-[56px] sm:mr-[19px] sm:ml-[23px] sm:mb-[37px] mr-[315px] rounded-lg'>

      <h1 className='text-titleColor font-bold text-[28px] border-b-[1px] border-titleColor border-opacity-[0.13] sm:mb-[21px]'>
        Contacts
      </h1>
        
      <div className='h-[218px] bg-detailBg px-16 pt-8'>
        <h3 className='text-detailColorName text-xl font-bold mb-2 '>{details?.name}</h3>
        <div className='flex items-center text-center'>
          <MdLocationOn size={15} className='text-detailLocationIcon  cursor-pointer mr-2 ' />
          <h3 className='text-detailColor font-normal text-lg'>{details?.address}</h3>
        </div>
        <h3 className='text-detailColor font-normal text-lg mt-2'>{details?.email}</h3>
        <h3 className='text-detailColor font-normal text-lg'>{details?.phone}</h3>
      </div>

      <div>
        <img src={mapImage} alt='mapImage' />
      </div>

    </div>
  )
};
