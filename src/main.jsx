import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from "./Route/Router.jsx";
// Add these imports:
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
)


// https://sakura.saadasran.com/index-demo2.html#home
// https://ethemestudio.com/demo/thames/1_home_main/index.html
// https://preview.themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/full_screen_preview/31542002?_ga=2.4283063.561946406.1750300511-822169685.1743865050&_gac=1.213928421.1750300511.CjwKCAjwx8nCBhAwEiwA_z__027fPUA7TwUw5mLrqr7aqa1a_IlJ-of4kXV-1uiUg_faXHTne5_TZhoCA9YQAvD_BwE