import {
  Box,
  Button,
  CssBaseline,
  IconButton,
  Typography,
} from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Providers } from '@/components/providers';
import { Sidebar, SidebarProvider } from '@/routes/_components/sidebar';
import { Icon } from '@/components/Icon';

const RootLayout = () => (
  <>
    <Providers>
      <CssBaseline />
      <Box
        sx={(_) => ({
          height: '100svh',
        })}
      >
        <Box
          sx={(_) => ({
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            width: '100%',
          })}
        >
          <SidebarProvider>
            <Sidebar />
          </SidebarProvider>
          <Box
            component="main"
            sx={(theme) => ({
              paddingTop: theme.spacing(2),
              height: '100%',
              overflow: 'hidden',
              width: '100%',
            })}
          >
            <Box
              sx={(theme) => ({
                borderWidth: '1px 0 0 1px',
                borderColor: theme.palette.grey[200],
                borderStyle: 'solid',
                height: '100%',
                background: theme.palette.background.paper,
                borderTopLeftRadius: theme.spacing(5),
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              <Box
                sx={(theme) => ({
                  paddingInline: theme.spacing(6),
                  paddingBlock: theme.spacing(3),
                  borderWidth: '0px 0px 1px 0',
                  borderStyle: 'solid',
                  borderColor: theme.palette.grey[200],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
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
                  })}
                >
                  <Box
                    sx={(theme) => ({
                      display: 'flex',
                      alignItems: 'center',
                      gap: theme.spacing(4),
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
                        <Box
                          component="img"
                          src="/question-mark-circle.svg"
                          alt="help"
                        />
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
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </Providers>
    {/* <TanStackRouterDevtools /> */}
  </>
);

export const Route = createRootRoute({ component: RootLayout });
