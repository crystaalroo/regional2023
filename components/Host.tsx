import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Host: React.FC = () => {
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
        color={'white'}
        sx={{
          margin: 'auto 20px 20px 20px',
          display: 'block',
          width: '100%'
        }}
      >
        HOST Y ORGANIZADORES
      </Typography>
      <Box
        component="img"
        sx={{
          width: { sm: '50%', xs: '100%' },
          height: '150px',
          padding: { sm: '0 12%', xs: '0 20%' },
          objectFit: 'contain',
          display: 'flex'
        }}
        src="/assets/icpcmx.png"
        alt="icpcmx"
      />
      <Box
        component="img"
        sx={{
          width: { sm: '50%', xs: '100%' },
          height: '150px',
          padding: '0 12.5%',
          objectFit: 'contain',
          display: 'flex'
        }}
        src="/assets/iteso-vertical.png"
        alt="icpcmx"
      />
    </Box>
  )
}
export default Host
