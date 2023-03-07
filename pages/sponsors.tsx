import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import BoardCard from '../components/BoardCard'
import Benefits from '../components/Benefits'
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
          <Diamond
            name="Diamante"
            per="100%"
            image="assets/diamondhh.png"
            link="https://www.huawei.com/mx/"
            benefits={[
              'Sitio web regional presencia de logo en encabezado y cuando corresponda, enlace activo al sitio web del patrocinador',
              'Logotipo en portada del conjunto de problemas',
              'Logotipos en pancartas de eventos',
              'Participación en ceremonia de inauguración, clausura y entrega de premios',
              'Videos promocionales de patrocinadores durante la apertura y el cierre',
              'Presentación de 30 minutos.',
              'Representantes del patrocinador en el escenario para la ceremonia de clausura, foto con los ganadores',
              'Hasta 2 mensajes en redes sociales aprobados por el patrocinador, incluidas oportunidades de trabajo y pasantías',
              'Mesa preferencial en espacio de patrocinador'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Bronce
            name="Oro"
            per="90%"
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
            image1="/assets/cignuzb.png"
            link1="https://cignuz.com/"
            image2="/assets/oracle.png"
            link2="https://www.oracle.com/mx/"
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Bronce
            name="Bronce"
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
            image2="/assets/grids.png"
            link2="https://careers.griddynamics.com"
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Benefits
            name="Aliados"
            per="60%"
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
