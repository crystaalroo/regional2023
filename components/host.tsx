import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Host: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'white'}
            sx={{
              margin: 'auto 20px 20px 20px',
              display: 'block'
            }}
          >
            Organizadores
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: '100%',
              height: '200pt',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              sx={{
                width: '200pt',
                objectFit: 'cover',
                display: 'flex'
              }}
              src="/assets/icpcmx.png"
              alt="icpcmx"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: '100%',
              height: '200pt',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              sx={{
                width: '200pt',
                objectFit: 'cover',
                display: 'flex'
              }}
              src="/assets/iteso-vertical.png"
              alt="icpcmx"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Host
