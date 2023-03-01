import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import AgendaTable, { RowData } from '../components/Agenda'
import MainBoard from '../components/MainBoard'
import BoardCard from '../components/BoardCard'
import { Typography } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import csvParser from 'csv-parser'
import fs from 'fs'
import path from 'path'
// ********************************************************************************

interface Props {
  agenda17: RowData[]
  agenda18: RowData[]
  agenda17c: RowData[]
}
const Agenda: NextPage<Props> = ({ agenda17, agenda18, agenda17c }) => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard
        sx={{ padding: { md: '100px 50px 0 50px', xs: '80px 0 0 0' } }}
      >
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            Viernes: 17 de Marzo de 2023
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTable Rows={agenda17} />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            Conferencias: 17 de Marzo de 2023
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTable Rows={agenda17c} />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            Sabado: 18 de Marzo de 2023
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTable Rows={agenda18} />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

async function parseCSV(fileName: string): Promise<RowData[]> {
  return await new Promise((resolve, reject) => {
    const rows: RowData[] = []

    fs.createReadStream(fileName)
      .pipe(csvParser({ headers: false }))
      .on('data', (row: any) => {
        rows.push({
          r1: row[0],
          r2: row[1],
          r3: row[2],
          r4: row[3],
          r5: row[4],
          r6: row[5],
          r7: row[6],
          r8: row[7]
        })
        // console.log(row)
      })
      .on('end', () => {
        resolve(rows)
      })
      .on('error', (error: Error) => {
        reject(error)
      })
  })
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  let rows17: RowData[] = []
  let rows18: RowData[] = []
  let rows17c: RowData[] = []
  await parseCSV('./public/agenda17.csv')
    .then((parsedRows: RowData[]) => {
      rows17 = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  await parseCSV('./public/agenda17c.csv')
    .then((parsedRows: RowData[]) => {
      rows17c = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  await parseCSV('./public/agenda18.csv')
    .then((parsedRows: RowData[]) => {
      rows18 = parsedRows
      // console.log(rows18)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  return { props: { agenda17: rows17, agenda18: rows18, agenda17c: rows17c } }
}

export default Agenda
