import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Sponsors: React.FC = () => {
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
        PATROCINADORES
      </Typography>
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
            display: 'block',
            width: '50%'
          }}
        >
          ORO
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component="img"
            sx={{
              width: '100%',
              height: '150px',
              padding: { sm: '0 12%', xs: '0 20%' },
              objectFit: 'contain',
              display: 'flex'
            }}
            src="/assets/icpcmx.png"
            alt="icpcmx"
          />
        </Box>
      </Box>
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
            display: 'block',
            width: '50%'
          }}
        >
          PLATA
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component="img"
            sx={{
              width: '90%',
              height: '150px',
              padding: { sm: '0 12%', xs: '0 20%' },
              objectFit: 'contain',
              display: 'flex'
            }}
            src="/assets/icpcmx.png"
            alt="icpcmx"
          />
        </Box>
      </Box>
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
            display: 'block',
            width: '50%'
          }}
        >
          BRONCE
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component="img"
            sx={{
              width: '80%',
              height: '150px',
              padding: { sm: '0 12%', xs: '0 20%' },
              objectFit: 'contain',
              display: 'flex'
            }}
            src="/assets/icpcmx.png"
            alt="icpcmx"
          />
        </Box>
      </Box>
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
            display: 'block',
            width: '50%'
          }}
        >
          ALIADOS
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component="img"
            sx={{
              width: '70%',
              height: '150px',
              padding: { sm: '0 12%', xs: '0 20%' },
              objectFit: 'contain',
              display: 'flex'
            }}
            src="/assets/icpcmx.png"
            alt="icpcmx"
          />
        </Box>
      </Box>
    </Box>
  )
}
export default Sponsors
