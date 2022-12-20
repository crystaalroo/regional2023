import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Statistics: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        justifyContent: 'center',
        display: 'flex'
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 8 }}
        sx={{ maxWidth: '1000px' }}
      >
        {itemData.map(item => (
          <Grid item xs={2} sm={4} md={4} key={item.title}>
            <Box
              component="img"
              sx={{
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
                height: '100%',
                objectFit: 'cover',
                overflow: 'hidden',
                zIndex: 1
              }}
              src={item.img}
              alt={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const itemData = [
  {
    img: '/assets/site.jpg',
    title: 'Camera',
    stats: 'X universidades'
  },
  {
    img: '/assets/contest.jpg',
    title: 'Coffee',
    stats: 'X equipos'
  },
  {
    img: '/assets/girls.jpg',
    title: 'Hats',
    stats: 'X mujeres'
  },
  {
    img: '/assets/cucei.jpg',
    title: 'Honey',
    stats: 'X mujeres'
  }
]

export default Statistics
