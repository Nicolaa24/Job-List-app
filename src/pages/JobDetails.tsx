import React from 'react'

import axios from 'axios';

import { JobDetail } from '../types/interface';

interface Props {
  id:number
}

export const JobDetails:React.FC<Props> = ({ id }) => {
  
  const [details, setDetails] = React.useState<JobDetail | null>(null)

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
    <div>
      {details?.name}
    </div>
  )
}
