import { TiChevronLeft } from 'react-icons/ti';
import { TiChevronRight } from 'react-icons/ti';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  jobPerPage: number;
  totalJobs: number;
  paginate: (currentPage: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export const Pagination: React.FC<Props> = ({ jobPerPage, totalJobs, paginate, nextPage, prevPage }) => {
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='w-[515px] h-[52px] flex justify-between items-center text-center m-auto  bg-white mt-[49px] mb-[64px] rounded-[10px] '>
       
      <div className='h-full w-[12%]'>
        <TiChevronLeft size={19} className='my-4 ml-6 mr-8 w-full cursor-pointer border-r-2 border-paginationArrow text-paginationArrow '
        onClick={prevPage}
        />
      </div>
        
        
      <div className='mt-[12px] mb-[9px] w-[76%]'>
        {pageNumbers.map(number => (
          <span key={uuidv4()} className='w-[31px] h-[31px] mb-2 mr-2 text-xl font-bold text-paginationNumber cursor-pointer'
          onClick={()=>paginate(number)}
          >{number}</span>
        ))}
          
      </div>

      <div className='h-full w-[12%]'>
        <TiChevronRight size={19} className='my-4  w-full cursor-pointer border-l-2  text-paginationArrow  border-paginationArrow '
          onClick={nextPage}
        />
      </div>
        
    </div>
  )
};
