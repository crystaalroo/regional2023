import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import BoardCard from '../components/BoardCard'
import Benefits from '../components/Benefits'
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
          <Benefits
            name="Oro"
            per="100%"
            image="/assets/cignuzb.png"
            link="https://cignuz.com/"
            benefits={[
              'PRESENCIA EN SITIO WEB Y MENCIÓN EN SOCIAL MEDIA',
              'DERECHO A INCLUIR ARTÍCULOS PROMOCIONALES EN KIT DE BIENVENIDA',
              'PRESENCIA EN VIDEOS EN CEREMONIAS DE APERTURA Y CIERRE',
              'PLAYERA OFICIAL DEL EVENTO',
              'PARTICIPACIÓN EN CEREMONIA DE PREMIACIÓN, CON ENTREGA DE PREMIO AL SEGUNDO LUGAR DEL CONCURSO REGIONAL',
              'CONFERENCIA DE PATROCINADOR. TIEMPO: 30 MIN'
            ]}
            stand={[
              'TAMAÑO DE STAND: 3 M X 3 M. ESTRUCTURA NO INCLUIDA',
              'SEÑALIZACIÓN DEL ÁREA DE EVENTOS Y ROLL-UPS DE EVENTOS O MURO DE PRENSA',
              'PRESENCIA EN ESCENARIO PRINCIPAL Y BANNERS'
            ]}
            staff={['3 ACCESOS PARA STAFF', '2 ACCESOS PARA EJECUTIVOS']}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Benefits
            name="Plata"
            per="88%"
            image="/assets/icpcmx.png"
            link="https://iteso.mx/"
            benefits={[
              'PRESENCIA EN SITIO WEB Y MENCIÓN EN SOCIAL MEDIA',
              'DERECHO A INCLUIR ARTÍCULOS PROMOCIONALES EN KIT DE BIENVENIDA',
              'PRESENCIA EN VIDEOS EN CEREMONIAS DE APERTURA Y CIERRE',
              'PLAYERA OFICIAL DEL EVENTO',
              'PARTICIPACIÓN EN CEREMONIA DE PREMIACIÓN, CON ENTREGA DE PREMIO A TERCER LUGAR DEL CONCURSO REGIONAL',
              'CONFERENCIA DE PATROCINADOR. TIEMPO: 15 MIN'
            ]}
            stand={[
              'TAMAÑO DE STAND: 2 M X 2 M. ESTRUCTURA NO INCLUIDA',
              'SEÑALIZACIÓN DEL ÁREA DE EVENTOS Y ROLL-UPS DE EVENTOS O MURO DE PRENSA',
              'PRESENCIA EN ESCENARIO PRINCIPAL Y BANNERS'
            ]}
            staff={['2 ACCESOS PARA STAFF', '1 ACCESOS PARA EJECUTIVOS']}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Benefits
            name="Bronce"
            per="76%"
            image="/assets/tecM.png"
            link="https://www.digitalonus.com/"
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
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Benefits
            name="Aliados"
            per="64%"
            image="/assets/edu.png"
            link="https://www.solucionesenedu.com"
            benefits={[
              'PRESENCIA EN SITIO WEB Y MENCIÓN EN SOCIAL MEDIA',
              'DERECHO A INCLUIR ARTÍCULOS PROMOCIONALES EN KIT DE BIENVENIDA'
            ]}
            staff={['1 ACCESOS PARA STAFF']}
          />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Sponsor
