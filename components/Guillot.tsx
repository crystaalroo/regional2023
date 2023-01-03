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
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1%',
        borderColor: 'divider',
        paddingBottom: '5%',
        borderBottom: '1px solid'
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
          width: '100%',
          padding: '5% 0%'
        }}
      >
        CONTACTO
      </Typography>
      <Box
        component="img"
        src="/assets/carlos.jpg"
        alt="icpcmx"
        sx={{
          width: { xs: '35%', sm: '20%', md: '15%' },
          height: 'auto',
          borderRadius: '20%'
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
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
        <Typography variant="body1" component="div" color={'text.secondary'}>
          <EmailIcon />
          carlosf@iteso.mx
        </Typography>
        <Typography variant="body1" component="div" color={'text.secondary'}>
          <EmailIcon />
          guillot@icpcmexico.org
        </Typography>
      </Box>
    </Box>
  )
}
export default Guillot
