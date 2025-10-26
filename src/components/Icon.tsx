import { Box, type SxProps, type Theme } from '@mui/material';

export function Icon({
  children,
  sx,
  ...props
}: Readonly<
  React.ComponentProps<'div'> & {
    sx?: SxProps<Theme>;
  }
>) {
  return (
    <Box
      {...props}
      sx={{
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
