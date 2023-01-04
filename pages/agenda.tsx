import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import { AgendaTable17, AgendaTable18 } from '../components/Agenda'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import BoardCard from '../components/BoardCard'
import { Typography } from '@mui/material'

// ********************************************************************************
const Agenda: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard
        sx={{ padding: { md: '100px 50px 0 50px', xs: '80px 0 0 0' } }}
      >
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            Viernes: 17 de Marzo de 2023
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTable17 />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            Sabado: 18 de Marzo de 2023
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTable18 />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Agenda
