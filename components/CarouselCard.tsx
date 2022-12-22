import { Box, Typography } from '@mui/material'

interface Props {
  imgPath: string | undefined
  label: string | undefined
}

const CarouselCard: React.FC<Props> = ({ imgPath, label }) => {
  const mdPad = '50px'
  const mdMxW =
    (parseInt('1280px', 10) + parseInt(mdPad, 10) * 2).toString() + 'px'
  const xsPad = '10px'
  const xsMxW =
    (parseInt('1280px', 10) + parseInt(xsPad, 10) * 2).toString() + 'px'
  return (
    <Box
      sx={{
        height: { xs: '350px', sm: '550px' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
      <Box
        sx={{
          width: '100%',
          maxWidth: { md: mdMxW, xs: xsMxW },
          padding: { md: `0 ${mdPad}`, xs: `0 ${xsPad}` },
          height: '100%',
          position: 'absolute'
        }}
      >
        <Typography
          gutterBottom
          variant="h1"
          component="div"
          align="left"
          color={'primary.contrastText'}
          sx={{
            position: 'absolute',
            bottom: 0,
            borderStyle: 'solid',
            borderColor: 'divider',
            borderWidth: '5px',
            padding: '10px',
            background: 'rgb(128, 128, 128, 0.5)'
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  )
}
export default CarouselCard
