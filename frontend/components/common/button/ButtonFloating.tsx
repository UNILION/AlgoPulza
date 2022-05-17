import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import NavigationIcon from '@mui/icons-material/Navigation'

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </Box>
  )
}