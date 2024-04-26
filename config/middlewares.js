module.exports = ({ env}) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'cdn.jsdelivr.net', 'strapi.io', 'teratomo-web-prod.s3.us-east-1.amazonaws.com'],
        },
      }
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: ['*', "localhost:3000"],
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
