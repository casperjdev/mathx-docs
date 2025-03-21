import type { MDXComponents } from 'mdx/types';

const mdxComponents: MDXComponents = {
	h1: (props) => (
		<h1 className='md:text-3xl text-base font-bold text-neutral-200 py-6' {...props} />
	),
	p: (props) => <p className='text-2xs text-neutral-200' {...props} />,
};

export default mdxComponents;
