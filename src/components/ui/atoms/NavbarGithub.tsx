import { GithubIcon } from '@/constants/icons';

export default function NavbarGithub() {
	return (
		<a
			href='https://github.com/vetemxnts/mathx-docs'
			target='_blank'
			className='size-3 text-neutral-700 hover:text-neutral-200 transition-colors ease-smooth duration-500'>
			<GithubIcon />
		</a>
	);
}
