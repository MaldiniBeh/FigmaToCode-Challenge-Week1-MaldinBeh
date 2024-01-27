import React from 'react'
import HeaderMenu from './hearder/index'
import FooterLinks from './footer'
import { Box } from '@mantine/core'
import LandingPage from './landing-page'
import InformationCard from './common-component/information-card'
import Icons from './common-component/icons'

const App = () => {
  return (
    <Box className='h-screen'>
      <Box className='bg-[#F2F7FF]' px={80}>
        <HeaderMenu />
        <LandingPage />
        <InformationCard
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          title='24 hour service'
          icon={Icons.clock}
        />
      </Box>
      <Box className='bg-[#1678F2] '>
        <FooterLinks />
      </Box>
    </Box>
  )
}

export default App
