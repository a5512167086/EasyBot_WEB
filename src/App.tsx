import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/configs/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
