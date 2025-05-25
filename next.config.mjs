/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
  swcMinify: false,
   images: {
    domains: ['res.cloudinary.com' , 'sawani.ae' , 'www.pcl.com'],
  },
};

export default nextConfig;
