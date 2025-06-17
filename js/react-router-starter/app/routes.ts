import { index, prefix, route, type RouteConfig } from '@react-router/dev/routes';

// TODO: 경로 정의 (https://reactrouter.com/start/framework/routing)
export default [
  // * Pages
  index('routes/pages/home.tsx'),
  route('count', 'routes/pages/count.tsx'),
  route('test', 'routes/pages/test.tsx'),
  route('travel', 'routes/pages/travel.tsx'),
  route('product', 'routes/pages/product.tsx'),
  route('reservation', 'routes/pages/reservation.tsx'),
  // * APIs
  ...prefix('api', [
    route('theme', 'routes/apis/theme.ts'),
    route('language', 'routes/apis/language.ts'),
  ]),
] satisfies RouteConfig;
