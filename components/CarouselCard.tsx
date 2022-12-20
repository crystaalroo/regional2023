import { Box, Typography } from '@mui/material'

interface Props {
  imgPath: string | undefined
  label: string | undefined
}

const CarouselCard: React.FC<Props> = ({ imgPath, label }) => {
  return (
    <Box
      sx={{
        height: { xs: '350px', sm: '550px' },
        overflow: 'hidden'
      }}
    >
      <Box
        component="img"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          overflow: 'hidden'
        }}
        src={imgPath}
        alt={label}
      />
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        align="left"
        color={'white'}
        sx={{
          position: 'absolute',
          bottom: 0,
          borderStyle: 'solid',
          borderColor: 'white',
          border: 5,
          margin: 'auto 20px 20px 20px',
          background: 'rgb(0, 0, 0, 0.4)',
          display: { xs: 'none', sm: 'block' }
        }}
      >
        {label}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        align="left"
        color={'white'}
        sx={{
          position: 'absolute',
          bottom: 0,
          borderStyle: 'solid',
          borderColor: 'white',
          border: 5,
          margin: 'auto 20px 20px 20px',
          background: 'rgb(0, 0, 0, 0.4)',
          display: { xs: 'block', sm: 'none' }
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}
export default CarouselCard
