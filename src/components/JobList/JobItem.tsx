import React from 'react';

import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { HiOutlineBookmark } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';

import { JobDetail } from '../../types/interface';


interface Props {
  props: JobDetail;
  describeJobId: (id: number) => void;
  index: number;
}



export const JobItem: React.FC<Props> = ({ props, describeJobId, index }) => {
  return (
   
    <div className='flex flex-row items-center gap-8 relative bg-white mb-2 rounded-lg  shadow-lg '>

      <div className=' w-[85px] h-[85px] sm:w-[66px] sm:h-[66px] mr-[26px] ml-6 mt-6 mb-14 rounded-full' >
        <img src={props.pictures[0]} alt='/' className='rounded-full  w-full h-full' />
      </div>
     
      <div className='flex flex-col w-[959px] mb-6 sm:w-[278px] sm:h-[48px] sm:bg-gray-900'>
        <div className='mb-2 w-[712px] h-[50px] ' onClick={() => describeJobId(index)}>
          <Link to='/details' className='text-xl text-titleColor font-bold sm:text-base sm:font-normal'>
            {props.title}
          </Link>
        </div>
        <h3 className='text-base font-normal text-descriptionColor  mb-2  sm:text-base'>{props.name}</h3>
        <span className='text-base font-normal text-descriptionColor  sm:text-base'>Vienna,Austria</span>
      </div>

      <div>
        <span className='flex'>
          <AiFillStar size={19} />
          <AiFillStar size={19} />
          <AiFillStar size={19} />
          <AiFillStar size={19} />
          <AiFillStar size={19}/>
        </span>
      </div>
    
      <div className='flex flex-col mr-4'>
        
        <span className='flex justify-end  mb-6 mt-7 cursor-pointer '>
          <HiOutlineBookmark size={20}/>
        </span>

        <div className='w-[138px] h-[67px]   mb-4 table '>
          <span className='text-[13px] font-normal align-bottom table-cell text-descriptionColor'>
             Posted: <Moment fromNow>{props.createdAt}</Moment>
          </span>
         
        </div>
        
      </div>

    </div>
       
  )
};
