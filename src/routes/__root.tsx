import { Box, CssBaseline } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Providers } from '@/components/providers';

const RootLayout = () => (
  <>
    <Providers>
      <CssBaseline />
      <Box component="div" sx={{ minHeight: '100svh' }}>
        <Outlet />
      </Box>
    </Providers>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
