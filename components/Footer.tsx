import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        height: { sm: '200px', xs: 'auto' },
        alignItems: 'center',
        border: '2px',
        borderColor: 'white',
        borderTopStyle: 'solid',
        backgroundColor: 'secondary.main'
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: '1280px',
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          justifyContent: 'space-between'
        }}
      >
        <Box
          component="img"
          sx={{
            width: '150pt',
            objectFit: 'cover',
            padding: { sm: '0 0 0 50px', xs: '25px 0' }
          }}
          src="/assets/mexicobn.png"
          alt="icpcmx"
        />
        <Box
          component="img"
          sx={{
            width: '180pt',
            objectFit: 'cover',
            padding: { sm: '0 50px 0 0', xs: '25px 0' }
          }}
          src="/assets/itesologo.png"
          alt="iteso"
        />
      </Toolbar>
    </AppBar>
  )
}
export default Footer
