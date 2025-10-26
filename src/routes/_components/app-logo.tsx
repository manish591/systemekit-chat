import { Box, Typography } from '@mui/material';

export function AppLogo() {
  return (
    <>
      <Box
        component="img"
        src="/logo.svg"
        alt="logo"
        sx={(_) => ({
          width: '32px',
          height: '32px',
          flexShrink: 0,
        })}
      />
      <Typography
        variant="h1"
        sx={(theme) => ({
          fontSize: theme.typography.fontSize * 1.75,
          fontWeight: 800,
        })}
      >
        Inteliq
      </Typography>
    </>
  );
}
