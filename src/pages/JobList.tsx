import React from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';

import { JobDetail } from '../types/interface';
import { JobItem } from '../components/JobItem';


interface Props {
describeJobId:(id:number)=>void
}

export const JobList: React.FC<Props> = ({ describeJobId }) => {
  const [jobList, setJobList] = React.useState<JobDetail[]>([]);

  const getAllJobs = async () => {
    const res = await axios.get<JobDetail[]>(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data`,
      { params: { access_token: "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu" } }
    );

    setJobList(res.data)
  };

  React.useEffect(() => {
    getAllJobs();
  }, []);

  const getLocation = async (lat: number, lon: number) => {
    const res = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=df716c25b7c74e3c92ccc617e685f87e`)
    console.log(await res.data.features[0].properties)
  }
  // getLocation(10.714357, -163.600986)
  

  return (
    <div className=' flex flex-col mx-[260px] mt-[29px]  w-[1400px] h-[164px]  px-4 py-6'>

      {jobList.map((item, index) => (
        <JobItem props={item} describeJobId={describeJobId} index={index} />
      ))}

      <div className='w-[515px] h-[52px] text-center m-auto  bg-slate-700 mt-[49px] mb-[64px] '>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </div>
    </div>
  )
};
