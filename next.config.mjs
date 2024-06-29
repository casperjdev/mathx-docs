/** @type {import('next').NextConfig} */

import withMDX from '@next/mdx';

const mdxConfig = withMDX({
	extension: /\.mdx?$/,
});

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	...mdxConfig,
	async redirects() {
		return [
			{
				source: '/:slug',
				destination: '/:slug/introduction',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
