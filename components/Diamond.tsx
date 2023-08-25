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
  per: string
  image: string
  link: string
  benefits?: string[]
  stand?: string[]
  staff?: string[]
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'inherit',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))
const Diamond: React.FC<Props> = ({
  name,
  per,
  image,
  link,
  benefits,
  stand,
  staff
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
          justifyContent: 'center'
        }}
      >
        <ExternalLink
          key="cignuz"
          href={link}
          target={'blank'}
          sx={{ width: '100%' }}
        >
          <Box
            component="img"
            sx={{
              width: per,
              height: { sm: '450px', xs: '300px' },
              padding: { sm: '0 10%', xs: '0 10%' },
              objectFit: 'contain',
              alignProperty: 'center'
            }}
            src={image}
            alt="icpcmx"
          />
        </ExternalLink>
      </Box>
      <Accordion sx={{ backgroundColor: 'secondary.main', width: '100%' }}>
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
                  <Typography>STAND EN ESPACIO DE EXHIBICIÓN:</Typography>
                  <List sx={{ listStyleType: 'disc', color: 'white' }}>
                    {stand?.map(ben => {
                      return (
                        <ListItem sx={{ display: 'list-item' }} key="ite">
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
              <List sx={{ listStyleType: 'disc', color: 'white' }}>
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

export default Diamond
