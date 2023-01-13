import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'
import BoardCard from '../components/BoardCard'
import TextCascadeBoard from '../components/TextCascadeBoard'
import HotelCard from '../components/HotelCard'

// ********************************************************************************

const Hotel: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <TextCascadeBoard
        title="HOTELES"
        menu={[
          'Holiday Inn Express ITESO',
          'Hampton by Hilton Guadalajara Expo',
          'livUp'
        ]}
      >
        <BoardCard barSide="right">
          <HotelCard
            name={'Holiday Inn Express ITESO'}
            image={'/assets/holiday_inn_express_guadalajara_iteso.jpg'}
            benefits={[
              'Gimnasio',
              'Estacionamiento',
              'Llamadas locales y 01 800 nacionales',
              'Internet inalámbrico y de alta velocidad en la habitación y áreas del hotel.',
              'Estacionamiento en cortesía para huéspedes',
              'Kit de café y té en cortesía en la habitación por noche.',
              '1 Botella con agua en cortesía en la habitación por noche'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="left">
          <HotelCard
            name={'Hampton by Hilton Guadalajara Expo'}
            image={'/assets/hampton_inn_by_hilton_gdlexpo.jpg'}
            benefits={[
              'Gimnasio',
              'Estacionamiento techado',
              'Llamadas locales y 01 800 nacionales',
              'Internet inalámbrico y de alta velocidad en la habitación y áreas del hotel.',
              'Estacionamiento en cortesía para huéspedes',
              'Kit de café y té en cortesía en la habitación por noche.',
              '1 Botella con agua en cortesía en la habitación por noche'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="right">
          <HotelCard
            name={'livUp'}
            image={'/assets/iivup.jpg'}
            benefits={[
              'Cocina completa y equipada',
              'Gimnasio',
              'Estacionamiento techado',
              'Área de juegos',
              'Roof garden',
              'Cancha de usos múltiples',
              'Área de estudio',
              'Recepción y resguardo de paquetes'
            ]}
          />
        </BoardCard>
      </TextCascadeBoard>
      <Footer />
    </Box>
  )
}

export default Hotel
