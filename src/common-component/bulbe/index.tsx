import React, { FC } from 'react'
import './bulbe.css'

interface IBulbe {
  title: string
  width: number
  icon: React.ReactNode
}
const Bulbe: FC<IBulbe> = (props) => {
  const { title, width, icon } = props

  return (
    <div className={`bulbe-form  w-${width} h-12`}>
      <div className='flex justify-center items-center space-x-1 h-full'>
        {icon}
        <span className='text-style'>{title}</span>
      </div>
    </div>
  )
}

export default Bulbe
