import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Typography } from '@mui/material'

const titles = [
  'Rol',
  'Pago temprano (Hasta el 8 de febrero)',
  'Pago tardío (Hasta el 21 de febrero)'
]
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
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
  r3: string
): Record<string, string> {
  return { r1, r2, r3 }
}

const rows = [
  createData('Composición Oficial Concursantes (c/u)', '800 MXN', '1000 MXN'),
  createData('Composición Oficial Entrenador', '900 MXN', '1100 MXN'),
  createData(
    'Integrantes Adicionales,Co Entrenador, Reservas y otros asistentes',
    '1000 MXN',
    '1500 MXN'
  ),
  createData('Directores de sede', '1500 MXN', '2000 MXN')
]

export const PaymentTable: React.FC = () => {
  return (
    <Box width={'100%'}>
      <Paper sx={{ width: '100%', minWidth: '900px' }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {titles.map(title => (
                <StyledTableCell key={title}>
                  <Typography variant="subtitle2">{title}</Typography>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.r1}>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r1}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r2}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r3}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  )
}
