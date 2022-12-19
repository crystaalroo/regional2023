import NavBar from '../components/navbar';
import Footer from '../components/footer';
import SwipeableTextMobileStepper from '../components/carousel';
import Box from '@mui/material/Box';
import Logo from '../components/logo'

export default function Home() {
  return (
    <Box position={'relative'}>
      <NavBar />
      <SwipeableTextMobileStepper />
      <Footer />
    </Box>
  )
}
