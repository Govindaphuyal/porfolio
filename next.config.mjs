/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        // Unsplash
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "*.unsplash.com", // Wildcard for subdomains
        },
  
        // Pravatar
        {
          protocol: "https",
          hostname: "pravatar.cc",
        },
        {
          protocol: "https",
          hostname: "*.pravatar.cc", // Wildcard for subdomains
        },
  
        // Pixabay
        {
          protocol: "https",
          hostname: "pixabay.com",
        },
        {
          protocol: "https",
          hostname: "cdn.pixabay.com",
        },
        {
          protocol: "https",
          hostname: "*.pixabay.com", // Wildcard for subdomains
        },
        {
            protocol: "https",
            hostname: "unsplash.com", 
          },
      ],
    },
  };
  
  

export default nextConfig;
