import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Box from '@mui/material/Box'
import TopBanner from '../components/TopBanner'
import Statistics from '../components/Statistics'
import Host from '../components/Host'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <Carousel />
      <Host />
      <Statistics />
      <Footer />
    </Box>
  )
}

export default Home
