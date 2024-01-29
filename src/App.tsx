import React from 'react'
import HeaderMenu from './hearder/index'
import FooterLinks from './footer'
import { Box } from '@mantine/core'
import LandingPage from './landing-page'
import Schedule from './sheldule-section'
import AboutMe from './aboutme'
import Service from './service'
import CardSection from './card-section'
import Appointement from './appointement'

const App = () => {
  return (
    <Box className='h-screen'>
      <Box className='bg-[#F2F7FF]' px={80}>
        <HeaderMenu />
        <Box pb={80}>
          <LandingPage />
        </Box>
      </Box>
      <Box className='relative -top-8' pb={120}>
        <Schedule />
      </Box>
      <Box px={80} pb={120}>
        <AboutMe />
      </Box>
      <Box px={80} pb={120} className='bg-[#F2F7FF]' pt={100}>
        <Service />
      </Box>
      <Box px={150} pb={100} className='bg-[#F2F7FF]'>
        <CardSection />
      </Box>
      <Box className='grid grid-cols-1 place-items-center' pt={150} pb={100}>
        <Appointement />
      </Box>
      <Box className='bg-[#1678F2] '>
        <FooterLinks />
      </Box>
    </Box>
  )
}

export default App
