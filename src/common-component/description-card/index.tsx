import React, { FC } from 'react'
import './index.css'

interface IDescriptionCard {
  name: string
  title: string
  description: string
}
const DescriptionCard: FC<IDescriptionCard> = (props) => {
  const { name, title, description } = props
  return (
    <div className='flex flex-col space-y-3'>
      <span className='name'>{name} </span>
      <span className='title'>{title} </span>
      <span className='description'>{description}</span>
    </div>
  )
}

export default DescriptionCard
