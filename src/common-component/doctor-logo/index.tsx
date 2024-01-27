import React, { FC } from 'react'
import './doctor-logo.css'
import Icons from '../icons'

interface IDoctorLogo {
  text: string
  position: 'header' | 'footer'
}
const DoctorLogo: FC<IDoctorLogo> = (props) => {
  const { text, position } = props
  return (
    <div className='flex'>
      <div className='relative -top-7 left-[8.8rem]'>
        <span className='plus'>
          {position === 'header' ? Icons.plusColor : Icons.plusWithoutColor}
        </span>
      </div>
      <span
        className={`doctorTypo
       ${position === 'footer' ? 'header' : 'footer'}`}
      >
        {text}
      </span>
    </div>
  )
}

export default DoctorLogo
