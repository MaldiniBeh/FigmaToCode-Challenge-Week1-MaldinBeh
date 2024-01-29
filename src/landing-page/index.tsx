import React from 'react'
import DescriptionCard from '../common-component/description-card'
import DoctorImage from '../img/dc.png'
import plus from '../img/plus.png'
import { Box } from '@mantine/core'
import Icons from '../common-component/icons'
import Bulbe from '../common-component/bulbe'

const LandingPage = () => {
  return (
    <Box className='flex justify-between'>
      <Box className='flex flex-col space-y-6' px={90}>
        <Box className='max-w-lg'>
          <DescriptionCard
            name='Dr. Matthew Anderson'
            title='A dedicated doctor you can trust'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget
        vel, nunc nulla feugiat. Metus ut.'
          />
        </Box>
        <Box className='w-60'>
          <Bulbe
            icon={Icons.msgCircle}
            title='Book an appointment'
            width={60}
          />
        </Box>
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
