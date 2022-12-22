import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Intro: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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
        ACERCA DEL REGIONAL ICPC MEXICO 2022
      </Typography>
      <Box
        sx={{
          textAlign: 'justify',
          flexDirection: { sm: 'row', xs: 'column' },
          lineHeight: '30px'
        }}
      >
        <Box
          component="img"
          src="https://i.imgur.com/juxhIKm.png"
          alt="icpcmx"
          sx={{
            width: { sm: '60%', xs: '100%' },
            // height: '250px',
            shapeMargin: '1rem',
            shapeOutside: `url('https://i.imgur.com/juxhIKm.png')`,
            clipPath: `url('https://i.imgur.com/juxhIKm.png')`,
            float: { sm: 'right', xs: 'none' }
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
export default Intro
