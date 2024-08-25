import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 

export default withNextIntl(nextConfig);




// const createNextIntlPlugin = require('next-intl/plugin')

// const withNextIntl = createNextIntlPlugin()

// // @ts-check

// /**  @type {import('next').NextConfig} * */

// const nextConfig = {
  

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//     ],
//   },
// };

// module.exports = withNextIntl(nextConfig);
