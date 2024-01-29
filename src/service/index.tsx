import { Box } from '@mantine/core'
import React from 'react'
import ServiceImage from '../img/load.png'
import DescriptionCard from '../common-component/description-card'
import Bulbe from '../common-component/bulbe'
import Icons from '../common-component/icons'

const Service = () => {
  return (
    <Box className='flex justify-between'>
      <Box className='flex flex-col space-y-6' px={20}>
        <Box className='max-w-2xl' px={70}>
          <DescriptionCard
            name='Services'
            title='Experienced in multiple medical practices'
            description='orem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas viverra turpis habitant eu sociis fermentum felis.'
          />
        </Box>
        <Box className='w-60' px={70}>
          <Bulbe icon={Icons.whatsapp} title='Book an appointment' width={60} />
        </Box>
      </Box>
      <Box px={10}>
        <img
          src={ServiceImage}
          className='h-96 
           object-cover object-center'
          alt='doctor-image'
        />
      </Box>
    </Box>
  )
}

export default Service
