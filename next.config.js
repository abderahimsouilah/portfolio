/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    Mongo:
      'mongodb+srv://souilah:souilah@cluster0.u4dgsxh.mongodb.net/contact?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
