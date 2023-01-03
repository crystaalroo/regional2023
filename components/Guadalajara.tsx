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
        Hospedaje
      </Typography>

      <Box
        component="img"
        src="/assets/hampton_inn_by_hilton_gdlexpo.jpg"
        alt="icpcmx"
        sx={{
          position: 'flex',
          width: '70%',
          alignSelf: 'center'
        }}
      />

      <Box
        component="img"
        src="/assets/holiday_inn_express_guadalajara_iteso.jpg"
        alt="icpcmx"
        sx={{
          position: 'flex',
          width: '70%',
          alignSelf: 'center'
        }}
      />

      <Box
        component="img"
        src="/assets/iivup.jpg"
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
