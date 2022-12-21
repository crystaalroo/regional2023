import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Carousel from '../components/carousel'
import Box from '@mui/material/Box'
import TopBanner from '../components/TopBanner'
import Statistics from '../components/statistics'
import Host from '../components/host'
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