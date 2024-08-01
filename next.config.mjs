/** @type {import('next').NextConfig} */

import withMDX from '@next/mdx';

const mdxConfig = withMDX({
	extension: /\.mdx?$/,
});

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	...mdxConfig,
};

export default nextConfig;
