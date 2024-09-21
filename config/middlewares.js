module.exports = [
  'strapi::logger',
  'strapi::errors',
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:"],
            "img-src": ["'self'", 'data:', 'blob:','res.cloudinary.com', 'market-assets.strapi.io','localhost'],
            "media-src": ["'self'", 'data:', 'blob:'],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    {
      name: 'strapi::cors',
      config: {
        enabled: true,
        origin: ['http://localhost:3000', 'https://tu-dominio-vercel.vercel.app'],
        headers: ['*'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        keepHeaderOnError: true,
      },
    },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
