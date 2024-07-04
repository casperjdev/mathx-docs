export default function NavbarContainer({ children }: { children: React.ReactNode }) {
	return (
		<nav className='w-full px-2 text-base text-neutral-200 bg-neutral-800 flex flex-row justify-between items-center'>
			{children}
		</nav>
	);
}
