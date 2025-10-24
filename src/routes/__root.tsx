import { CssBaseline } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Providers } from '@/components/providers';

const RootLayout = () => (
  <>
    <Providers>
      <CssBaseline />
      <Outlet />
    </Providers>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
