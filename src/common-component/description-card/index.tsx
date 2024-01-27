import React from 'react'
import Bulbe from '../bulbe'
import './index.css'

const DescriptionCard = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <span className='name'>Dr. Matthew Anderson</span>
      <span className='title'>A dedicated doctor you can trust</span>
      <span className='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget
        vel, nunc nulla feugiat. Metus ut.
      </span>
      <Bulbe title='Book an appointment' width='60' />
    </div>
  )
}

export default DescriptionCard
