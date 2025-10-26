import { Box, Button, IconButton, Typography } from '@mui/material';
import { Icon } from '@/components/Icon';
import { useSidebarContext } from './sidebar';

export function Header() {
  const { setOpenMobileSidebar } = useSidebarContext();

  return (
    <Box
      component="header"
      sx={(theme) => ({
        paddingInline: theme.spacing(6),
        paddingBlock: theme.spacing(3),
        borderWidth: '0px 0px 1px 0',
        borderStyle: 'solid',
        borderColor: theme.palette.grey[200],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: theme.spacing(2),
        '@media(max-width: 900px)': {
          paddingInline: theme.spacing(3),
        },
      })}
    >
      <IconButton
        sx={(_) => ({
          display: 'none',
          '@media(max-width: 900px)': {
            display: 'block',
          },
        })}
        onClick={() => {
          setOpenMobileSidebar(true);
        }}
      >
        <Icon>
          <Box
            component="img"
            src="/menu.svg"
            sx={(_) => ({
              width: '24px',
              height: '24px',
            })}
          />
        </Icon>
      </IconButton>
      <Button
        sx={(theme) => ({
          borderRadius: '20px',
          padding: theme.spacing(1),
          gap: theme.spacing(6),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          background: '#F8F9FC',
          color: theme.palette.grey[800],
          textTransform: 'capitalize',
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2),
          })}
        >
          <Icon>
            <Box component="img" src="/openai.svg" alt="openai" />
          </Icon>
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.fontSize * 0.857,
            })}
          >
            ChatGPT 4
          </Typography>
        </Box>
        <Icon
          sx={(_) => ({
            flexShrink: 0,
          })}
        >
          <Box component="img" src="/chevron-down.svg" alt="" />
        </Icon>
      </Button>
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(3),
          marginLeft: 'auto',
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(4),
            '@media(max-width: 900px)': {
              display: 'none',
            },
          })}
        >
          <IconButton
            sx={(theme) => ({
              '&:hover': {
                background: theme.palette.grey[100],
              },
            })}
          >
            <Icon>
              <Box component="img" src="/share.svg" alt="share" />
            </Icon>
          </IconButton>
          <IconButton
            sx={(theme) => ({
              '&:hover': {
                background: theme.palette.grey[100],
              },
            })}
          >
            <Icon>
              <Box component="img" src="/question-mark-circle.svg" alt="help" />
            </Icon>
          </IconButton>
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={(theme) => ({
            textTransform: 'capitalize',

            gap: theme.spacing(2),
            paddingBlock: theme.spacing(2),
            paddingInline: theme.spacing(3),
            borderRadius: '32px',
          })}
        >
          <Icon>
            <Box component="img" src="/plus.svg" alt="" />
          </Icon>
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.fontSize * 0.857,
              fontWeight: 600,
            })}
          >
            New Chat
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
