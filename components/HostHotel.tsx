import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const HostHotel: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography align="center" variant="h3" paddingBottom={'35px'}>
        Hoteles sede
      </Typography>
      <Typography align="justify" variant="body1" color={'text.secondary'}>
        PROXIMAMENTE como parte de las facilidades propuestas por la
        organizacion se proporcionaran las direcciones y contacto de los hoteles
        sede con el fin de de facilitar la ubicacion y translado de los
        asistentes.
      </Typography>
    </Box>
  )
}
export default HostHotel
