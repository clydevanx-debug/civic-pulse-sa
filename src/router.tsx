import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { CivicPulseApp } from './components/CivicPulseApp';

// Root layout route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Index route rendering your CivicPulse application
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: CivicPulseApp,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });

registerRouterType('hash');
