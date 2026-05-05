import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr'
});

export const config = {
  // Match all pathnames except for api routes, _next, and files with dots
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
