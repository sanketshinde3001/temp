/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"pros.weddingpro.com",
            },
        ],
    },
};

export default nextConfig;

