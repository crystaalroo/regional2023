import { createTheme, ThemeOptions} from "@mui/material/styles";

const themeOptions: ThemeOptions = {
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#ffffff',
        contrastText: '#000000',
      },
      background: {
        default: '#1b263b',
        paper: '#1b263b',
      },
      text: {
        primary: '#BBBBBB',
        secondary: '#BBBBBB',
        disabled: '#BBBBBB',
      },
      divider: '#ffffff',
    },
    typography: {
      h1: {
        fontFamily: 'Changa One',
      },
      h2: {
        fontFamily: 'Changa One',
      },
      h3: {
        fontFamily: 'Changa One',
      },
      h4: {
        fontFamily: 'Changa One',
      },
      h5: {
        fontFamily: 'Changa One',
      },
      h6: {
        fontFamily: 'Changa One',
      },
      body1: {
        fontFamily: 'Chivo',
      },
      body2: {
        fontFamily: 'Chivo',
      },
      button: {
        fontFamily: 'Noto Sans',
      },
      caption: {
        fontFamily: 'Noto Sans',
      },
      overline: {
        fontFamily: 'Chivo',
      },
      fontFamily: 'Chivo',
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: '#0D1B2A',
                colorSecondary: '#fff'
            }
        }
    },
  };

export const theme = createTheme(themeOptions);