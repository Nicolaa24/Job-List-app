import React from 'react'

interface Props {
  title: string
}

export const Button:React.FC<Props> = ({title}) => {
  return (
    <button
      className='bg-buttonDetail py-[18px] px-[30px] rounded-lg text-[11px] font-semibold text-white'
    >
      {title}
    </button>
  )
}
