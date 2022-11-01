import React from 'react'

import axios from 'axios';

import { JobDetail } from '../../types/interface';
import { JobItem } from '../../components/JobList/JobItem';
import { Pagination } from '../../components/JobList/Pagination';


interface Props {
describeJobId:(id:number)=>void
}

export const JobList: React.FC<Props> = ({ describeJobId }) => {
  const [jobList, setJobList] = React.useState<JobDetail[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [jobPerPage, setJobPerPage] = React.useState(10);
  const [Loading, setLoading] = React.useState(false);

  const getAllJobs = async () => {
    const res = await axios.get<JobDetail[]>(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data`,
      { params: { access_token: "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu" } }
    );
    setLoading(true);
    setJobList(res.data);
  };

  const lastCountryIndex = currentPage * jobPerPage;
  const firstCountryIndex = lastCountryIndex - jobPerPage;
  const currentJobList = jobList.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(jobList.length / jobPerPage)) {
      setCurrentPage(currentPage +1)
    }
    return;
  }

  const prevPage = () => {
     if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
     }
    return;
  }

  React.useEffect(() => {
    getAllJobs();
  }, []);

  const getLocation = async (lat: number, lon: number) => {
    const res = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=df716c25b7c74e3c92ccc617e685f87e`)
    console.log(await res.data.features[0].properties)
  }
  // getLocation(10.714357, -163.600986)
  
  if (!Loading) {
    return (<div className='w-[300px] h-[50px] m-auto text-center pt-4 text-xl'> Loading....</div>)
  }

  return (
    <div className=' flex flex-col mt-[29px] mx-auto w-[1400px] h-[164px]  px-4 py-6 
    sm:w-[396px] sm:h-[206px] sm:m-2'>

      {currentJobList.map((item, index) => (
        <JobItem props={item} describeJobId={describeJobId} index={index} key={item.id} />
      ))}

      <Pagination jobPerPage={jobPerPage}
        totalJobs={jobList.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      
    </div>
  )
};
