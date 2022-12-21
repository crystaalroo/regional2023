import * as React from 'react'
import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}

const MainBoard: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        padding: { md: '0 50px', xs: '0 10px' },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          height: 'auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box // left bar
          sx={{
            width: '1%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            borderColor: 'divider',
            borderRight: '1px solid'
          }}
        />
        <Box // right bar
          sx={{
            width: '1%',
            height: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            borderColor: 'divider',
            borderLeft: '1px solid'
          }}
        />
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            // borderColor: 'divider',
            // borderLeft: '1px solid',
            // borderRight: '1px solid'
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
export default MainBoard
