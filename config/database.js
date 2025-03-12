//
    //strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', '0000'),
          schema: env('DATABASE_SCHEMA', 'public'),
          ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
        },
        debug: false,
      },
    });

    // module.exports = ({ env }) => ({
    //   connection: {
    //     client: 'postgres',
    //     connection: {
    //       connectionString: env('DATABASE_URL'),
    //       ssl: {
    //         rejectUnauthorized: false,
    //       },
    //     },
    //     debug: false,
    //   },
    // });

