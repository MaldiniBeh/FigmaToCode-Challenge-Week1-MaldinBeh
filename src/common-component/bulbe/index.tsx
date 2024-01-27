import React, { FC } from 'react'
import './bulbe.css'
import Icons from '../icons'

interface IBulbe {
  title: string
  width: string
}
const Bulbe: FC<IBulbe> = (props) => {
  const { title, width } = props
  return (
    <div className={`bulbe-form  w-${width} h-12`}>
      <div className='flex justify-center items-center space-x-1 h-full'>
        {Icons.msgCircle}
        <span className='text-style'>{title}</span>
      </div>
    </div>
  )
}

export default Bulbe
