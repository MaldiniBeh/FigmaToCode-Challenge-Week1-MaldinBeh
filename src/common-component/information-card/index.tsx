import React, { FC } from 'react'
import './index.css'

interface IInformationCard {
  title: string
  description: string
  icon: React.ReactNode
}
const InformationCard: FC<IInformationCard> = (props) => {
  const { title, description, icon } = props
  return (
    <div className='infoCard w-64'>
      {icon}
      <div className='infoLayout'>
        <span className='infoTitle'>{title}</span>
        <span className='infoDescription'>{description} </span>
      </div>
    </div>
  )
}

export default InformationCard
