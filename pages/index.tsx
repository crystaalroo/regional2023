import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Box from '@mui/material/Box'
import TopBanner from '../components/TopBanner'
import Statistics from '../components/Statistics'
import Host from '../components/Host'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import BoardCard from '../components/BoardCard'
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
        <BoardCard barSide="left">
          <Intro />
        </BoardCard>
        <BoardCard barSide="right">
          <Host />
        </BoardCard>
        <BoardCard barSide="left">
          <Statistics />
        </BoardCard>
        <BoardCard barSide="right">
          <Sponsors />
        </BoardCard>
        <BoardCard barSide="left">
          <Icpc />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Home
