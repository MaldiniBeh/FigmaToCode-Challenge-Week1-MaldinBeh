import React from 'react'
import './index.css'
import Icons from '../common-component/icons'

const Appointement = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <span className='text-center text-hearder'>Book an appointment</span>
      <div className='cardStyle space-y-8 text-center p-16'>
        <div className='title'>
          Schedule a virtual or presential appointment today
        </div>
        <div className='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          egestas viverra turpis habitant eu sociis fermentum felis.
        </div>
        <div className='grid grid-cols-1 place-items-center'>
          <div className={`bulbe-form w-60 h-12`}>
            <div className='flex justify-center items-center space-x-1 h-full'>
              {Icons.whatsappBleu}
              <span className='text-style'>Book an appointment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointement
