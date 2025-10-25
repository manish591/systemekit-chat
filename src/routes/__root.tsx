import { Box, CssBaseline } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Providers } from '@/components/providers';
import { Sidebar, SidebarProvider } from '@/routes/_components/sidebar';

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
              overflow: 'auto',
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
              })}
            >
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
