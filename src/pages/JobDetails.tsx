import React from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TiChevronLeft } from 'react-icons/ti';
import { BsShareFill } from 'react-icons/bs';
import { HiOutlineBookmark } from 'react-icons/hi';
import Moment from 'react-moment';
import { v4 as uuidv4 } from 'uuid';

import { JobDetail } from '../types/interface';
import { ContactInfo } from '../components/JobDetails/ContactInfo';

interface Props {
  id:number
}

export const JobDetails: React.FC<Props> = ({ id }) => {
  
  const [details, setDetails] = React.useState<JobDetail | null>(null);

  const navigate = useNavigate();

  const getAllJobs = async () => {
    const res = await axios.get<JobDetail[]>(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data`,
      { params: { access_token: "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu" } }
    );

    setDetails(res.data[id]);
  };

  React.useEffect(() => {
    getAllJobs();
  }, []);


  return (
    <div className='bg-white min-h-[100vh] w-[1920px] flex'>

      <div className='w-[721px] ml-[341px] mr-[115px]'>

        <header className='mt-[56px] flex justify-between items-center text-center border-b-[1px] border-titleColor border-opacity-[0.13] mb-[39px]'>
          <h1 className='font-bold text-[28px]'>Job Details</h1>
          <div className='flex'>
            <div className='flex mr-7 items-center text-center cursor-pointer'>
              <HiOutlineBookmark size={18} className='mr-4 text-paginationNumber' />
              <h5 className='text-paginationNumber font-normal text-lg '>Save to my list</h5>
            </div>
            <div className='flex items-center text-center cursor-pointer'>
              <BsShareFill size={18} className='mr-4 text-paginationNumber ' />
              <h5 className='text-paginationNumber font-normal text-lg '>Share</h5>
            </div>
          </div>
        </header>

        <div className='mb-8 '>
          <button className='bg-buttonDetail py-[18px] px-[30px] rounded-lg text-[11px] font-semibold text-white'>APPLY NOW</button>
        </div>

        <div className='flex mb-2'>
          <h1 className='w-[500px] mr-[60px] text-2xl font-bold text-titleColor'>{details?.title}</h1>
          <div>
            <h3 className='text-[20px] font-bold text-titleColor'>€ {details?.salary}</h3>
            <h4 className='text-titleColor font-normal '>Brutto, per year</h4>
          </div>
        </div>
        
        <div>
          <span className='text-[18px] mb-2 font-normal align-bottom table-cell text-descriptionColor'>
            Posted: <Moment fromNow>{details?.createdAt}</Moment>
          </span>
          <h3 className='text-[18px] text-titleColor font-normal mb-5 tracking-wider'>
            At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.
          </h3>

          <h2 className='mb-3  text-titleColor font-bold text-[20px]'>Responsibilities</h2>

          <h3 className='text-[18px] text-titleColor font-normal mb-5 tracking-wider'>{details?.description}</h3>

          <h2 className='text-titleColor font-bold text-[20px]'>Compensation & Benefits:</h2>

          <ul>
            {details?.benefits.map(item => (
              <div key={uuidv4()} className='flex items-center text-center'>
                <div className='w-[10px] h-[10px] bg-gray-500  mr-3'></div>
                <li className='text-[18px] text-titleColor font-normal'>{item}</li>
              </div>
            ))}
          </ul>

        </div>

        <div className='mt-7 mb-[86px]'>
          <button className='bg-buttonDetail py-[18px] px-[30px] rounded-lg text-[11px] font-semibold text-white'>APPLY NOW</button>
        </div>

        <div>
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

          <div>
            <h3 className='text-buttonDetail py-[18px] font-normal mb-[10px]'>Benefits</h3>
            <div className='flex'>
              {details?.benefits.map(item => (
                <div key={uuidv4()} className='w-[222px] h-[49px] bg-benefits border-[1px] border-yellowBorder font-bold text-benefitsYellow  text-base text-center rounded-lg mr-2 mb-[23px] py-3'>{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-titleColor text-[28px] font-bold border-b-[1px] border-titleColor border-opacity-[0.13] mb-[15px]'>
            Attached Images
          </h1>
          <div className='flex flex-row mb-[89px]'>
            {details?.pictures.map(image => (
              <div key={uuidv4()} className='ml-2' >
                <img src={image} className='w-[250px] h-[150px] rounded-lg' alt='/'/>
              </div>
            ))}
          </div>
          
        </div>
        

        <div className='flex bg-BackgroundColor cursor-pointer w-[213px] h-[50px] mb-[152px] items-center text-center'
          onClick={() => navigate(-1)}
        >
          <TiChevronLeft size={18} className='text-buttonDetail my-4 ml-[23px] mr-[19px]' />
          <span className='text-[11px] text-buttonDetail font-semibold w-[135px] h-[16px] mt-'>RETURN TO JOB BOARD</span>
        </div>
      </div>

      <ContactInfo details={details} />
      
    </div>
  )
};
