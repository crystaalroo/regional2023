import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Box from '@mui/material/Box';
import TopBanner from '../components/TopBanner';

export default function Home() {
  return (
    <Box position={'relative'}>
      <TopBanner />
      <NavBar />
      <Carousel />
      <Footer />
    </Box>
  )
}
