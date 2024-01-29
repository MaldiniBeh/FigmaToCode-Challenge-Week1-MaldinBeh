import React from 'react'
import { Box } from '@mantine/core'
import DescriptionCard from '../common-component/description-card'
import DoctorImage from '../img/doctor.jpg'
import plus from '../img/plus.png'
import Icons from '../common-component/icons'
import Bulbe from '../common-component/bulbe'

const AboutMe = () => {
  return (
    <Box className='flex justify-between'>
      <Box className='relative' px={80}>
        <img
          src={DoctorImage}
          className='h-80   
           object-cover object-center'
          alt='doctor-image'
        />

        <img
          src={plus}
          className='absolute object-cover object-center top-16 left-8 h-8'
          alt='plus'
        />
        <img
          src={plus}
          className='absolute object-cover object-center -top-4 right-44 h-3'
          alt='plus'
        />
        <img
          src={plus}
          className='absolute object-cover object-center bottom-16 right-12 h-8                 '
          alt='plus'
        />
      </Box>
      <Box className='flex flex-col space-y-6' px={20}>
        <Box className='max-w-xl'>
          <DescriptionCard
            name='About me'
            title='A dedicated doctor with the core mission to help'
            description='orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.'
          />
        </Box>
        <Box className='w-60'>
          <Bulbe icon={Icons.whatsapp} title='Book an appointment' width={60} />
        </Box>
      </Box>
    </Box>
  )
}

export default AboutMe
