import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import BoardCard from '../components/BoardCard'
import Diamond from '../components/Diamond'
import Bronce from '../components/Bronce'
import { Typography } from '@mui/material'

// ********************************************************************************
const Sponsor: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard
        sx={{ padding: { md: '100px 50px 0 50px', xs: '80px 0 0 0' } }}
      >
        <BoardCard barSide="none" sx={{ padding: '70px 0 0 0' }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
            sx={{
              margin: 'auto 20px 20px 20px',
              display: 'block',
              width: '100%'
            }}
          >
            PATROCINADORES
          </Typography>
        </BoardCard>
        <BoardCard barSide="none">
          <Bronce
            name="Diamante"
            per1="100%"
            per2="100%"
            benefits={[
              'PRESENCIA EN SITIO WEB Y MENCIÓN EN SOCIAL MEDIA',
              'DERECHO A INCLUIR ARTÍCULOS PROMOCIONALES EN KIT DE BIENVENIDA',
              'PLAYERA OFICIAL DEL EVENTO'
            ]}
            staff={['5 ACCESOS PARA STAFF', '2 ACCESOS PARA EJECUTIVOS']}
            image1="assets/huaweid.png"
            link1="https://www.huawei.com/mx/"
            image2="/assets/jetbrains.png"
            link2="https://www.jetbrains.com/"
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name="Oro"
            per="75%"
            benefits={[
              'PRESENCIA EN SITIO WEB Y MENCIÓN EN SOCIAL MEDIA',
              'DERECHO A INCLUIR ARTÍCULOS PROMOCIONALES EN KIT DE BIENVENIDA',
              'PLAYERA OFICIAL DEL EVENTO'
            ]}
            staff={['2 ACCESOS PARA STAFF', '1 ACCESOS PARA EJECUTIVOS']}
            image="/assets/cignuz.png"
            link="https://cignuz.com/"
          />
        </BoardCard>
        {/* <BoardCard barSide="none">
          <Bronce
            name="Plata"
            per="70%"
            benefits={[
              'PRESENCIA EN SITIO WEB Y MENCIÓN EN SOCIAL MEDIA',
              'DERECHO A INCLUIR ARTÍCULOS PROMOCIONALES EN KIT DE BIENVENIDA',
              'PRESENCIA EN VIDEOS EN CEREMONIAS DE APERTURA Y CIERRE',
              'PLAYERA OFICIAL DEL EVENTO'
            ]}
            stand={[
              'TAMAÑO DE STAND: 1 M X 1 M. ESTRUCTURA NO INCLUIDA',
              'SEÑALIZACIÓN DEL ÁREA DE EVENTOS Y ROLL-UPS DE EVENTOS O MURO DE PRENSA',
              'PRESENCIA EN ESCENARIO PRINCIPAL Y BANNERS'
            ]}
            staff={['1 ACCESOS PARA STAFF', '1 ACCESOS PARA EJECUTIVOS']}
            image1="/assets/tecM.png"
            link1="https://www.digitalonus.com/"
            image2="/assets/GDwhite.png"
            link2="https://careers.griddynamics.com"
          />
        </BoardCard> */}
        {/* <BoardCard barSide="none">
          <Bronce
            name="Aliados"
            per1="70%"
            per2="50%"
            image1="/assets/edu.png"
            link1="https://www.solucionesenedu.com"
            image2="/assets/hp.png"
            link2="https://www.hp.com/mx-es/home.html"
            benefits={[
              'PRESENCIA EN SITIO WEB Y MENCIÓN EN SOCIAL MEDIA',
              'DERECHO A INCLUIR ARTÍCULOS PROMOCIONALES EN KIT DE BIENVENIDA'
            ]}
            staff={['1 ACCESOS PARA STAFF']}
          />
        </BoardCard> */}
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Sponsor
