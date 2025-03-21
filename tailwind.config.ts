import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
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
			backgroundImage: {
				'top-bottom-fade':
					'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(9,9,121,0) 10%, rgba(1,187,239,0) 90%, rgba(10,10,10,1) 100%);',
			},
			fontSize: {
				'2xs': '0.5rem',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
