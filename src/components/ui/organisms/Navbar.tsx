'use client';

import { useState } from 'react';
import NavbarGithub from '../atoms/NavbarGithub';
import NavbarLogo from '../atoms/NavbarLogo';
import MobileMenuToggle from '../atoms/MobileMenuToggle';
import MobileMenu from './MobileMenu';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className='w-full fixed h-6 px-1 border-b border-b-neutral-500 text-neutral-200 bg-neutral-950 flex flex-row justify-between items-center'>
			<div className='flex flex-row justify-between items-center gap-1'>
				<MobileMenuToggle onClick={setOpen} open={open} />
				<NavbarLogo />
			</div>
			<NavbarGithub />
			<MobileMenu open={open} />
		</nav>
	);
}
