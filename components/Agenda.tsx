import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Typography } from '@mui/material'

const titles = [
  'Inicio (Local)',
  'Fin (Local)',
  'Inicio (UTC)',
  'Fin (UTC)',
  'Actividad',
  'Lugar',
  'Asistentes',
  'Patrocinado por'
]
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData(
  r1: string,
  r2: string,
  r3: string,
  r4: string,
  r5: string,
  r6: string,
  r7: string,
  r8: string
) {
  return { r1, r2, r3, r4, r5, r6, r7, r8 }
}

const rows = [
  createData(
    '12:00',
    '15:00',
    '18:00',
    '21:00',
    'Registro Regional y Entrega de materiales.',
    'Holiday Inn Express Guadalajara ITESO',
    'Todos.',
    'ICPC México / Hotel Sede'
  ),
  createData(
    '15:00',
    '-',
    '21:00',
    '-',
    'Registro en hotel.',
    'Holiday Inn Express Guadalajara ITESO LiveUp Hampton Inn by Hilton Gdl Expo',
    'Todos',
    'Hotel Sede / ICPC México'
  ),
  createData(
    '15:00',
    '17:00',
    '21:00',
    '23:00',
    'Asamblea de Directores de Sede de México. Incluye comida solo para directores de sede.',
    'ITESO',
    'Directores de Sede de México',
    'ICPC México / ITESO'
  ),
  createData(
    '17:00',
    '18:00',
    '23:00',
    '24:00',
    'Inauguración y Premiación del Gran Premio 2022',
    'ITESO',
    'Todos',
    'ICPC México / ITESO'
  ),
  createData(
    '18:00',
    '19:00',
    '24:00',
    '01:00 (+1)',
    'Acomodo en Salón para Concurso de Práctica',
    'ITESO, Edificio T, Salón T120-121',
    'Concursantes y Entrenadores',
    'ICPC México / ITESO'
  ),
  createData(
    '19:00',
    '20:00',
    '01:00 (+1)',
    '02:00 (+1)',
    'Concurso de Práctica',
    'ITESO, Edificio T, Salón T120-121',
    'Concursantes y Entrenadores',
    'ICPC México / ITESO'
  ),
  createData(
    '20:00',
    '21:00',
    '02:00 (+1)',
    '03:00 (+1)',
    'Conferencias x Confirmar',
    'ITESO',
    'Todos',
    'ICPC México / ITESO'
  ),
  createData(
    '21:00',
    '22:00',
    '03:00 (+1)',
    '04:00 (+1)',
    'Cena de Bienvenida',
    'ITESO',
    'Todos',
    'ICPC México / ITESO'
  ),
  createData(
    '22:00',
    '-',
    '04:00 (+1)',
    '-',
    'Cierre del Primer Día. ',
    'Glorieta Entrada ITESO hacia cada Hotel Sede',
    'Transportación para los alojados en el Hampton Inn.',
    'ITESO / Hampton Inn'
  )
]

const rowsS = [
  createData(
    '6:00',
    '9:00',
    '12:00',
    '15:00',
    'Desayuno (Alojados en Livup desayunan en Holiday Inn Express Guadalajara ITESO',
    'Hoteles Sede',
    'Todos',
    'Hoteles Sede'
  ),
  createData(
    '9:00',
    '10:00',
    '15:00',
    '16:00',
    'Traslado de Hoteles Sede al ITESO',
    'Hoteles Sede ',
    'Todos',
    'Hoteles Sede / ITESO'
  ),
  createData(
    '10:00',
    '11:00',
    '16:00',
    '17:00',
    'Acomodo en el salón de competencias. Los concursantes deben llevar una credencial vigente con fotografía.',
    'ITESO, Edificio T, Salón T120-121',
    'Concursantes',
    'ICPC México / ITESO'
  ),
  createData(
    '11:00',
    '16:00',
    '17:00',
    '22:00',
    'Eliminatoria Regional #ICPCMX2022',
    'ITESO, Edificio T, Salón T120-121',
    'Concursantes',
    'ICPC México / ITESO'
  ),
  createData(
    '11:00',
    '16:00',
    '17:00',
    '22:00',
    'Actividades para Directores, Entrenadores y otros asistentes',
    'ITESO, Edificio T, Salón T211',
    'Directores, Entrenadores',
    'ICPC México / ITESO'
  ),
  createData(
    '17:00',
    '18:00',
    '22:00',
    '23:00',
    'Premiación y Clausura',
    'ITESO',
    'Todos',
    'ICPC México / ITESO'
  ),
  createData(
    '18:00',
    '20:00',
    '23:00',
    '01:00 (+1)',
    'Comida de Cierre',
    'ITESO',
    'Todos',
    'ICPC México / ITESO'
  )
]

const AgendaTable: React.FC = () => {
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
          margin: 'auto 20px 20px 20px',
          display: 'block',
          width: '100%'
        }}
      >
        Viernes: 17 de Marzo de 2023
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {titles.map(title => (
                <StyledTableCell>{title}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.r1}>
                <StyledTableCell align="center">{row.r1}</StyledTableCell>
                <StyledTableCell align="center">{row.r2}</StyledTableCell>
                <StyledTableCell align="center">{row.r3}</StyledTableCell>
                <StyledTableCell align="center">{row.r4}</StyledTableCell>
                <StyledTableCell align="center">{row.r5}</StyledTableCell>
                <StyledTableCell align="center">{row.r6}</StyledTableCell>
                <StyledTableCell align="center">{row.r7}</StyledTableCell>
                <StyledTableCell align="center">{row.r8}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant="h4"
        component="div"
        align="center"
        color={'primary.contrastText'}
        sx={{
          margin: 'auto 20px 20px 20px',
          display: 'block',
          width: '100%'
        }}
      >
        Sabado: 18 de Marzo de 2023
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {titles.map(title => (
                <StyledTableCell>{title}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsS.map(row => (
              <StyledTableRow key={row.r1}>
                <StyledTableCell align="center">{row.r1}</StyledTableCell>
                <StyledTableCell align="center">{row.r2}</StyledTableCell>
                <StyledTableCell align="center">{row.r3}</StyledTableCell>
                <StyledTableCell align="center">{row.r4}</StyledTableCell>
                <StyledTableCell align="center">{row.r5}</StyledTableCell>
                <StyledTableCell align="center">{row.r6}</StyledTableCell>
                <StyledTableCell align="center">{row.r7}</StyledTableCell>
                <StyledTableCell align="center">{row.r8}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
export default AgendaTable
