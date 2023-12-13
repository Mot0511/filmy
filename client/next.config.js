/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // was there by default
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.mp4$/,
            use: 'file-loader?name=videos/[name].[ext]',
        });

    // Important: return the modified config
    return config;
  },
}

module.exports = nextConfig
