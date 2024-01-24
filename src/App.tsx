import React from 'react'
import HeaderMenu from './hearder/index'
import FooterLinks from './footer'

const App = () => {
  return (
    <div>
      <HeaderMenu />
      <h1 className='text-3xl font-bold underline bg-red-500'>Hello world!</h1>
      <FooterLinks />
    </div>
  )
}

export default App
