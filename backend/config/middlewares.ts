export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // 'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
