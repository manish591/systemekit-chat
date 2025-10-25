import { Box, Button, Stack, Typography } from '@mui/material';

export function GetProAccountLink() {
  return (
    <Button
      sx={(theme) => ({
        borderRadius: '8px',
        padding: theme.spacing(3),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.grey[200],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(2.5),
        textAlign: 'start',
        textTransform: 'capitalize',
        backgroundImage:
          'linear-gradient(55deg, #FFDDF8 0%, #F8F9FC 12%, #F8F9FC 74%, #D9E4FF 95%)',
      })}
    >
      <Stack
        direction="column"
        gap={0.5}
        sx={(_) => ({
          overflow: 'hidden',
          flex: 1,
        })}
      >
        <Typography
          component="p"
          sx={(theme) => ({
            fontWeight: 700,
            fontSize: theme.typography.fontSize,
            color: theme.palette.grey[800],
          })}
        >
          Try Pro!
        </Typography>
        <Typography
          component="p"
          sx={(theme) => ({
            fontSize: theme.typography.fontSize * 0.8571,
            fontWeight: 400,
            color: theme.palette.grey[700],
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
          })}
        >
          Upgrade for smarter AI and more moremore
        </Typography>
      </Stack>
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
        })}
      >
        <Box component="img" src="/rocket.svg" alt="" />
      </Box>
    </Button>
  );
}
