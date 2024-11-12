import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/configs/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/index'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
