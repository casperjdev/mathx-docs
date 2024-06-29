export default function NavbarContainer({ children }: { children: React.ReactNode }) {
	return (
		<nav className='fixed w-full h-4 px-2 text-xs text-neutral-200 bg-neutral-900 flex flex-row justify-between items-center'>
			{children}
		</nav>
	);
}
