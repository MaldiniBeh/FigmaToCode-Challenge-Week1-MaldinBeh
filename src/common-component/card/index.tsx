import React, { FC } from 'react'
import Bulbe from '../bulbe'
import Icons from '../icons'
import './index.css'
interface ICardComponent {
  img: string
  description: string
  title: string
}
const CardComponent: FC<ICardComponent> = (props) => {
  const { img, description, title } = props
  return (
    <div className='max-w-xs bg-white border border-gray-200 rounded-xl p-5'>
      <span className='grid grid-cols-1 place-items-center'>
        <img className='h-48 w-48' src={img} alt={`img-${title}`} />
      </span>
      <div className='pt-4 space-y-2'>
        <span className='titleCard'>{title}</span>
        <p className='description'>{description}</p>
        <Bulbe icon={Icons.whatsapp} title='Book an Appoinment' width={60} />
      </div>
    </div>
  )
}
export default CardComponent
