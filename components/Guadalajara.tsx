import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Guadalajara: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <Typography align="center" variant="h3" paddingBottom={'35px'}>
        Guadalajara
      </Typography>
      <Typography align="justify" variant="body1" color={'text.secondary'}>
        El Área Metropolitana de Guadalajara (AMG) se integra con los municipios
        de San Pedro Tlaquepaque, Tonalá, Zapopan, Tlajomulco de Zúñiga, El
        Salto y el citado Guadalajara que en conjunto comparten una constante
        conurbación, el AMG es la segunda más poblada de la República Mexicana.
        Reconocida por ser el lugar de nacimiento de algunos de los símbolos más
        importantes y distintivos del país en el resto del mundo: el mariachi,
        el tequila y la charrería. asistentes.
      </Typography>
      <Box
        component="img"
        src="/assets/catedral.jpg"
        alt="icpcmx"
        sx={{
          position: 'flex',
          width: '70%',
          alignSelf: 'center'
        }}
      />
      <Typography align="justify" variant="body1" color={'text.secondary'}>
        Asimismo, es el centro cultural y comercial del Occidente de México.
        Desde su época de fundación ha sido un punto neurálgico para la zona, es
        por esto que también se le reconoce con el nombre de la Perla de
        Occidente. Debido a la fuerza de su economía y su calidad de vida, esta
        cosmopolita urbe es considerada la segunda más importante de México. Se
        distingue por su auténtica arquitectura colonial, donde cada edificio
        histórico habla a través de sus murales para recordarnos la
        transformación social, política y económica de nuestro país. En
        Tlaquepaque y Tonalá, dos de los más importantes centros artesanos de
        toda la nación, se pueden encontrar una infinidad de piezas decorativas
        y utilitarias cuya característica común es la imaginación y destreza con
        que han sido creadas.
      </Typography>
      <Box
        component="img"
        src="/assets/parian2.jpg"
        alt="icpcmx"
        sx={{
          position: 'flex',
          width: '50%',
          alignSelf: 'center'
        }}
      />
      <Typography align="justify" variant="body1" color={'text.secondary'}>
        Otro de los grandes atractivos de la ciudad es su gran cercania con el
        paisaje agavero y antiguas instalaciones industriales de Tequila que fue
        declarado como Patrimonio de la Humanidad por la UNESCO en 2006 y
        representa un punto de encuentro para turistas y entusiastas del
        tequila.
      </Typography>
      <Box
        component="img"
        src="/assets/tequila.jpg"
        alt="icpcmx"
        sx={{
          position: 'flex',
          width: '70%',
          alignSelf: 'center'
        }}
      />
    </Box>
  )
}
export default Guadalajara
