/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [`${process.env.API_URL_IMAGES}`, "raw.githubusercontent.com"],
	},
};

module.exports = nextConfig;
