import NavbarGithub from '../atoms/NavbarGithub';
import NavbarLogo from '../atoms/NavbarLogo';

export default function Navbar() {
	return (
		<nav className='w-full h-6 px-2 text-base text-neutral-200 bg-neutral-900 flex flex-row justify-between items-center'>
			<NavbarLogo />
			<NavbarGithub />
		</nav>
	);
}
