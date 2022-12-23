import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'
import TextCascadeBoard from '../components/TextCascadeBoard'
import BoardCard from '../components/BoardCard'
import { loremIpsum } from 'lorem-ipsum'
import { Typography } from '@mui/material'
import HostHotel from '../components/HostHotel'
import Guadalajara from '../components/Guadalajara'

function FillText(props: { title: string }): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography align="center" variant="h3" paddingBottom={'35px'}>
        {props.title}
      </Typography>
      <Typography align="justify" variant="body1" color={'text.secondary'}>
        {loremIpsum({
          count: 5,
          units: 'paragraph'
        })}
      </Typography>
    </Box>
  )
}

// ********************************************************************************
const Host: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <TextCascadeBoard
        title="HOST"
        menu={['Universidad Sede', 'Hoteles', 'Guadalajara']}
      >
        <BoardCard barSide="right">
          <FillText title={'Universidad Sede'} />
        </BoardCard>
        <BoardCard barSide="right">
          <HostHotel />
        </BoardCard>
        <BoardCard barSide="right">
          <Guadalajara />
        </BoardCard>
      </TextCascadeBoard>
      <Footer />
    </Box>
  )
}

export default Host
