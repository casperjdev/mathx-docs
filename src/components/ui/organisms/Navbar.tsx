import NavbarGithub from '../atoms/NavbarGithub';
import NavbarLogo from '../atoms/NavbarLogo';
import NavbarContainer from '../molecules/NavbarContainer';

export default function Navbar() {
	return (
		<NavbarContainer>
			<NavbarLogo />
			<NavbarGithub />
		</NavbarContainer>
	);
}
