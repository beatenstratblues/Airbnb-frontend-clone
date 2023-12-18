import React from 'react'
import { OPTIONS_LIST } from '../utils/constants'

const OptionsCard = (props) => {
  return (
    <span className="flex flex-col items-center py-3 gap-2 opacity-60">
        <img alt="place" src={props.link} className='w-[24px]'/>
        <span className='text-xs'>{props.name}</span>
    </span>
  )
}

export default OptionsCard