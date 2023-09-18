/** @type {import('next').NextConfig} */
const withPWA = require('@imbios/next-pwa')({
	dest: 'public',
});

const nextConfig = {
	images: {
		domains: ['images.unsplash.com', 'now-playing-sooty.vercel.app'],
	},

	// pwa: {
	// 	dest: 'public', // Specify the folder where service worker files will be generated.
	// 	disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode.
	// 	// Additional PWA configuration options can be added here.
	// 	// For example:
	// 	// register: true, // Register the service worker during build time.
	// 	// scope: '/', // Define the service worker's scope.
	// 	// sw: 'service-worker.js', // Specify the service worker file name.
	// 	// ...
	// },
};

module.exports = withPWA(nextConfig);
