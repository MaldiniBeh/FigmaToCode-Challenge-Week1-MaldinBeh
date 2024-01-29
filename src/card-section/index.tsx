import React from 'react'
import Adn from '../img/adn.png'
import Abulance from '../img/ambulance copia.png'
import Cinecias from '../img/Ciencias.png'
import Semilog from '../img/Semiolog.png'
import Healthy from '../img/healthy.png'
import Icon1 from '../img/icon1.png'
import CardComponent from '../common-component/card'

const CardSection = () => {
  const cardData = [
    {
      img: Semilog,
      title: 'General',
      description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc',
    },
    {
      img: Icon1,
      title: 'Pediatrics',
      description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc',
    },
    {
      img: Adn,
      title: 'Nutritional',
      description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc',
    },
    {
      img: Healthy,
      title: 'Cardiology',
      description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc',
    },
    {
      img: Abulance,
      title: 'Orthopedics',
      description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc',
    },
    {
      img: Cinecias,
      title: 'Ophthalmology',
      description:
        'Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc',
    },
  ]
  return (
    <div className='grid grid-cols-3 place-items-center gap-y-8'>
      {cardData.map((val) => (
        <CardComponent
          key={val.title}
          description='Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc'
          img={val.img}
          title={val.title}
        />
      ))}
    </div>
  )
}

export default CardSection
