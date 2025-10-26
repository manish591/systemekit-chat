import { Box, CssBaseline } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Providers } from '@/components/providers';
import { Sidebar, SidebarProvider } from '@/routes/_components/sidebar';
import { Header } from './_components/header';

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
            <Box
              component="main"
              sx={(theme) => ({
                paddingTop: theme.spacing(2),
                height: '100%',
                overflow: 'hidden',
                width: '100%',
                '@media(max-width: 900px)': {
                  paddingTop: 0,
                },
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
                  '@media(max-width: 900px)': {
                    borderTopLeftRadius: 0,
                  },
                })}
              >
                <Header />
                <Outlet />
              </Box>
            </Box>
          </SidebarProvider>
        </Box>
      </Box>
    </Providers>
    {/* <TanStackRouterDevtools /> */}
  </>
);

export const Route = createRootRoute({ component: RootLayout });
