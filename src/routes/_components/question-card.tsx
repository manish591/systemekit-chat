import { Box, Button, Typography } from '@mui/material';
import { Icon } from '@/components/Icon';

export function QuestionCard({ question }: { question: string }) {
  return (
    <Box
      sx={(theme) => ({
        paddingBlock: theme.spacing(5),
        paddingInline: theme.spacing(4),
        borderRadius: '16px',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E9EFFF',
        position: 'relative',
        background:
          'linear-gradient(135deg, #FFDDF8 12%, #F8F9FC 74%, #D9E4FF 94%)',
      })}
    >
      <Box
        sx={(_) => ({
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          background: '#ffffffbb',
          borderRadius: '16px',
          filter: 'blur(1px)',
        })}
      />
      <Button
        sx={(theme) => ({
          zIndex: 10,
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'start',
          textAlign: 'start',
          color: theme.palette.grey[800],
          textTransform: 'capitalize',
        })}
      >
        <Icon
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#E9EFFF',
            background: '#FDFDFD',
          }}
        >
          <Box component="img" src="/sparkles.svg" alt="" />
        </Icon>
        <Typography
          sx={(theme) => ({
            fontSize: theme.typography.fontSize + 1,
            marginTop: theme.spacing(20),
            '@media(max-width: 600px)': {
              marginTop: theme.spacing(10),
            },
          })}
        >
          {question}
        </Typography>
      </Button>
    </Box>
  );
}
