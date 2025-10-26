import { Box, Grid, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { QuestionCard } from './_components/question-card';
import { ChatBox } from './_components/chat-box';

function Index() {
  return (
    <Box
      sx={(_) => ({
        overflow: 'auto',
        height: '100%',
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <Box
        sx={(theme) => ({
          paddingTop: theme.spacing(20),
          paddingBottom: theme.spacing(40),
          maxWidth: '740px',
          marginInline: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          paddingInline: theme.spacing(4),
          '@media(max-width: 600px)': {
            paddingTop: theme.spacing(10),
          },
        })}
      >
        <Box>
          <Typography
            sx={(theme) => ({
              fontWeight: 800,
              fontSize: theme.typography.fontSize * 1.75,
              marginLeft: '-6px',
              '@media(max-width: 600px)': {
                fontSize: theme.typography.fontSize * 1.25,
              },
            })}
          >
            👋🏼 Hi Laurence!
          </Typography>
          <Typography
            sx={(theme) => ({
              fontWeight: 500,
              fontSize: theme.typography.fontSize * 2.5,
              marginTop: theme.spacing(5),
              maxWidth: '50%',
              lineHeight: 1.2,
              '@media(max-width: 600px)': {
                fontSize: theme.typography.fontSize * 1.75,
                maxWidth: '70%',
              },
            })}
          >
            What do you want to learn today?
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          sx={(theme) => ({
            marginTop: theme.spacing(10),
          })}
        >
          <Grid
            size={{
              xs: 12,
              sm: 4,
            }}
          >
            <QuestionCard question="Give me a concise summary of this meeting transcript" />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 4,
            }}
          >
            <QuestionCard question="Write a product description for a minimalist smartwatch" />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 4,
            }}
          >
            <QuestionCard question="Provide a polite response to a customer asking for a refund" />
          </Grid>
        </Grid>
      </Box>
      <ChatBox />
    </Box>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
