import React from 'react'

type Props = {
    img_url:string;
    id:number;
}

const BookCollection = ({img_url,id}:Props) => {
  return (
    <div>
        <p className='text-[#2d2d2f] font-bold text-7xl md:z-0 transform -translate-x-10'>0{id}</p>
        <img className='h-48 w-32 rounded-xl md:z-40 -translate-y-6' src={img_url} alt="" />
    </div>
  )
}

export default BookCollection