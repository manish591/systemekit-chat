import { Box, IconButton, TextareaAutosize, Typography } from '@mui/material';
import { Icon } from '@/components/Icon';

export function ChatBox() {
  return (
    <Box
      sx={(theme) => ({
        paddingInline: theme.spacing(4),
        position: 'sticky',
        left: 0,
        bottom: 0,
        width: '100%',
        zIndex: 20,
        maxWidth: '740px',
        margin: '0 auto',
        marginTop: 'auto',
      })}
    >
      <Box
        sx={(theme) => ({
          paddingBlock: theme.spacing(3),
          paddingInline: theme.spacing(2),
          background: theme.palette.background.paper,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: theme.palette.grey[200],
          boxShadow: '0px 0px 4px #0000001F',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        })}
      >
        <TextareaAutosize
          aria-label="minimum height"
          minRows={4}
          maxRows={12}
          placeholder="Ask me a question..."
          style={{
            width: '100%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#EBEBEB',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingInline: '14px',
            borderRadius: '8px',
            boxShadow: '0px 1px 2px #0A0D120D',
            fontFamily: 'Bricolage Grotesque',
          }}
          onFocus={(e) => {
            e.target.style.outlineColor = '#2063FF';
          }}
        />
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(3),
            marginTop: theme.spacing(2),
          })}
        >
          <IconButton
            sx={(_) => ({
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#F3F3F3',
            })}
          >
            <Icon>
              <Box component="img" src="/paper-clip.svg" alt="" />
            </Icon>
          </IconButton>
          <IconButton
            sx={(_) => ({
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#F3F3F3',
            })}
          >
            <Icon>
              <Box component="img" src="/camera.svg" alt="" />
            </Icon>
          </IconButton>
          <Typography
            sx={() => ({
              color: '#ACACAC',
              fontSize: '12px',
              marginLeft: 'auto',
            })}
          >
            0/1000
          </Typography>
          <IconButton
            sx={(_) => ({
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#E9EFFF',
            })}
          >
            <Icon>
              <Box component="img" src="/paper-airplane.svg" alt="" />
            </Icon>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
