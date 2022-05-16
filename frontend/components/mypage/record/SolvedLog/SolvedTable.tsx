import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FFC94D',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
}));


export default function SolvedTable(props: any) {
  const { rows } = props
  const statusColor = (status: string) => {
    const coloredStatus = status
    if (coloredStatus=='solved') {
      return (<b style={{color: '#009874'}}>{coloredStatus}</b>)
    }
    return (<b style={{color: '#E45624'}}>{coloredStatus}</b>)
  }
  
  return (
    <TableContainer component={Paper} sx={{ marginBottom: '15px', maxHeight: 500 }}>
      <Table stickyHeader aria-label="solved table">
        <TableHead sx={{ background: '#FFC94D' }}>
          <TableRow>
            <StyledTableCell align="center" style={{ width: "15%" }}>문제번호</StyledTableCell>
            <StyledTableCell align="center" style={{ width: "40%" }}>제목</StyledTableCell>
            <StyledTableCell align="center" style={{ width: "15%" }}>풀이상태</StyledTableCell>
            <StyledTableCell align="center" style={{ width: "10%" }}>언어</StyledTableCell>
            <StyledTableCell align="center" style={{ width: "10%" }}>메모리</StyledTableCell>
            <StyledTableCell align="center" style={{ width: "10%" }}>런타임</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row: any) => (
            <TableRow
              key={row.problemBojId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="center" component="th" scope="row">{row.problemBojId}</StyledTableCell>
              <StyledTableCell align="left">{row.problemTitle}</StyledTableCell>
              <StyledTableCell align="center">
                {statusColor(row.status)}
              </StyledTableCell>
              <StyledTableCell align="center">{row.language}</StyledTableCell>
              <StyledTableCell align="center">
                {row.memory} 
                <span style={{color: '#E45624'}}> KB</span>
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.runTime} 
                <span style={{color: '#E45624'}}> ms</span>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}