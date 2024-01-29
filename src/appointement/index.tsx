import React from 'react'
import './index.css'
import Bulbe from '../common-component/bulbe'
import Icons from '../common-component/icons'

const Appointement = () => {
  return (
    <div className='cardStyle space-y-8 text-center p-16'>
      <div className='title'>
        Schedule a virtual or presential appointment today
      </div>
      <div className='content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas
        viverra turpis habitant eu sociis fermentum felis.
      </div>
      <div className='grid grid-cols-1 place-items-center'>
        <Bulbe icon={Icons.whatsapp} title='Book an Appoinment' width={60} />
      </div>
    </div>
  )
}

export default Appointement
