import React from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TiChevronLeft } from 'react-icons/ti';

import { JobDetail } from '../../types/interface';
import { ContactInfo, Header, Description, About, Details } from '../../components/JobDetails';
import { Button } from '../../components/UI';

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
    <div className='bg-white min-h-[100vh] w-[1920px] flex sm:h-[2755px] sm:max-w-[480px] sm:flex-col'>

      <div className='w-[721px] sm:w-full sm:ml-[10px] sm:mr-[10px] ml-[341px] mr-[115px]'>

        <Header />

        <div className='mb-8 sm:hidden'>
          <Button title='APPLY NOW' />
        </div>

        <Description details={details} />
        
        <About details={details} />

        <div className='mt-7 mb-[86px]'>
          <Button title='APPLY NOW' />
        </div>

        <Details details={details} />

        <div className='flex bg-BackgroundColor cursor-pointer w-[213px] h-[50px] sm:mb-[21px] mb-[152px] items-center text-center sm:hidden'
          onClick={() => navigate(-1)}
        >
          <TiChevronLeft size={18} className='text-buttonDetail my-4 ml-[23px] mr-[19px]' />
          <span className='text-[11px] text-buttonDetail font-semibold w-[135px] h-[16px] mt-'>
            RETURN TO JOB BOARD
          </span>
        </div>
      </div>

      <ContactInfo details={details} />
      
    </div>
  )
};
