import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import FacebookIcon from '@mui/icons-material/Facebook'

const Social: React.FC = () => {
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
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="body1" component="div" color={'text.secondary'}>
          Unete a nuestro discord
        </Typography>
        <Link key="discord" href="https://discord.gg/icpcmx">
          <Box
            component="img"
            src="/assets/discord.png"
            alt="icpcmx"
            sx={{
              width: { sm: '20%', xs: '100%' },
              marginTop: '2%',
              marginBottom: '5%'
            }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="body1" component="div" color={'text.secondary'}>
          Siguenos en facebook:
        </Typography>
        <IconButton size="large" edge="start" sx={{ mr: 2 }}>
          <FacebookIcon />
        </IconButton>
        <Link key="discord" href="https://discord.gg/icpcmx">
          <Box
            component="img"
            src="/assets/discord.png"
            alt="icpcmx"
            sx={{
              width: { sm: '20%', xs: '100%' },
              marginTop: '2%',
              marginBottom: '5%'
            }}
          />
        </Link>
      </Box>
    </Box>
  )
}
export default Social
