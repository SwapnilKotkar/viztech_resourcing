/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    CRYPTO_SECRET_KEY : process.env.CRYPTO_SECRET_KEY,
    MY_AWS_ACCESS_KEY_NAME : process.env.MY_AWS_ACCESS_KEY_NAME,
    MY_AWS_SECRET_ACCESS_KEY_NAME : process.env.MY_AWS_SECRET_ACCESS_KEY_NAME,
    MY_AWS_BUCKET_NAME : process.env.MY_AWS_BUCKET_NAME,
    MY_AWS_BUCKET_REGION : process.env.MY_AWS_BUCKET_REGION
  }
}

module.exports = nextConfig
