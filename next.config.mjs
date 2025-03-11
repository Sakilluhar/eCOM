/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "static.wixstatic.com",
            }
        ]
        
    },
    env: {
        NEXR_PUBLIC_WIX_APP_ID: '215238eb-22a5-4c36-9e7b-e7c08025e04e',
      },
};




export default nextConfig;
