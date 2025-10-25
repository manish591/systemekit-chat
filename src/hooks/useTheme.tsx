import { createTheme } from '@mui/material';

export function useTheme() {
  const theme = createTheme({
    spacing: 4,
    typography: {
      fontSize: 14.5,
      fontFamily: 'Bricolage Grotesque',
      allVariants: {
        letterSpacing: '-0.008em',
      },
    },
    components: {
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
    palette: {
      background: {
        default: '#F8F9FC',
        paper: '#FDFDFD',
      },
      primary: {
        main: '#2063FF',
        contrastText: 'white',
        '100': 'pink',
        '200': '#E9EFFF',
      },
      text: {
        primary: '#272727',
      },
      grey: {
        '100': '#F3F3F3',
        '200': '#EBEBEB',
        '400': '#ACACAC',
        '500': '#717680',
        '600': '#989898',
        '700': '#717171',
        '800': '#515151',
      },
    },
  });

  return theme;
}
