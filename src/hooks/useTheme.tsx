import { createTheme } from '@mui/material';

export function useTheme() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Bricolage Grotesque',
    },
  });

  return theme;
}
