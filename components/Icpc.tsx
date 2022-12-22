import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Icpc: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'center'
      }}
    >
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
        INTERNATIONAL COLLEGIATE PROGRAMMING CONTEST
      </Typography>
      <Box
        sx={{
          textAlign: 'justify',
          flexDirection: { md: 'row', xs: 'column' },
          lineHeight: '30px',
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src="/assets/icpcmain.png"
          alt="icpcmx"
          sx={{
            width: { md: '60%', xs: '100%' },
            shapeOutside: `url('/assets/icpcmain.png')`
          }}
        />
        <Typography variant="body1" component="div" color={'text.secondary'}>
          La ICPC organiza el concurso de programacion algoritmica para
          universitarios, en equipos de tres, en representación de su
          universidad, trabajan para resolver la mayoría de los problemas del
          mundo real, fomentando la colaboración, la creatividad, la innovación
          y la capacidad de desempeñarse bajo presión. A través del
          entrenamiento y la competencia, los equipos se desafían entre sí para
          elevar el nivel de lo posible. Sencillamente, es el concurso de
          programación más antiguo, grande y prestigioso del mundo.
        </Typography>
      </Box>
    </Box>
  )
}
export default Icpc
