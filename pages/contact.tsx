import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import Guillot from '../components/Guillot'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import Social from '../components/Social'

// ********************************************************************************
const Contact: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard>
        <Guillot />
        <Social />
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Contact
