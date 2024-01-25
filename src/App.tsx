import React from 'react'
import HeaderMenu from './hearder/index'
import FooterLinks from './footer'
import { Box } from '@mantine/core'

const App = () => {
  return (
    <Box className='h-screen'>
      <div className='bg-[#F2F7FF]'>
        <HeaderMenu />
      </div>

      <div className='bg-[#1678F2]'>
        <FooterLinks />
      </div>
    </Box>
  )
}

export default App
