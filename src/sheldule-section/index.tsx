import React from 'react'
import Icons from '../common-component/icons'
import InformationCard from '../common-component/information-card'
import { Box } from '@mantine/core'

const Schedule = () => {
  const scheduleData = [
    {
      icon: Icons.clock,
      title: '24 hour service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: Icons.check,
      title: '8 years of experience',
      description: 'Lorem ipsum dolor sit amet, con sectetur adipiscing elit.',
    },
    {
      icon: Icons.medical,
      title: 'High quality care',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscin.',
    },
  ]
  return (
    <Box className='flex justify-center items-center space-x-5' px={80}>
      {scheduleData.map((val) => (
        <InformationCard
          key={val.title}
          title={val.title}
          description={val.description}
          icon={val.icon}
        />
      ))}
    </Box>
  )
}

export default Schedule
