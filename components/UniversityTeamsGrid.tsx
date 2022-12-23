import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '300px',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.0,
      transition: 'all 0.5s'
    },
    '& .MuiImageMarked-root': {
      opacity: 0
    },
    '& .MuiTypography-root': {
      // border: '4px solid currentColor',
      fontSize: '0rem',
      transition: 'all 0.2s'
    }
  },
  [theme.breakpoints.down('md')]: {
    width: '100% !important', // Overrides inline-style
    height: '200px',
    '&:hover, &.Mui-focusVisible': {
      '& .MuiTypography-root': {
        fontSize: '2rem'
      }
    }
  }
}))

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%'
})

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity')
}))

const ImageMarked = styled('span')(({ theme }) => ({
  height: '3px',
  width: '18px',
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity')
}))

export interface Props {
  university: string
  cards: Array<{ image: string; title: string }>
}

const UniversityTeamsGrid: React.FC<Props> = ({ university, cards }) => {
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
      >
        {university}
      </Typography>
      <Box
        sx={{
          width: '100%',
          margin: '0 5% 35px 5%',
          borderColor: 'divider',
          border: '1px solid'
        }}
      />
      {cards.map(card => (
        <ImageButton
          focusRipple
          key={card.title}
          style={{
            width: '48%',
            margin: '1%'
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${card.image})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image>
            <Typography
              component="span"
              variant="h4"
              color="inherit"
              sx={{
                position: 'relative',
                p: '4px',
                pt: '2px',
                pb: theme => `calc(${theme.spacing(1)} + 6px)`,
                objectFit: 'contain'
              }}
            >
              {card.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  )
}
export default UniversityTeamsGrid
