import React from 'react';

import { Link } from 'react-router-dom';
import Moment from 'react-moment'
import { JobDetail } from '../types/interface';


interface Props {
  props: JobDetail;
  describeJobId: (id: number) => void;
  index: number;
}



export const JobItem: React.FC<Props> = ({ props, describeJobId, index }) => {
  return (
   
    <div key={props.id} className='flex flex-row items-center gap-8 relative rounded-lg  shadow-lg '>
      <div className=' w-[85px] h-[85px] mr-[26px] ml-6 mt-6 mb-14 rounded-full' >
        <img src={props.pictures[0]} alt='/' className='rounded-full object-cover ' />
      </div>
     
      <div className='flex flex-col w-[959px] mb-6'>
        <div className='mb-2 w-[712px] h-[50px]' onClick={() => describeJobId(index)}>
          <Link to='/details' className='text-xl text-gray-800 '>{props.title}</Link>
        </div>
        <h3 className='text-base font-normal text-gray-400 mb-2 '>{props.name}</h3>
        <span className='text-base font-normal text-gray-400  '>Vienna,Austria</span>
      </div>
     
      <div>
              
      </div>
      <div>
        Posted: <Moment fromNow>{props.createdAt}</Moment>
      </div>
    </div>
       
  )
};
