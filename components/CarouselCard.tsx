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
        variant="h1"
        component="div"
        align="left"
        color={'white'}
        sx={{
          position: 'absolute',
          bottom: 0,
          borderStyle: 'solid',
          borderColor: 'divider',
          borderWidth: '5px',
          margin: 'auto 20px 20px 20px',
          padding: '10px',
          background: 'rgb(128, 128, 128, 0.5)'
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}
export default CarouselCard
