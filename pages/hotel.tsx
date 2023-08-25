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
          'Riu Plaza Guadalajara',
          'Holiday Inn Guadalajara Select',
          'Wyndham Garden, Guadalajara Acueducto'
        ]}
        intro="El grupo esta en formato de SEGMENTO ABIERTO. Esto quiere decir que
        no existen habitaciones prereservadas para el evento. Les
        recomendamos que inicien la reservación a la brevedad"
      >
        <BoardCard barSide="right">
          <HotelCard
            name={'Riu Plaza Guadalajara'}
            image={'/assets/riuplaza.jpg'}
            benefits={['Desayuno buffet.', 'Impuestos']}
            hotelLink="https://www.riu.com/es/hotel/mexico/guadalajara/hotel-riu-plaza-guadalajara/"
            dprice="1,520.00 MXN"
            time={[
              'ITESM GDL: Coche, 30 - 40 MIN minutos.',
              'Aeropuerto Guadalajara: Coche, 35 - 45 minutos.'
            ]}
            reservationNumber="Llamar al 33 3880 7500 con el código de reservación"
            wid={false}
            evento={'ITESM 053 06778'}
            cuadrup={['Habitación sencilla o doble']}
          />
        </BoardCard>
        <BoardCard barSide="left">
          <HotelCard
            name={'Holiday Inn Guadalajara Select'}
            image={'/assets/holiday.jpg'}
            benefits={['Desayuno americano buffet.', 'Impuestos']}
            hotelLink={'http://www.hisguadalajara.com.mx/'}
            dprice="1,250.00 MXN"
            time={[
              'ITESM GDL: Coche, 30 - 40 MIN minutos.',
              'Aeropuerto Guadalajara: Coche, 40 - 50 minutos.'
            ]}
            reservationNumber="Llamar al 33 3122 2020 con el código de reservación"
            evento="TEC DE MONTERREY ICPC 2023"
            wid={false}
            cuadrup={['Habitación sencilla o doble']}
          />
        </BoardCard>
        <BoardCard barSide="right">
          <HotelCard
            name={'Wyndham Garden, Guadalajara Acueducto'}
            image={'/assets/wyd.jpeg'}
            benefits={['Desayuno americano', 'Impuestos']}
            hotelLink={
              'https://www.wyndhamhotels.com/es-xl/wyndham-garden/guadalajara-mexico/wyndham-garden-guadalajara-andares/overview?cid=PS:hxnqtef1c9vfkgl&gad=1'
            }
            dprice="$1,452.00 MXN"
            time={[
              'ITESM GDL: Coche, 20 - 25 MIN minutos.',
              'Aeropuerto Guadalajara: Coche, 60 - 70  minutos.'
            ]}
            reservationNumber="Llamar al 33 3839 4280 ext 803 con el código de reservación.  O enviar correo: gabriela.mora@aimbridge.com.
            Importante reservar en los siguientes horarios: lunes a viernes de 09:00 a 14:00 y 16:00 a 18:00 hrs. | sábados 09:00 a 
            14:00 hrs"
            evento="ICPC 2023"
            wid={false}
            cuadrup={['Habitación sencilla o doble']}
          />
        </BoardCard>
      </TextCascadeBoard>
      <Footer />
    </Box>
  )
}

export default Hotel
