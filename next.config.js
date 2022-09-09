/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    CRYPTO_SECRET_KEY : process.env.CRYPTO_SECRET_KEY,
    AWS_ACCESS_KEY_NAME : process.env.AWS_ACCESS_KEY_NAME,
    AWS_SECRET_ACCESS_KEY_NAME : process.env.AWS_SECRET_ACCESS_KEY_NAME,
    AWS_BUCKET_NAME : process.env.AWS_BUCKET_NAME,
    AWS_BUCKET_REGION : process.env.AWS_BUCKET_REGION
  }
}

module.exports = nextConfig
