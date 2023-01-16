import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { List, ListItem, SxProps, Theme } from '@mui/material'

export interface Props {
  name: string
  image: string
  benefits: string[]
}

interface Props1 {
  children: React.ReactNode
  sx?: SxProps<Theme> | undefined
}
const Item: React.FC<Props1> = ({ children, sx }) => {
  return (
    <ListItem sx={{ ...sx }}>
      <Typography variant="body1" component="div" color={'text.secondary'}>
        {children}
      </Typography>
    </ListItem>
  )
}

const HotelCard: React.FC<Props> = ({ name, image, benefits }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
      }}
    >
      <Typography
        variant="h3"
        width={'100%'}
        align="center"
        paddingBottom={'35px'}
        color={'primary.contrastText'}
      >
        {name}
      </Typography>
      <Box
        sx={{
          textAlign: 'justify',
          flexDirection: 'column',
          lineHeight: '20px',
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src={image}
          alt="icpcmx"
          sx={{
            display: 'flex',
            width: '80%'
          }}
        />
      </Box>
      <List
        sx={{
          listStyleType: 'disc',
          padding: '10% 0 0 0',
          color: 'text.secondary'
        }}
      >
        {benefits.map(ben => {
          return (
            <Item key={ben} sx={{ display: 'list-item' }}>
              {ben}
            </Item>
          )
        })}
      </List>
    </Box>
  )
}

export default HotelCard
