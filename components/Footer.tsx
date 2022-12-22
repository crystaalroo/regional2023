import * as React from 'react'
import Box from '@mui/material/Box'

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        height: { sm: '200px', xs: 'auto' },
        alignItems: 'center',
        borderWidth: '2px',
        borderColor: 'divider',
        borderTopStyle: 'solid',
        backgroundColor: 'secondary.main',
        position: 'static',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: '1280px',
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          justifyContent: 'space-between',
          alignItems: 'center'
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
      </Box>
    </Box>
  )
}
export default Footer
