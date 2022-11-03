import { BsShareFill } from 'react-icons/bs';
import { HiOutlineBookmark } from 'react-icons/hi';

export const Header = () => {
  return (
    <header className='mt-[56px] flex sm:flex sm:flex-col justify-between sm:items-start  items-center text-center  mb-[39px] sm:mb-[32px]'>
      <h1 className='font-bold text-[28px] sm:w-[95%] sm:text-left sm:tracking-wider border-b-[1px] border-titleColor border-opacity-[0.13] sm:mb-[24px]'>Job Details</h1>
      <div className='flex '>
        <div className='flex mr-7 items-center text-center cursor-pointer'>
          <HiOutlineBookmark size={18} className='mr-4 text-paginationNumber ' />
          <h5 className='text-paginationNumber font-normal text-lg '>Save to my list</h5>
        </div>
        <div className='flex items-center text-center cursor-pointer'>
          <BsShareFill size={18} className='mr-4 text-paginationNumber ' />
          <h5 className='text-paginationNumber font-normal text-lg '>Share</h5>
        </div>
      </div>
    </header>
  )
};
