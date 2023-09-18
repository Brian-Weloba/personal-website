/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const nextConfig = {
	images: {
		domains: ['images.unsplash.com', 'now-playing-sooty.vercel.app'],
	},
};

module.exports = withPWA({
	...nextConfig,
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
	},
});
