import { Github } from '@/constants/icons';

export default function NavbarGithub() {
	return (
		<a
			href='https://github.com/vetemxnts/mathx-docs'
			target='_blank'
			className=' text-neutral-500 hover:text-neutral-200 transition-colors ease-smooth duration-500'>
			<Github className='size-3' />
		</a>
	);
}
