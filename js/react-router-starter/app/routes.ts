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

  route('quest1', 'routes/pages/test/quest1.tsx'),
  route('quest2', 'routes/pages/test/quest2.tsx'),
  route('quest3', 'routes/pages/test/quest3.tsx'),
  route('quest4', 'routes/pages/test/quest4.tsx'),
  route('quest5', 'routes/pages/test/quest5.tsx'),

  route('useMemo', 'routes/pages/useMemo.tsx'),
  route('customHookWithCount', 'routes/pages/custom-hook-with-count.tsx'),
  route('fetchAPI', 'routes/pages/fetch-api.tsx'),
  route('ssrFetchApi', 'routes/pages/ssr-fetch-api.tsx'),
  route('postApi', 'routes/pages/post-api.tsx'),
  route('ssrPostApi', 'routes/pages/ssr-post-api.tsx'),
  route('fetchApiTest', 'routes/pages/fetch-api-test.tsx'),
  route('calculator', 'routes/pages/calculator.tsx'),
  // * APIs
  ...prefix('api', [
    route('theme', 'routes/apis/theme.ts'),
    route('language', 'routes/apis/language.ts'),
  ]),
] satisfies RouteConfig;
