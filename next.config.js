/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    images: {
      loader: "akamai",
      path: "",
    },
    assetPrefix: "./",
  },
}

module.exports = nextConfig
