import React from 'react'
import { Group, Box, Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import classes from './hearder.module.css'
import DoctorLogo from '../common-component/doctor-logo'
import Bulbe from '../common-component/bulbe'

const HeaderMenu = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)

  return (
    <Box pb={120} px={80}>
      <header className={classes.header}>
        <Group justify='space-between' px='md'>
          <Box pt={30}>
            <DoctorLogo text='Doctor' position='header' />
          </Box>
          <Group h='100%' gap={0} visibleFrom='sm'>
            <a href='#' className={classes.link} style={{ color: '#3A8EF6' }}>
              Home
            </a>

            <a href='#' className={classes.link}>
              About
            </a>

            <a href='#' className={classes.link}>
              Services
            </a>
            <a href='#' className={classes.link}>
              Contact
            </a>
          </Group>

          <Bulbe />

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom='sm'
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        title='Navigation'
        hiddenFrom='sm'
        zIndex={1000000}
      ></Drawer>
    </Box>
  )
}
export default HeaderMenu
