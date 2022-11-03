import React from 'react';

import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { HiOutlineBookmark } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

import { JobDetail } from '../../types/interface';


interface Props {
  props: JobDetail;
  describeJobId: (id: number) => void;
  index: number;
}

export const JobItem: React.FC<Props> = ({ props, describeJobId, index }) => {

  const [location, setLocation] = React.useState('');

  const getLocation = async (lat: number, lon: number) => {
    const res = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=df716c25b7c74e3c92ccc617e685f87e`)
    
    if (typeof res.data.features[0].properties.name === 'undefined') {
      return setLocation('Vienna, Austria')
    }
    return setLocation(res.data.features[0].properties.name)
  }

  getLocation(props.location.lat, props.location.long);
   
  return (
    <div className='flex sm:w-full flex-row sm:flex items-center gap-8 relative bg-white sm:bg-BackgroundColor  mb-2 rounded-lg  shadow-lg justify-between '>

    
      
      <div className='w-[85px] h-[85px]  sm:w-[66px] sm:h-[66px] ml-6 mt-6 mb-14 rounded-full' >
        <img src={props.pictures[0]} alt='/' className='rounded-full sm:mx-[24px] w-full h-full   ' />
      </div>

      <div className='sm:mt-[40px]'>
        <div className='flex flex-col w-[720px] sm:mb-1 mb-3 sm:w-full sm:h-[48px] sm:overflow-y-auto xs:mt-2'>
          <div className='mb-2 w-[712px] h-[50px] mt-1 sm:w-full sm:h-[50px] '
            onClick={() => describeJobId(index)}>
            <Link to='/details' className='text-xl  text-titleColor font-bold sm:text-base sm:font-normal sm:max-w-full '>
              {props.title}
            </Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-base font-normal text-descriptionColor  mb-2 sm:text-base'>Department name: {props.name}</h3>
          <div className='flex items-center text-center sm:mb-5'>
            <ImLocation size={18} className="text-descriptionColor mr-2 cursor-pointer" />
            <span className='text-base font-normal text-descriptionColor sm:text-base'>
              {location}
            </span>
          </div>
        </div>
      </div>

      <div className='sm:absolute sm:top-5 sm:left-[33%] xs:left-[15%] '>
        <span className='flex cursor-pointer'>
          <AiFillStar size={19} />
          <AiFillStar size={19} />
          <AiFillStar size={19} />
          <AiFillStar size={19} />
          <AiFillStar size={19} />
        </span>
      </div>

      <div className=' flex flex-col mt-3 items-end sm:absolute sm:top-2 sm:right-3'>
        <span className='flex text-right items-end  justify-start mr-4  mb-6 mt-7 cursor-pointer   sm:hidden '>
          <HiOutlineBookmark size={20} />
        </span>
        <span className='text-[13px] mr-4 font-normal align-bottom table-cell text-descriptionColor'>
          Posted: <Moment fromNow>{props.updatedAt}</Moment>
        </span>
        
      </div>
    </div>
       
  )
};
