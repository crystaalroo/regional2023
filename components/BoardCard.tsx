import * as React from 'react'
import { Box, SxProps, Theme } from '@mui/material'

interface Props {
  children: React.ReactNode
  barSide: 'left' | 'right' | 'none'
  id?: string
  sx?: SxProps<Theme> | undefined
}

const BoardCard: React.FC<Props> = ({ children, barSide, id, sx }) => {
  return (
    <Box
      id={id}
      sx={{
        width: '100%',
        height: 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexBasis: 0,
          backgroundColor:
            barSide === 'left' ? 'transparent' : 'background.default'
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 12,
          flexBasis: 0,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '70px 0',
          ...sx
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexBasis: 0,
          backgroundColor:
            barSide === 'right' ? 'transparent' : 'background.default'
        }}
      ></Box>
    </Box>
  )
}
export default BoardCard
