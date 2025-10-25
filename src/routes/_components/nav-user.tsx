import { Box, Button, Typography } from '@mui/material';

export function NavUser() {
  return (
    <Button
      sx={(theme) => ({
        background: theme.palette.background.paper,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.palette.grey[100],
        padding: theme.spacing(3),
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(2.5),
        textTransform: 'capitalize',
        color: theme.palette.grey[800],
        transition: 'all 0.3s ease-in-out',
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(1.5),
        })}
      >
        <Box
          component="img"
          src="/avatar.png"
          alt="avatar"
          sx={(_) => ({
            widht: '100%',
            maxWidth: '100%',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
          })}
        />
        <Typography
          component="p"
          sx={(theme) => ({
            fontSize: theme.typography.fontSize,
            opacity: 1,
            transition: 'opacity 300ms ease-in-out',
          })}
        >
          Lawrence Cruz
        </Typography>
      </Box>
      <Box
        sx={(_) => ({
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F8F9FC',
          borderRadius: '50%',
          flexShrink: 0,
          opacity: 1,
          transition: 'opacity 300ms ease-in-out',
        })}
      >
        <Box component="img" src="/union.svg" alt="" />
      </Box>
    </Button>
  );
}
