import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { List, ListItem, SxProps, Theme, Button } from '@mui/material'

export interface Props {
  name: string
  image: string
  benefits: string[]
  hotelLink: string
  dprice: string
  time: string[]
  reservationNumber?: string
  reservationLink?: string
  evento: string
  wid: boolean
  cuadrup: string[]
}

interface Props1 {
  children: React.ReactNode
  sx?: SxProps<Theme> | undefined
}
const Item: React.FC<Props1> = ({ children, sx }) => {
  return (
    <ListItem sx={{ ...sx }}>
      <Typography
        variant="body1"
        component="div"
        color={'text.secondary'}
        width={'100%'}
      >
        {children}
      </Typography>
    </ListItem>
  )
}

const HotelCard: React.FC<Props> = ({
  name,
  image,
  benefits,
  hotelLink,
  dprice,
  time,
  reservationNumber,
  reservationLink,
  wid,
  evento,
  cuadrup
}) => {
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
          width: '100%',
          color: 'text.secondary'
        }}
      >
        <Item>Codigo de reservación: {evento}</Item>
        <Item>
          <Button variant="outlined" href={hotelLink} color="info">
            <Typography sx={{ color: 'text.secondary' }}>Hotel info</Typography>
          </Button>
        </Item>
        <Item>
          <List
            sx={{
              listStyleType: 'disc',
              color: 'text.secondary',
              padding: '3% 0 0 0'
            }}
          >
            <Item key="okd" sx={{ display: 'list-item' }}>
              Habitación Sencilla o Doble: <strong>{dprice} </strong>
            </Item>
          </List>
        </Item>
        <Item>
          <List
            sx={{
              listStyleType: 'disc',
              padding: '3% 0 0 0',
              color: 'text.secondary',
              width: '100%'
            }}
          >
            Incluye:
            {benefits.map(ben => {
              return (
                <Item key={ben} sx={{ display: 'list-item' }}>
                  {ben}
                </Item>
              )
            })}
          </List>
        </Item>
        <Item>
          <List
            sx={{
              listStyleType: 'disc',
              color: 'text.secondary',
              width: '100%',
              padding: '3% 0 0 0'
            }}
          >
            Tiempo de traslado
            {time.map(ti => {
              return (
                <Item key={ti} sx={{ display: 'list-item' }}>
                  {ti}
                </Item>
              )
            })}
          </List>
        </Item>
        {!wid && (
          <Item>
            <List
              sx={{
                listStyleType: 'disc',
                color: 'text.secondary',
                padding: '3% 0 0 0',
                width: '100%'
              }}
            >
              Reservación
              <Item sx={{ display: 'list-item' }}>{reservationNumber}</Item>
            </List>
          </Item>
        )}
      </List>
      {reservationLink !== undefined && (
        <Button variant="outlined" href={reservationLink} color="info">
          <Typography sx={{ color: 'text.secondary' }}>Reserva aquí</Typography>
        </Button>
      )}
    </Box>
  )
}

export default HotelCard
