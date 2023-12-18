import React, { useState } from 'react'
import { RENTAL_LIST } from '../utils/constants'

const Card = (props)=>{
  

  return (
    <div>
    <div className='w-[206.66px] h-[18px] text-sm'>
      {
        props.name
      }
    </div>
    <div className='w-[206.66px] h-[18px] opacity-50 font-normal text-sm'>
    {
        props.rentals
    }
    </div>
    </div>
  )
}

const Getways = () => {

  const [Showmore,setShowmore] = useState(true);

  return (
    <div className='bg-[#F7F7F7] px-[80px] py-[48px] border-b-[1px] border-gray-300'>
      <div>
        <h2 className='mb-[8px] text-2xl opacity-80'>Inspiration for future getaways</h2>
        <div className=''>
          <ul className='flex border-b-[1px] border-gray-300'>
            <li className='text-[14px] my-[6px] ml-[-10px] p-[10px] opacity-50'>Popular</li>
            <li className='text-[14px] my-[6px] mr-[6px] p-[10px] opacity-50'>Arts & culture</li>
            <li className='text-[14px] my-[6px] mr-[6px] p-[10px] opacity-50'>Outdoor</li>
            <li className='text-[14px] my-[6px] mr-[6px] p-[10px] opacity-50'>Mountains</li>
            <li className='text-[14px] my-[6px] mr-[6px] p-[10px] opacity-50'>Beach</li>
            <li className='text-[14px] my-[6px] mr-[6px] p-[10px] opacity-50'>Unique stays</li>
            <li className='text-[14px] my-[6px] mr-[6px] p-[10px] opacity-50'>Categories</li>
            <li className='text-[14px] my-[6px] mr-[6px] p-[10px] opacity-50'>Things to do</li>
          </ul>
        </div>
        <div className='grid pt-[32px] grid-cols-6 gap-x-[8px] gap-y-6'>
          {
            (Showmore) ? (RENTAL_LIST.slice(0,17).map((x)=>{ return <Card name={x.name} rentals={x.rentals}/> })) : (RENTAL_LIST.map((x)=>{ return <Card name={x.name} rentals={x.rentals}/> }))
          }
        <div className='text-sm flex gap-2 items-center cursor-pointer' onClick={()=>{setShowmore(!Showmore)}}>
          Show more
          <img alt="showmore" src="https://cdn-icons-png.flaticon.com/512/25/25623.png" className='w-[10px] h-[10px]'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Getways