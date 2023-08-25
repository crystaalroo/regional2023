import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Paper,
  Stack,
  styled,
  Link as ExternalLink
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface Props {
  name: string
  per1: string
  per2: string
  benefits?: string[]
  stand?: string[]
  staff?: string[]
  link1: string
  image1: string
  link2: string
  image2: string
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'inherit',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))
const Bronce: React.FC<Props> = ({
  name,
  per1,
  per2,
  benefits,
  stand,
  staff,
  link1,
  image1,
  link2,
  image2
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="h4"
        component="div"
        align="center"
        color={'primary.contrastText'}
        sx={{
          display: 'block',
          width: '50%'
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: { sm: '50%', xs: '100%' },
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
        }}
      >
        <ExternalLink
          key="tecm"
          href={link1}
          target={'blank'}
          sx={{ width: '50%' }}
        >
          <Box
            component="img"
            sx={{
              width: per1,
              height: '300px',
              padding: { sm: '0 15%', xs: '0 20%' },
              objectFit: 'contain',
              display: 'flex'
            }}
            src={image1}
            alt="icpcmx"
          />
        </ExternalLink>

        <ExternalLink
          key="grid"
          href={link2}
          target={'blank'}
          sx={{ width: '50%' }}
        >
          <Box
            component="img"
            sx={{
              width: per2,
              height: '300px',
              padding: { sm: '0 15%', xs: '0 20%' },
              objectFit: 'contain',
              display: 'flex'
            }}
            src={image2}
            alt="icpcmx"
          />
        </ExternalLink>
      </Box>
      <Accordion
        sx={{
          backgroundColor: 'secondary.main',
          width: '100%'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fill: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Beneficios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              backgroundColor: 'inherit'
            }}
          >
            <Item>
              <List sx={{ listStyleType: 'disc' }}>
                {benefits?.map(ben => {
                  return (
                    <ListItem
                      sx={{ display: 'list-item', color: 'white' }}
                      key="ite"
                    >
                      <Typography sx={{ color: 'white' }}>{ben}</Typography>
                    </ListItem>
                  )
                })}
              </List>
            </Item>
            <Item>
              {stand !== undefined && (
                <Box>
                  <Typography sx={{ color: 'white' }}>
                    STAND EN ESPACIO DE EXHIBICIÓN:
                  </Typography>
                  <List sx={{ listStyleType: 'disc', color: 'white' }}>
                    {stand?.map(ben => {
                      return (
                        <ListItem
                          sx={{ display: 'list-item', color: 'white' }}
                          key="ite"
                        >
                          <Typography sx={{ color: 'white' }}>{ben}</Typography>
                        </ListItem>
                      )
                    })}
                  </List>
                </Box>
              )}
              <Typography sx={{ color: 'white' }}>
                ACCESOS INCLUIDOS:
              </Typography>
              <List sx={{ listStyleType: 'disc' }}>
                {staff?.map(ben => {
                  return (
                    <ListItem sx={{ display: 'list-item' }} key="ite">
                      <Typography sx={{ color: 'white' }}>{ben}</Typography>
                    </ListItem>
                  )
                })}
              </List>
            </Item>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Bronce
