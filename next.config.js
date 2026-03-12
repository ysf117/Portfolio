/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Tells Next.js to generate static HTML
    images: {
        unoptimized: true, // Required for static export
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
