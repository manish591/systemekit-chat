import { createTheme } from '@mui/material';

export function useTheme() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Bricolage Grotesque',
    },
    palette: {
      background: {
        default: '#F8F9FC',
      },
      primary: {
        main: '#2063FF',
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
