// module.exports = () => ({});

// module.exports = ({ env }) => ({
//     // enable a plugin that doesn't require any configuration
//     upload: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//     i18n: true,
  
    
    // upload: {
    //     config: {
    //       providerOptions: {
    //         localServer: {
    //           maxage: 300000
    //         },
    //       },
    //       sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
    //       breakpoints: {
    //         xlarge: 1920,
    //         large: 1000,
    //         medium: 750,
    //         small: 500,
    //         xsmall: 64
    //       },
    //     },
    //   },
  // });

  module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});