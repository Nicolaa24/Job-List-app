import { TiChevronLeft } from 'react-icons/ti';
import {TiChevronRight} from 'react-icons/ti'

export const Pagination = () => {
  return (
     <div className='w-[515px] h-[52px] flex justify-between items-center text-center m-auto  bg-white mt-[49px] mb-[64px] rounded-[10px] '>
       
        <div className='h-full w-[12%]'>
          <TiChevronLeft size={19} className='my-4 ml-6 mr-8 w-full cursor-pointer border-r-2 border-paginationArrow text-paginationArrow '/>
        </div>
        
        
        <div className='mt-[12px] mb-[9px] w-[76%]'>
          <span className='w-[31px] h-[31px] mb-2 mr-2 text-xl font-bold text-paginationNumber'>1</span>
          <span className='w-[31px] h-[31px] mb-2 mr-2 text-xl font-bold text-paginationNumber'>2</span>
        </div>

        <div className='h-full w-[12%]'>
          <TiChevronRight size={19} className='my-4  w-full cursor-pointer border-l-2  text-paginationArrow  border-paginationArrow '/>
        </div>
        
      </div>
  )
}
