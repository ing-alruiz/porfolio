import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C5A25D', // Gold
    },
    background: {
      default: '#111111', // Black
      paper: '#181818',
    },
    text: {
      primary: '#C5A25D',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {
      fontFamily: "'Dancing Script', cursive",
    },
    h2: {
      fontFamily: "'Dancing Script', cursive",
    },
    h3: {
      fontFamily: "'Dancing Script', cursive",
    },
    h4: {
      fontFamily: "'Dancing Script', cursive",
    },
  },
});

export default theme;
