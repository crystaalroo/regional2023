import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Box from '@mui/material/Box'
import TopBanner from '../components/TopBanner'
import Statistics from '../components/Statistics'
import Host from '../components/Host'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import MainBoardCard from '../components/MainBoardCard'
import Sponsors from '../components/Sponsors'
import Intro from '../components/Intro'
import Icpc from '../components/Icpc'
const Home: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <Carousel />
      <MainBoard>
        <MainBoardCard barSide="left">
          <Intro />
        </MainBoardCard>
        <MainBoardCard barSide="right">
          <Host />
        </MainBoardCard>
        <MainBoardCard barSide="left">
          <Statistics />
        </MainBoardCard>
        <MainBoardCard barSide="right">
          <Sponsors />
        </MainBoardCard>
        <MainBoardCard barSide="left">
          <Icpc />
        </MainBoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Home
