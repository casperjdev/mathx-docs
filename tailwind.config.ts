import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0, .8, .2, 1)',
			},
			transitionProperty: {
				width: 'width',
				height: 'height',
			},
			screens: {
				lg: '900px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
