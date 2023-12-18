import React from 'react'

const FilterButton = () => {
  return (
    <div className='flex items-center'>
      <div className='text-xs grid grid-flow-col items-center justify-center border border-gray-300 gap-2 p-3 rounded-xl'>
        <img alt="Filter" src="https://cdn-icons-png.flaticon.com/512/6590/6590958.png" className='w-[20px]'/>
      Filters
      </div>
    </div>
  )
}

export default FilterButton