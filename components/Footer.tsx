import * as React from 'react'
import Box from '@mui/material/Box'
import { Link as ExternalLink } from '@mui/material'
import Link from 'next/link'

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
        <Link key="homepage" href="/">
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
        </Link>
        <ExternalLink
          key="Sede"
          href="https://tec.mx/es/guadalajara"
          target={'blank'}
        >
          <Box
            component="img"
            sx={{
              width: '110pt',
              objectFit: 'cover',
              padding: { sm: '0 50px 0 0', xs: '25px 0' }
            }}
            src="/assets/tecblanco.png"
            alt="iteso"
          />
        </ExternalLink>
      </Box>
    </Box>
  )
}
export default Footer
