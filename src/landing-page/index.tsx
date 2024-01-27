import React from 'react'
import DescriptionCard from '../common-component/description-card'
import DoctorImage from '../img/dc.png'
import plus from '../img/plus.png'
import { Box } from '@mantine/core'

const LandingPage = () => {
  return (
    <Box className='flex justify-between' px={10}>
      <Box className='w-1/2' px={80}>
        <DescriptionCard />
      </Box>
      <div className='relative'>
        <div className='rounded-full h-80 w-80 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA]'>
          <img
            src={DoctorImage}
            className='h-80  rounded-full 
           object-cover object-center'
            alt='doctor-image'
          />
        </div>
        <img
          src={plus}
          className='absolute object-cover object-center top-1'
          alt='plus'
        />
        <img
          src={plus}
          className='absolute object-cover object-center top-36 -left-16 h-8                 '
          alt='plus'
        />
        <img
          src={plus}
          className='absolute object-cover object-center bottom-1 right-12 h-5                 '
          alt='plus'
        />
        <img
          src={plus}
          className='absolute object-cover object-center top-16 right-2 h-3                 '
          alt='plus'
        />
      </div>
    </Box>
  )
}

export default LandingPage
