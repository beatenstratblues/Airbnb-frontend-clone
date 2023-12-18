import React from 'react'
import OptionsCard from './OptionsCard'
import { OPTIONS_LIST } from '../utils/constants'
import FilterButton from './FilterButton'

const Options = () => {
  return (
    <div className='px-[80px] outer pt-5'>
    <div className="inner overflow-scroll">
      {
        OPTIONS_LIST.map((x,index)=>{

          return <OptionsCard name={x.name} link={x.link} key={index}/>

        })
      }
    </div>
    <FilterButton/>
    </div>
  )
}

export default Options