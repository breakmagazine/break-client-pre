/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    '@emotion/styled': require.resolve('@emotion/styled'),

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },

    images: {
        domains: ['github.com'],
    },
};

module.exports = nextConfig;
