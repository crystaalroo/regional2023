import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email'

const Guillot: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <Box
        component="img"
        src="/assets/carlos.jpg"
        alt="icpcmx"
        sx={{
          width: { sm: '20%', xs: '100%' },
          margin: { sm: '5% 5% 5% 25%', xs: '10% 20% 10% 20%' },
          borderRadius: '20%'
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: { sm: '40%', xs: '100%' },
          alignItems: 'left',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="body1" component="div" color={'text.secondary'}>
          Director ICPC Mexico
        </Typography>
        <Typography variant="body1" component="div" color={'text.secondary'}>
          Mtro. Carlos Alberto Fernández Guillot
        </Typography>
        <Box
          sx={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            display: 'flex',
            gap: '1%'
          }}
        >
          <EmailIcon />
          <Typography variant="body1" component="div" color={'text.secondary'}>
            carlosf@iteso.mx
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default Guillot
