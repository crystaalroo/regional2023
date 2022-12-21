import Box from '@mui/material/Box'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'

// ********************************************************************************
const Participants: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <Footer />
    </Box>
  )
}

export default Participants
